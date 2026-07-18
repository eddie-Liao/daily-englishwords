/*
  stories.js — 每日故事
  ============================================
  這裡是「今日單字」頁面上方顯示的每日小故事。

  【運作原理】
  單字循環是固定的 32 天一輪（320 個字 ÷ 每天 10 個），第幾天在循環裡
  （day-in-cycle，0~31）永遠對應同一組 10 個單字，所以可以幫每一天都
  寫好一篇固定的故事，長期使用也不會跟當天出現的單字對不上。

  STORIES 陣列的「第幾筆」對應「循環裡的第幾天」（從 0 開始）。
  每篇故事都是繁體中文的生活小故事，把當天的 10 個單字/片語用英文
  直接寫進句子裡，並用 **文字** 包起來變粗體（跟 words.js 例句的粗體
  規則一樣），方便你一邊讀故事一邊記單字。

  【怎麼自己改故事？】
  如果你想換掉某一天的故事，只要找到對應的那一筆（陣列裡的第 N 個
  字串，N 就是 day-in-cycle），直接改寫文字內容即可，但記得：
  1. 那 10 個單字/片語都要出現在故事裡，而且都要用 **文字** 包起來
  2. 單字要照著 words.js 裡原本的英文拼法，不要打錯
  如果你在 app.js 裡把 CHUNK_SIZE（每天幾個字）或字庫總數改了，
  這裡的天數對應也會跟著變，故事可能就要重寫囉。
*/

