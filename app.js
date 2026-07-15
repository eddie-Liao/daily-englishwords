/*
  app.js — 每日英文單字 App 的主要邏輯
  ============================================
  這個檔案負責：
  1. 用「固定種子」的洗牌演算法，決定每天要顯示哪 10 個單字
  2. 間隔重複複習排程（1, 3, 7, 14, 30 天）
  3. 把學習紀錄存進 localStorage，重開頁面也不會不見
  4. 畫面切換（今日單字／複習／進度）
  你不需要修改這個檔案就能新增單字，新增單字請去改 words.js。
*/

(function () {
  "use strict";

  // ===================== 基本設定 =====================
  const INTERVALS = [1, 3, 7, 14, 30]; // 間隔重複的天數
  const CHUNK_SIZE = 10;               // 每天顯示幾個字
  const REF_DATE = new Date(2024, 0, 1); // 排程用的固定參考日（隨便選一天當起點）

  // 如果你想讓這個 App 可以在 LINE 裡打開，去 LINE Developers 建立 LIFF App 後
  // 把拿到的 LIFF ID（長得像 1234567890-AbCdEfGh）填在這裡，其他都不用改
  const LIFF_ID = "";
  let isInLiffClient = false;

  const LS_RECORDS = "dew_records";        // 複習紀錄
  const LS_LEARNED_DATES = "dew_learnedDates"; // 已完成學習的日期列表

  const WORD_MAP = {}; // word 文字 -> 單字物件，方便查詢
  WORDS.forEach((w) => { WORD_MAP[w.word] = w; });

  // ===================== 日期工具 =====================
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  function todayDate() {
    // 回傳「今天」的 Date（時分秒歸零，使用手機本地時間，不是 UTC）
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  function dateToStr(d) {
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function todayStr() { return dateToStr(todayDate()); }

  function strToDate(s) {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function addDaysToStr(s, n) {
    const d = strToDate(s);
    d.setDate(d.getDate() + n);
    return dateToStr(d);
  }

  function diffDaysFromRef(d) {
    return Math.floor((d.getTime() - REF_DATE.getTime()) / 86400000);
  }

  // ===================== 種子亂數（不用 Math.random） =====================
  // mulberry32：給同一個 seed，永遠會產生同一串「隨機」數字
  function mulberry32(seed) {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function seededShuffle(array, seed) {
    const rand = mulberry32(seed);
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ===================== 今日單字挑選 =====================
  function getTodayWords() {
    const total = WORDS.length;
    const cycleLength = Math.ceil(total / CHUNK_SIZE); // 幾天才能輪完整個字庫
    const daysSinceRef = Math.max(0, diffDaysFromRef(todayDate()));
    const cycleIndex = Math.floor(daysSinceRef / cycleLength);
    const dayInCycle = daysSinceRef % cycleLength;

    // 每一輪（cycle）用不同的種子洗牌一次，順序在同一輪內固定
    const order = seededShuffle([...Array(total).keys()], cycleIndex);
    const start = dayInCycle * CHUNK_SIZE;
    const indices = order.slice(start, start + CHUNK_SIZE);
    return indices.map((i) => WORDS[i]);
  }

  // ===================== localStorage 存取 =====================
  function loadRecords() {
    try {
      return JSON.parse(localStorage.getItem(LS_RECORDS)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveRecords(records) {
    localStorage.setItem(LS_RECORDS, JSON.stringify(records));
  }

  function loadLearnedDates() {
    try {
      return JSON.parse(localStorage.getItem(LS_LEARNED_DATES)) || [];
    } catch (e) {
      return [];
    }
  }

  function saveLearnedDates(dates) {
    localStorage.setItem(LS_LEARNED_DATES, JSON.stringify(dates));
  }

  function isTodayLearned() {
    return loadLearnedDates().includes(todayStr());
  }

  // ===================== 學習 / 複習排程邏輯 =====================
  function markTodayAsLearned(todayWords) {
    const records = loadRecords();
    const today = todayStr();

    todayWords.forEach((w) => {
      records[w.word] = {
        stage: 0,
        nextReviewDate: addDaysToStr(today, INTERVALS[0]),
        mastered: false,
        learnedDate: today,
      };
    });
    saveRecords(records);

    const dates = loadLearnedDates();
    if (!dates.includes(today)) {
      dates.push(today);
      dates.sort();
      saveLearnedDates(dates);
    }
  }

  function getDueReviewWords() {
    const records = loadRecords();
    const today = todayStr();
    const due = [];
    Object.keys(records).forEach((word) => {
      const r = records[word];
      if (!r.mastered && r.nextReviewDate <= today) {
        due.push({ word, record: r });
      }
    });
    due.sort((a, b) => (a.record.nextReviewDate < b.record.nextReviewDate ? -1 : 1));
    return due;
  }

  function reviewRemember(word) {
    const records = loadRecords();
    const r = records[word];
    if (!r) return;
    const today = todayStr();
    r.stage += 1;
    if (r.stage >= INTERVALS.length) {
      r.mastered = true;
      r.nextReviewDate = null;
    } else {
      r.nextReviewDate = addDaysToStr(today, INTERVALS[r.stage]);
    }
    saveRecords(records);
  }

  function reviewForget(word) {
    const records = loadRecords();
    const r = records[word];
    if (!r) return;
    const today = todayStr();
    r.stage = 0;
    r.nextReviewDate = addDaysToStr(today, 1);
    saveRecords(records);
  }

  // ===================== 連續天數（streak）計算 =====================
  function computeStreak() {
    const datesSet = new Set(loadLearnedDates());
    const today = todayDate();

    let anchor;
    if (datesSet.has(dateToStr(today))) {
      anchor = today;
    } else {
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      if (datesSet.has(dateToStr(yesterday))) {
        anchor = yesterday;
      } else {
        return 0; // 今天跟昨天都沒學 -> 中斷，歸零
      }
    }

    let streak = 0;
    const cursor = new Date(anchor);
    while (datesSet.has(dateToStr(cursor))) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  // ===================== 文字渲染小工具 =====================
  function renderExample(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function stripBold(text) {
    return text.replace(/\*\*/g, "");
  }

  // ===================== 語音朗讀（瀏覽器內建，不用連網API） =====================
  let currentSpeakingBtn = null;

  function speak(text, btn) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    if (currentSpeakingBtn) currentSpeakingBtn.classList.remove("speaking");

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    currentSpeakingBtn = btn || null;
    if (btn) btn.classList.add("speaking");

    const stopGlow = () => {
      if (btn) btn.classList.remove("speaking");
      if (currentSpeakingBtn === btn) currentSpeakingBtn = null;
    };
    utter.onend = stopGlow;
    utter.onerror = stopGlow;

    window.speechSynthesis.speak(utter);
  }

  function wordCardHTML(w, idx) {
    return `
      <div class="word-card">
        <div class="word-card-top">
          <span class="w-word">${w.word}</span>
          <button type="button" class="speak-btn speak-btn-sm" data-idx="${idx}" data-type="word" aria-label="唸出單字">🔊</button>
          <span class="w-pos">${w.pos}</span>
          <span class="w-level">${w.level}</span>
        </div>
        <div class="w-zh">${w.zh}</div>
        <div class="w-example-row">
          <div class="w-example">${renderExample(w.example)}</div>
          <button type="button" class="speak-btn speak-btn-sm" data-idx="${idx}" data-type="example" aria-label="唸出例句">🔊</button>
        </div>
        <div class="w-example-zh">${w.exampleZh}</div>
        <span class="w-tag">${w.tag}</span>
      </div>
    `;
  }

  // ===================== 分頁：今日單字 =====================
  let cachedTodayWords = null;

  function renderTodayTab() {
    if (!cachedTodayWords) cachedTodayWords = getTodayWords();
    const listEl = document.getElementById("today-word-list");
    const summaryEl = document.getElementById("today-summary");
    const btn = document.getElementById("learn-done-btn");
    const doneMsg = document.getElementById("learn-done-message");

    listEl.innerHTML = cachedTodayWords.map((w, idx) => wordCardHTML(w, idx)).join("");
    summaryEl.textContent = `今天總共有 ${cachedTodayWords.length} 個新單字，一起來學習吧！`;

    if (isTodayLearned()) {
      btn.textContent = "✅ 今天已經學完囉！";
      btn.disabled = true;
      doneMsg.hidden = false;
    } else {
      btn.textContent = "我學完今天的 10 個字了 ✅";
      btn.disabled = false;
      doneMsg.hidden = true;
    }
  }

  document.getElementById("today-word-list").addEventListener("click", (e) => {
    const speakBtn = e.target.closest(".speak-btn");
    if (!speakBtn) return;
    const w = cachedTodayWords[Number(speakBtn.dataset.idx)];
    if (!w) return;
    if (speakBtn.dataset.type === "word") {
      speak(w.word, speakBtn);
    } else {
      speak(stripBold(w.example), speakBtn);
    }
  });

  document.getElementById("learn-done-btn").addEventListener("click", () => {
    if (isTodayLearned()) return;
    markTodayAsLearned(cachedTodayWords || getTodayWords());
    renderTodayTab();
    updateReviewBadge();
  });

  // ===================== 分頁：複習 =====================
  let reviewQueue = [];
  let reviewIndex = 0;

  function startReviewSession() {
    reviewQueue = getDueReviewWords();
    reviewIndex = 0;
    renderReviewCard();
  }

  function renderReviewCard() {
    const emptyEl = document.getElementById("review-empty");
    const areaEl = document.getElementById("review-area");
    const finishedEl = document.getElementById("review-finished");
    const progressEl = document.getElementById("review-progress");
    const buttonsEl = document.getElementById("review-buttons");
    const flashcard = document.getElementById("flashcard");

    if (reviewQueue.length === 0) {
      emptyEl.hidden = false;
      areaEl.hidden = true;
      finishedEl.hidden = true;
      return;
    }
    emptyEl.hidden = true;

    if (reviewIndex >= reviewQueue.length) {
      areaEl.hidden = true;
      finishedEl.hidden = false;
      updateReviewBadge();
      return;
    }

    areaEl.hidden = false;
    finishedEl.hidden = true;
    flashcard.classList.remove("flipped");
    buttonsEl.hidden = true;

    const item = reviewQueue[reviewIndex];
    const w = WORD_MAP[item.word];
    progressEl.textContent = `複習進度：${reviewIndex + 1} / ${reviewQueue.length}`;

    document.getElementById("card-level").textContent = w.level;
    document.getElementById("card-word").textContent = w.word;
    document.getElementById("card-pos").textContent = w.pos;
    document.getElementById("card-zh").textContent = w.zh;
    document.getElementById("card-example").innerHTML = renderExample(w.example);
    document.getElementById("card-example-zh").textContent = w.exampleZh;

    const speakFrontBtn = document.getElementById("speak-front-btn");
    const speakBackBtn = document.getElementById("speak-back-btn");
    speakFrontBtn.onclick = (e) => {
      e.stopPropagation();
      speak(w.word, speakFrontBtn);
    };
    speakBackBtn.onclick = (e) => {
      e.stopPropagation();
      speak(stripBold(w.example), speakBackBtn);
    };
  }

  document.getElementById("flashcard").addEventListener("click", () => {
    if (reviewQueue.length === 0 || reviewIndex >= reviewQueue.length) return;
    const flashcard = document.getElementById("flashcard");
    const flipped = flashcard.classList.toggle("flipped");
    document.getElementById("review-buttons").hidden = !flipped;
  });

  document.getElementById("btn-remember").addEventListener("click", () => {
    const item = reviewQueue[reviewIndex];
    if (!item) return;
    reviewRemember(item.word);
    reviewIndex++;
    renderReviewCard();
  });

  document.getElementById("btn-forget").addEventListener("click", () => {
    const item = reviewQueue[reviewIndex];
    if (!item) return;
    reviewForget(item.word);
    reviewIndex++;
    renderReviewCard();
  });

  function updateReviewBadge() {
    const due = getDueReviewWords();
    const badge = document.getElementById("review-badge");
    if (due.length > 0) {
      badge.hidden = false;
      badge.textContent = due.length > 99 ? "99+" : String(due.length);
    } else {
      badge.hidden = true;
    }
  }

  // ===================== 分頁：進度 =====================
  function renderProgressTab() {
    const records = loadRecords();
    const learnedDates = loadLearnedDates();

    let reviewing = 0;
    let mastered = 0;
    Object.values(records).forEach((r) => {
      if (r.mastered) mastered++;
      else reviewing++;
    });

    document.getElementById("stat-streak").textContent = computeStreak();
    document.getElementById("stat-reviewing").textContent = reviewing;
    document.getElementById("stat-mastered").textContent = mastered;
    document.getElementById("stat-days").textContent = learnedDates.length;

    // 在 LINE 裡開啟時，顯示 LINE 專屬提示，不用再顯示 iOS 安裝教學
    if (isInLiffClient) {
      document.getElementById("ios-install-guide").hidden = true;
      document.getElementById("line-guide").hidden = false;
    } else {
      document.getElementById("line-guide").hidden = true;
      // iOS 安裝教學
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const isStandalone =
        window.navigator.standalone === true ||
        window.matchMedia("(display-mode: standalone)").matches;
      document.getElementById("ios-install-guide").hidden = !(isIOS && !isStandalone);
    }

    // 學過的單字清單
    const listEl = document.getElementById("learned-list");
    const entries = Object.entries(records).sort((a, b) => {
      // 精通的排後面，其餘依學習日期新到舊排序
      if (a[1].mastered !== b[1].mastered) return a[1].mastered ? 1 : -1;
      return a[1].learnedDate < b[1].learnedDate ? 1 : -1;
    });

    if (entries.length === 0) {
      listEl.innerHTML = `<div class="no-data">還沒有學過任何單字，快去「今日單字」開始吧！</div>`;
      return;
    }

    listEl.innerHTML = entries
      .map(([word, r]) => {
        const w = WORD_MAP[word];
        if (!w) return "";
        const status = r.mastered
          ? "🏆 精通"
          : `複習中 (${r.stage}/${INTERVALS.length})`;
        return `
          <div class="learned-item">
            <span class="lw-word">${r.mastered ? "🏆 " : ""}${w.word}</span>
            <span class="lw-zh">${w.zh}</span>
            <span class="lw-status">${status}</span>
          </div>
        `;
      })
      .join("");
  }

  // ===================== 分頁切換 =====================
  const tabPanels = {
    today: document.getElementById("tab-today"),
    review: document.getElementById("tab-review"),
    progress: document.getElementById("tab-progress"),
  };
  const navButtons = document.querySelectorAll(".nav-btn");

  function switchTab(name) {
    Object.keys(tabPanels).forEach((key) => {
      tabPanels[key].hidden = key !== name;
    });
    navButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === name);
    });

    if (name === "today") renderTodayTab();
    if (name === "review") startReviewSession();
    if (name === "progress") renderProgressTab();
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // ===================== 頭部日期顯示 =====================
  function renderHeaderDate() {
    const d = todayDate();
    const weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    document.getElementById("header-date").textContent =
      `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日（星期${weekdays[d.getDay()]}）`;
  }

  // ===================== LINE LIFF（讓 App 可以在 LINE 裡打開） =====================
  function initLiff() {
    // 沒有載入 LIFF SDK（例如離線）或還沒填 LIFF_ID，就當一般網頁繼續使用
    if (typeof liff === "undefined" || !LIFF_ID) return;
    liff
      .init({ liffId: LIFF_ID })
      .then(() => {
        isInLiffClient = liff.isInClient();
      })
      .catch(() => {
        // 不是在 LINE 環境開啟，或初始化失敗，當作一般網頁繼續使用即可
      });
  }

  // ===================== 初始化 =====================
  function init() {
    initLiff();
    renderHeaderDate();
    renderTodayTab();
    updateReviewBadge();

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(() => {
          // 離線快取註冊失敗不影響主要功能，靜默忽略即可
        });
      });
    }
  }

  init();
})();