const STORIES = [
  // Day 0
  "寫完**homework**後，我在準備明天的**exam**，題目好像會考到**global warming**的環保議題。晚上跟爸媽在捷運**platform**等車，聊到我未來想做的**career**，我說我對設計很有**ambition**。我們去逛街，媽媽刷**credit card**買了一台新烤箱，還特別問老闆有沒有**warranty**。回家路上還去了夜市的**amusement**設施繞了一圈，當作放鬆的**experience**。",

  // Day 1
  "今天跟我的**BFF**約好去看新開的甜點店，路上遇到**thunderstorm**，我們只好先在捷運站躲雨，還要**transfer**兩次車才到得了。等到天氣**clear up**，我們已經又餓又**thirsty**。甜點真的很**delicious**，老闆說有一部影片因為拍到他們家的蛋糕而**go viral**，隔壁桌坐著一對看起來很甜蜜的**couple**。晚上回家後，我看了新學期的**curriculum**表，發現作業變超多，只好把筆電**plug in**充電，準備熬夜。",

  // Day 2
  "姊姊說她想要**resign**，離開現在的公司去環遊世界，順便到處**sightseeing**。我聽了有點**jealous**，因為我這個月報告的**deadline**快到了，還要處理一堆**household**雜事。壓力大到我一度**freak out**，只好搭**subway**去公司附近叫**takeout**當晚餐，犒賞自己。回家後打開影集**binge-watch**放鬆一下，順便提醒自己明天要去做例行的**checkup**。",

  // Day 3
  "今天天氣好**muggy**，整個人覺得很**run down**。晚上照著網路上的**recipe**做了新菜，結果沒注意到裡面有堅果，我對堅果有**allergy**，吃完差點**throw up**，嚇死我了。男朋友最近因為工作壓力變得很**moody**，還為了明天的考試整晚**cram**。我們原本想穿新買的衣服去看**movie**，結果**size**買錯了穿不下，只好取消，改成在家窩著，心裡卻莫名有點**butterflies in one's stomach**，好像有什麼事要發生。",

  // Day 4
  "這次旅行的**destination**是一座海島，聽說又**humid**又**windy**，機票還要**layover**轉機一次。出發前一天我突然**sick**，量了體溫發現在**fever**，只好緊急延後行程。朋友笑我最近工作太拚，都沒有**work-life balance**，連旅遊都能生病。等身體好一點，我們先**rent**了一台車，順路去一間有很多**follower**追蹤推薦的**restaurant**吃飯，慢慢找回度假的心情。",

  // Day 5
  "朋友的班機**delay**了三小時，我在機場邊等邊聽電影**soundtrack**打發時間。他這趟是去見一位**entrepreneur**朋友，討論創業計畫，說這是他今年最重要的**goal**。回國那天他帶了一個小**souvenir**給我，說謝謝我一直**trust**他做的每個決定。晚上我在**bedroom**裡整理東西、順便**review**這學期的筆記，把房間佈置得更**cozy**一點。室友說我最近太顧著唸書，好像有點**selfish**，沒空陪她聊天，我答應明天會補償她。",

  // Day 6
  "教授今天的**lecture**特別提到友誼的重要性，我聽了很**touched**，想起跟我認識十年的好朋友。她剛**DM**我說幫我搶到了演唱會**ticket**，還在限動幫我**like**了好幾篇貼文加油打氣。因為期中**grade**公布在即，我最近很**nervous**，晚上她特地來我家陪我，還幫忙**cook**了一頓晚餐。吃完飯我們決定週末一起**hang out**，好好慶祝這段一直沒變的**friendship**。",

  // Day 7
  "自然課**teacher**今天講解**greenhouse effect**造成的氣候變遷，教室裡卻熱得跟**boiling**一樣，讓大家都提不起勁。她點名時發現我的**attendance**紀錄很好，還當著全班**share**了我平常做的環保筆記，讓我有點意外又**excited**。下課後她**sincere**地鼓勵我繼續保持，我開心到差點忘了原本**sad**的煩惱——想買的球鞋沒**discount**了。放學後朋友要我別想太多，先**chill out**再說。",

  // Day 8
  "週末在家幫忙**mow the lawn**，流了滿身汗，中午沒空好好吃飯，只**grab a bite**填肚子。下午**boss**傳訊息說有同事被抓到**plagiarism**，整個部門氣氛很緊繃。我最近本來就**catch a cold**，一直**cough**個不停，晚上還得**do the dishes**，實在很累。原本想出門**window shopping**放鬆一下，後來決定留在家好好**relax**，畢竟昨晚才為了報告**pull an all-nighter**，需要好好休息。",

  // Day 9
  "今天早上**miss the bus**，差點遲到，還好主管心情好，因為他剛拿到**promotion**升職了。這份**job**是我大學**internship**時就很想進的公司，同事私下都在**gossip**說我可能是下一個被升遷的人。中午大家湊**cash**買了樂透，晚上一群人去看一場藝術**exhibition**，路上樂團在街頭來了一段即興的**jam session**，氣氛熱鬧得像**concert**現場。唯一掃興的是，我約好的朋友竟然放我**ghost**，訊息已讀不回。",

  // Day 10
  "我在**livestream**上看到一件外套，價格卻**cost an arm and a leg**，猶豫了好久還是去店裡的**fitting room**試穿。路上遇到**traffic jam**，塞了快一小時，只好在車上**memorize**明天面試要用的自我介紹，還吞了顆**vitamin**補充體力。這次投的**resume**終於收到面試通知，讓我開心得**over the moon**！唯一擔心的是腳踝舊**injury**還沒完全好，希望不會影響搭**flight**出差面試的行程。",

  // Day 11
  "新同事今天來公司報到，是我們第一個**full-time**的設計師，主管特地跟大家**introduce**他。他說之前去歐洲**backpacking**背包旅行時，認識了不少朋友，很容易跟人**get along with**。他還是某個旅遊部落客的**fan**，那位部落客常在貼文加上「窮遊」的**hashtag**。下午他忽然說有點**under the weather**，出現輕微感冒的**symptom**，同事馬上拿出辦公室的**appliance**——加濕器幫他。我坐在旁邊處理無聊的表格，做到有點**get bored**。",

  // Day 12
  "外面下著大**rain**，新聞說山區可能會有**flood**的警報。我原本計畫的**leisure**活動——去河濱公園散步只好取消，改成在家**study**準備考試。中午叫外送**order**了一份標榜**nutritious**的健康餐，**ingredient**看起來都很新鮮，價格也算是**bargain**。晚上收到這個月的**utility bill**，水電費比想像中高，可能是最近常開除濕機的關係。晚點朋友傳來一段路邊街頭**performance**的影片，看得我也想出門走走了。",

  // Day 13
  "昨天在路上不舒服暈倒，一位**stranger**立刻扶我去**hospital**掛急診，我到現在都很**grateful**。住院這幾天，我最好的**friend**天天來看我，還幫我把家裡的**laundry**都處理好。出院結帳時我特地跟她要了**receipt**，想之後把醫藥費還她，她卻說朋友之間不用計較，讓我覺得絕對不能**betray**這份情誼。冰箱裡只剩幾樣**leftovers**，我決定痛快地**splurge**一次，叫一頓大餐謝謝她，也提醒自己以後要多注意居家**environment**的整潔，別再輕易生病。",

  // Day 14
  "今天有一場工作**interview**，天氣**forecast**說會下雨，我特地提早出門。過馬路走**crosswalk**時差點滑倒，覺得有點**embarrassed**。面試官人很親切，先跟我**small talk**幾句才進入正題，還老實告訴我這個職位的**salary**範圍。結束後我去逛街，看到喜歡的沙發剛好**on sale**，決定**buy**下來當作犒賞自己，順便參考網路上的居家**décor**靈感。回家路上還想著要不要去給**doctor**看一下扭到的腳踝。",

  // Day 15
  "這週末是家族**reunion**，大家難得聚在一起。表妹說她終於**download**了那本很紅的**novel**電子書，一直在追。吃飯前奶奶笑著喊大家**dig in**，餐桌上熱鬧極了。飯後我還得處理學校的**assignment**，順便查一下考證照需要的**qualification**。表弟悄悄跟我說他喜歡上班上一個女生，那是他的**crush**，還約好下週要一起去**amusement park**。奶奶說完聚會就要**catch a flight**去找姑姑，走之前還提醒我別忘了做家裡的**chore**。",

  // Day 16
  "同事最近很拼命想**climb the corporate ladder**，天天自願**overtime**加班到很晚。週末大家難得放假，決定安排一趟小**trip**放鬆。晚上去唱**karaoke**，大家搶著跟主唱拍**selfie**，氣氛很好。結帳時**bill**比想像中貴，我們還多留了一點**tip**給服務生。同事說他有時候還是會因為**peer pressure**硬撐著加班，我勸他要學會**forgive**自己，別逼太緊。外面風有點**chilly**，大家披著外套走回飯店。",

  // Day 17
  "這個**weekend**天氣**freezing**，我還是照計畫去健身房**work out**。教練說我的**posture**站不好容易受傷，特地多花時間糾正我，人很**generous**，完全沒多收費用。健身完想起要吃**medicine**，趕緊回家。晚上滑手機更新社群**profile**，看到朋友的樂團**band**要開表演，粉絲頁**update**了最新消息。他在咖啡廳打工，說今天遇到一位很難搞的**customer**，抱怨了半天。",

  // Day 18
  "新**semester**開始沒多久，朋友就說她工作快**burnout**，決定請假出國走走，出發前特地確認**passport**還沒過期。她說最近一個人住有點**lonely**，好在**neighbor**人很好，常常來聊天。過**customs**時排了很久的隊，落地後喝了一杯道地水果茶，味道意外偏**sour**。當地正經歷嚴重**drought**，導遊提醒大家**bathroom**用水要節省。這趟旅行她也想順便磨練語言**skill**。",

  // Day 19
  "最近**climate**變化大，早晚**temperature**差很多，一不小心就感冒，醫生說要多注意**immune system**。朋友最近心情有點**blue**、整天**down in the dumps**，我約她出來散心。她想買一個新**brand**的包包，看了**price**後猶豫了一下，最後還是決定省下來。晚上我們在家玩**board game**轉換心情，她申請帳號時想不出**username**，笑了老半天。她對我最近在學的新技能也很**curious**，問了一堆問題。",

  // Day 20
  "朋友做**part-time job**存了一筆錢，特地訂了餐廳的**reservation**要慶祝生日。翻開**menu**一看，**dessert**貴得離譜，大家都覺得根本是**rip-off**，怎麼會這麼**expensive**。餐廳老闆過來**apologize**，說是系統定價**algorithm**出錯，馬上幫我們打折。旁邊剛好坐著一位**acquaintance**，聊了幾句才知道原來大家都是為了同樣的原因來踩雷。最後餐廳補償得宜，大家還是玩得很**happy**。",

  // Day 21
  "本來說好今天要出發**road trip**，早上天空還**cloudy**，中午卻轉**sunny**，大家臨時決定出發。朋友是小有名氣的**influencer**，一路上不停拍照，我提醒她也要注意自己的**privacy**，別把行程完全公開。收音機正在討論最新一部**blockbuster**，主持人不小心說出關鍵**spoiler**，讓聽眾崩潰，還意外**viral**上了新聞。開車開到一半我開始**headache**，大家笑我一定是因為昨晚又**procrastinate**到太晚睡。",

  // Day 22
  "**typhoon**來襲，外面風雨很大，我決定待在家不出門。家裡最近在**renovate**，工人提醒要先把回收物**recycle**分類好搬到外面。**bored**了一整天，滑手機看到百貨公司線上**sale**，挑了幾件衣服送到**checkout**，還套用美肌**filter**自拍試穿效果。朋友傳訊息問我要不要視訊，我忙著補**sleep**沒空**text back**。晚點終於回覆她，她說看到我最近變得比較**confident**，替我開心。",

  // Day 23
  "同事**colleague**最近在猶豫要不要辭掉穩定的**nine-to-five**工作，去唸研究所，但**tuition**不便宜，讓他有點**pessimistic**，覺得存不到這筆**budget**。我傳了一個加油的**emoji**鼓勵他。晚上我們約在頂樓聊天，涼涼的**breeze**吹著很舒服。他點了一份超**spicy**的鹹酥雞，邊吃邊抱怨**plot**很爛的新劇，說最近整個人變成**couch potato**，都窩在沙發上追劇。",

  // Day 24
  "室友**roommate**這學期特別**energetic**，一邊唸書一邊做**side hustle**賺外快。她剛生完一場小病，正在慢慢**recover**中，胃口卻好得不得了，昨晚聚餐**eat like a horse**，**waiter**都被她點的餐嚇到。飯後她在朋友的貼文下**comment**分享心得，說很想存錢去**travel**。回家後她拿出吸塵器**vacuum**打掃房間，順手把桌上一堆**textbook**收好，說要重新振作精神讀書。",

  // Day 25
  "朋友規劃了這次旅遊的**itinerary**，內容排得很緊湊。出發前一晚外面忽然**pour**下起傾盆大雨，我們只好先在**kitchen**煮碗熱湯壓壓驚。她說最近工作上很重視**networking**，常常參加活動認識新朋友，但她始終**loyal**地維持著跟老朋友的**relationship**。隔天手機**notification**一直跳出來，是她要上台演講的提醒，台下**audience**已經在等她了。緊張讓她整個沒有**appetite**，連早餐都沒吃，我提醒她那可是她最擅長的**subject**，不用擔心。",

  // Day 26
  "今天終於考完試，而且**ace**了，整個人放鬆下來，決定在**airport**旁的咖啡廳跟朋友**chill**聊天。我們點了一杯**beverage**，**quality**意外地好。朋友最近拍片**upload**到網路後，被幾個**troll**留言嘲諷，**stress**大到吃不下飯。我陪她聊了很久，她說突然覺得**hungry**，想吃點東西轉換心情，於是我們決定去點杯**drink**暖暖身子。",

  // Day 27
  "今天天空很**gloomy**，朋友心情也不太好，因為她剛經歷一場**breakup**。她在社群**post**了一篇文抒發心情，卻被不認識的人留酸言酸語，她果斷把對方**block**掉。她說前男友個性很**stubborn**，在**workplace**上也常跟同事起爭執。為了轉換心情，我們留在家**play a game**，她負責整理房間，我幫忙**take out the trash**，順便把**messy**的桌面收乾淨。後來她**subscribe**了一個療癒系頻道，說想每天看一點正能量影片。",

  // Day 28
  "表弟申請到出國交換的**scholarship**，開心得不得了，正在整理**luggage**準備出發。他最近辭掉**cram school**的兼職老師工作，改行當**freelancer**，收入不穩定讓他有點**anxious**。我**honest**跟他說，剛轉行本來就需要適應期，不用給自己太大壓力。他買了一件外套發現尺寸不合，跑去**exchange**，老闆還說這個價格根本是**a steal**。出發前他擔心會有**jet lag**，睡不好，也怕自己沒辦法**concentrate**上課。",

  // Day 29
  "阿姨決定**sell**掉舊房子搬去鄉下，說想過更**healthy**的生活，多曬曬太陽，享受好**weather**。表哥快要**graduate**了，這陣子拼命**hit the books**準備最後的考試。他打工兼職當**tour guide**時，跟一位同事一見面就**hit it off**，兩人現在感情很好。搬家那天大家分工合作，我負責打包廚房**utensils**，弟弟卻只顧著玩手機**game**，媽媽看了很**angry**，唸了他好幾句。",

  // Day 30
  "週末在家**clean**，把房間整理得很**tidy**，還把不合尺寸的衣服申請**refund**。最近我開始注意**diet**均衡，減少外食，也算是重新培養一項健康的**hobby**。朋友傳來一張很好笑的**meme**，說她跟男友昨天為了要不要換掉舊車而**argue**，他覺得舊車**cheap**又好用，她卻擔心排放**pollution**太嚴重。最後兩人決定周末開車去一個**off the beaten path**的小鎮走走，順便冷靜一下。",

  // Day 31
  "老同學**classmate**上個月做了一場小**surgery**，恢復得不錯，整個人心態依然很**optimistic**。他趁著休養期間添購了新**furniture**，用**installment**的方式買了一張舒服的沙發。醫生叮嚀他要多**exercise**，但他個性比較**shy**，不敢自己一個人去健身房。我們約好這週末去露營，先訂好**accommodation**，記得帶足夠的食物一起**eat**，也提醒大家要把**garbage**都收好帶下山。",
];

window.STORIES = STORIES;
