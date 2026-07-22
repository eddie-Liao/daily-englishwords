/*
  stories_en.js — 每日故事（英文版）
  ============================================
  這是「英文克漏字測驗」用的每日英文小短文，風格跟 stories.js 的中文
  故事一樣，都是固定 64 天一輪（day-in-cycle 0~63），每一篇都把當天
  的 10 個單字/片語用 **文字** 包起來變粗體。

  跟中文故事不同的地方：這裡整篇都是「學測程度」的英文短文（約
  80~110 字），單字的拼法要跟 words.js 完全一致，而且都寫成原形
  （字典查得到的形式），不會因為時態或單複數而改變拼法——如果句子
  需要變化，前後綴會寫在 ** ** 記號外面（例如 **follower**s）。

  STORIES_EN 陣列的「第幾筆」一樣對應「循環裡的第幾天」（從 0 開始）。
*/

const STORIES_EN = [
  // Day 0
  `Last week I finally had a new **experience**: waiting for a train on a busy **platform** made me think about my future **career**. I still remember using my mom's **credit card** to buy a fan that came with a two-year **warranty**. My favorite show discusses **global warming** and how factories keep polluting the air, which mixes serious facts with **amusement**. That night I stayed up late doing **homework**, but I also wrote down my biggest **ambition**: to design something that actually helps the planet before my next **exam**.`,

  // Day 1
  `My **BFF** and I planned to meet downtown, but we had to **transfer** trains twice because of a sudden **thunderstorm**. By the time the sky started to **clear up**, we were both starving and **thirsty**. The bakery we found made incredibly **delicious** pastries, and a **couple** sitting nearby said a video of the shop was about to **go viral** online. Later, my friend had to **plug in** her laptop to check the new **curriculum** for next semester, since the school had just announced some unexpected changes to it.`,

  // Day 2
  `My sister told me she plans to **resign** from her job and spend a year **sightseeing** around Europe. I felt a little **jealous**, especially since I still have a report **deadline** this week. She said managing a **household** budget while traveling can be tricky, but she'd rather take the **subway** to new places than stay home. Last night I started to **freak out** about my workload, so I ordered **takeout** and decided to **binge-watch** a drama instead of stressing more. Tomorrow I also have a dental **checkup**, which I almost forgot about.`,

  // Day 3
  `The weather was so **muggy** that I felt **run down** all afternoon. That evening, I tried a new **recipe** I found online, but I forgot I have a peanut **allergy** and nearly started to **throw up** after tasting the sauce. My brother has been **moody** lately because he needs to **cram** for finals instead of watching a **movie** with us. He also ordered the wrong **size** of shirt online. Before my presentation tomorrow, I already have **butterflies in one's stomach**, even though I've practiced it many times.`,

  // Day 4
  `Our next travel **destination** is a coastal town that's famous for being **humid** and **windy** all year round. The flight has a long **layover**, and right before boarding I suddenly felt **sick** with a slight **fever**. My colleague, who has thousands of **follower**s on social media, said traveling helped her find better **work-life balance**. Once we land, we plan to **rent** a scooter and try a small local **restaurant** that a friend recommended, hoping the fever goes away by then.`,

  // Day 5
  `My friend's flight had a three-hour **delay**, so she listened to a movie **soundtrack** to pass the time at the gate. She was flying to meet an **entrepreneur** she trusts, hoping to reach her **goal** of starting a small business together. When she came home, she gave me a tiny **souvenir** and thanked me for helping her **review** her business plan, since she always says she can **trust** my judgment. I've turned my **bedroom** into a **cozy** little office, though my roommate jokes that I'm being a bit **selfish** with the space.`,

  // Day 6
  `During today's **lecture**, the professor talked about the value of true **friendship**, and I felt really **touched**. Right after class, an old classmate sent me a **DM** asking if I wanted to **hang out** this weekend. I was a little **nervous** about my upcoming **grade**, but I still said yes. She offered to **cook** dinner at her place, and I promised to bring dessert. Later she posted a photo of the meal, and I was the first to **like** it. I even found a discounted **ticket** to a concert we both wanted to attend.`,

  // Day 7
  `Our science **teacher** explained how the **greenhouse effect** is making summers feel almost **boiling**. I felt a bit **sad** hearing how serious the problem has become, but I was also **excited** when she said we could **share** our own ideas for a class project. She keeps perfect **attendance** records and gave a **sincere** compliment to anyone who spoke up. After class, my friend found a **discount** on reusable water bottles, so we celebrated by taking a walk to **chill out** before the next class started.`,

  // Day 8
  `On Saturday morning, my dad asked me to **mow the lawn** before we could **grab a bite** at the new diner downtown. I've had a slight **cough** since Thursday, probably because I started to **catch a cold** during finals week, when I had to **pull an all-nighter** to finish an essay. My **boss** later warned everyone about a case of **plagiarism** found in another employee's report. When I finally got home, I decided to **do the dishes** first, then just **relax** instead of going **window shopping** like I originally planned.`,

  // Day 9
  `Whenever office **gossip** about the next **promotion** keeps me up late, I tend to **miss the bus** the next morning. My cousin just started a new **job** after she finished her **internship** at a design studio. Last weekend she paid in **cash** for tickets to an outdoor **concert**, where a local band decided to hold a surprise **jam session** with the crowd. She also went to an art **exhibition** downtown, but a friend she invited chose to **ghost** her instead of showing up as promised.`,

  // Day 10
  `I watched a **livestream** where a shop owner joked that his new jackets **cost an arm and a leg**. Still, I went to try one on in the **fitting room**, since I wanted to **memorize** exactly how it looked before deciding. On the way home, we got stuck in a **traffic jam**, so I took a **vitamin** to feel less tired. I had just sent my **resume** for a new job, hoping my old ankle **injury** wouldn't stop me from traveling. When I finally got the callback before my **flight**, I was completely **over the moon**.`,

  // Day 11
  `The new **full-time** designer joined our team today, and our manager took a moment to **introduce** him to everyone. He mentioned he used to go **backpacking** across Europe, which is how he learned to **get along with** all kinds of people. He's a big **fan** of a travel blogger who always adds the same **hashtag** to her posts. In the afternoon, he suddenly said he felt **under the weather**, showing a mild **symptom** of a cold. Someone brought out a small kitchen **appliance** to make him tea, while the rest of us tried not to **get bored** doing paperwork.`,

  // Day 12
  `Heavy **rain** all week has raised warnings about possible **flood**ing near the river. I decided to **study** at a cafe instead of the library, and stopped to **order** something **nutritious** for lunch. The menu listed every **ingredient**, and the price felt like a real **bargain**. Outside, a street **performance** drew a small crowd before the rain got worse again. That evening, I opened this month's **utility bill** and realized I should spend less **leisure** time running the air conditioner.`,

  // Day 13
  `A kind **stranger** helped me when I felt dizzy on the street and walked me straight to the **hospital**. I felt so **grateful**, especially because my best **friend** rushed over as soon as she heard, and even did my **laundry** while I rested. She kept the **receipt** for my medicine so I could pay her back, though she insisted she would never **betray** our friendship over money. Since she cares a lot about the **environment**, she reminded me to recycle the containers before we shared some **leftovers** from the fridge. I decided to **splurge** on dessert for both of us to say thank you.`,

  // Day 14
  `Before my job **interview**, the weather **forecast** predicted rain, so I grabbed an umbrella before crossing the **crosswalk**. I felt a bit **embarrassed** when I arrived early and had to make **small talk** with the receptionist. The interviewer asked about my expected **salary** and seemed friendly throughout. Afterward, I decided to **buy** a small gift for myself since a nice lamp was **on sale** nearby, matching the **décor** of my room. I even considered visiting the **doctor** about my sore throat, but decided it could wait until the weekend.`,

  // Day 15
  `At the family **reunion**, my cousin told everyone to **dig in** before the food got cold. She just finished a difficult **assignment** for her teaching **qualification** and was heading to **catch a flight** the next morning. She admitted she still has a small **crush** on an old classmate she reconnected with online. Before leaving, she had to **download** a new travel app and finish one last household **chore**. She also promised to take her little brother to an **amusement park**, and started reading a new **novel** on the plane to relax.`,

  // Day 16
  `My coworker is determined to **climb the corporate ladder**, so he volunteers for **overtime** almost every week. To relax, our team planned a short **trip** together, and one night we all sang **karaoke** and took a group **selfie**. He admitted that sometimes **peer pressure** at work makes him say yes to things he shouldn't. When the **bill** came, he insisted on leaving a generous **tip** for the staff. It was a bit **chilly** outside, so we hurried back, and he asked me to **forgive** him for being late earlier that day.`,

  // Day 17
  `It was **freezing** outside this **weekend**, but I still went to **work out** at the gym. My trainer reminded me to fix my **posture**, and he's always so **generous** with his advice. After the session, I updated my fitness **profile** online and read a small **update** about a local **band**'s new show. Later, at the pharmacy where I work part-time, a **customer** asked if a certain **medicine** needed a prescription. I told her I'd double-check, since I didn't want to give the wrong answer.`,

  // Day 18
  `This **semester** has been exhausting, and I'm starting to feel real **burnout**. My **neighbor** noticed I looked **lonely** lately and invited me over for tea, though it tasted strangely **sour**. She just renewed her **passport** for a trip abroad and wants to practice a new language **skill** before she goes. She also mentioned the region she's visiting is suffering from a serious **drought**. Before leaving her apartment, I used her **bathroom** quickly, and going through airport **customs** together sounded like it would be an adventure for her.`,

  // Day 19
  `Scientists say the local **climate** has changed, with the average **temperature** rising every year. My friend has felt **blue** and a little **down in the dumps** lately, so I invited her over to play a **board game**. She mentioned wanting to boost her **immune system** with more vitamins before winter. While chatting, she asked how much a certain shoe **brand** costs, since the **price** seemed high online. I told her I was **curious** about the same shoes, but I had forgotten my account **username** to check the store's app.`,

  // Day 20
  `We made a dinner **reservation** at a new restaurant that a casual **acquaintance** had recommended. Looking at the **menu**, the **dessert** section seemed surprisingly **expensive**, almost like a **rip-off**. The manager came to **apologize** for the slow service and offered a free coffee instead. My friend, who works a **part-time job** at a tech company, joked that the restaurant's app **algorithm** probably raises prices for popular items. Even so, we left feeling **happy**, since the food itself was genuinely good.`,

  // Day 21
  `The morning was **cloudy**, but by noon it turned **sunny**, perfect for the **road trip** we'd been planning. My cousin, who works as an **influencer**, warned us not to post exact locations online for **privacy** reasons. On the drive, someone accidentally gave away a **spoiler** for the new **blockbuster** movie, and a clip about it quickly went **viral**. I felt a slight **headache** from the sun, and I admitted I tend to **procrastinate** whenever it's time to plan our next stop.`,

  // Day 22
  `Because a **typhoon** was approaching, we decided to **renovate** our storm shutters early instead of waiting. I felt **bored** all afternoon, so I browsed an online **sale** and used a beauty **filter** on a few photos just for fun. My friend promised to **text back** once she woke from her nap, since she needed more **sleep** before the storm hit. I also reminded myself to **recycle** the old boxes cluttering the balcony. When I finally reached the **checkout** page for my order, I felt oddly **confident** that everything would arrive before the typhoon made landfall.`,

  // Day 23
  `My **colleague** feels **pessimistic** about switching from her **nine-to-five** job to freelance work, mostly because of her tight **budget**. Rising **tuition** for her night classes doesn't help either. On our lunch break, a cool **breeze** made the rooftop feel pleasant while we ate **spicy** noodles. She joked that she's become such a **couch potato** on weekends that she barely follows any show's **plot** anymore. I sent her a supportive **emoji** and told her things would work out.`,

  // Day 24
  `My **roommate** has been unusually **energetic** since she started to **recover** from her cold. She runs a small **side hustle** selling handmade cards and still finds time to **travel** on weekends. Last night, we went out to dinner, and the **waiter** looked surprised at how much she can **eat like a horse**. She left a kind **comment** on the restaurant's page afterward. Before bed, she promised to organize her old **textbook**s and finally **vacuum** her side of the room this weekend.`,

  // Day 25
  `Before the trip, my friend prepared a detailed **itinerary** and stayed **loyal** to the plan even when others wanted to change it. She lost her **appetite** the morning of her big presentation, worried the **audience** might ask hard questions about her research **subject**. Right as she stepped on stage, rain began to **pour** outside. Afterward, she got a **notification** about a **networking** event that could help her professional **relationship**s with other researchers. That evening, she relaxed in the **kitchen**, cooking a simple meal to calm down.`,

  // Day 26
  `After I managed to **ace** my final exam, I felt free of **stress** for the first time in weeks. I decided to **chill** at the **airport** cafe before my flight and order a cold **beverage**. The barista said the high **quality** of their coffee comes from a local roaster, so I chose that **drink** instead. While waiting, I tried to **upload** a photo of my meal, but a random **troll** left a rude comment under my last post. Feeling a little **hungry**, I ordered a sandwich to go with my coffee.`,

  // Day 27
  `The sky looked **gloomy** the day my friend went through a difficult **breakup**. She wrote a long **post** about it online, then decided to **block** her ex's account completely. Her **workplace** has been stressful too, since a **stubborn** manager refuses to change outdated rules. To cheer her up, we stayed in to **play a game**, and I helped her **take out the trash** and tidy her **messy** apartment. She later said she wants to **subscribe** to a calming meditation channel to feel better.`,

  // Day 28
  `My neighbor's son just received a **scholarship** to study abroad and is busy packing his **luggage**. He used to work part-time at a **cram school**, but now he wants to become a **freelancer** instead. He feels a little **anxious** about the long flight and possible **jet lag** afterward. To be **honest**, he also worries he won't be able to **concentrate** on his studies at first. Before leaving, he found a great deal online, calling it **a steal**, and plans to **exchange** his leftover cash for the local currency at the airport.`,

  // Day 29
  `My brother is about to **graduate**, so he's decided to **hit the books** hard this final month. He recently started a part-time job as a **tour guide**, and he says he managed to **hit it off** with most of the tourists right away. His parents got a little **angry** when he stayed out late watching a basketball **game** instead of studying. Still, he insists it's important to stay **healthy**, especially with unpredictable **weather** lately. Yesterday he even offered to **sell** some old kitchen **utensils** he no longer needs.`,

  // Day 30
  `My sister decided to **clean** and **tidy** her entire room this weekend, calling it her new **hobby**. She's also trying a healthier **diet** after reading an article about air **pollution**'s effect on health. Yesterday she tried to **argue** with a store clerk about getting a **refund** for a **cheap** jacket that fell apart quickly. To relax afterward, she sent me a funny **meme** and suggested we travel somewhere **off the beaten path** next summer instead of a crowded tourist spot.`,

  // Day 31
  `An old **classmate** recently had minor **surgery** and stayed remarkably **optimistic** throughout recovery. He bought new **furniture** for his apartment, paying in monthly **installment**s instead of all at once. His doctor told him to **exercise** gently and eat well, though he's naturally **shy** about going to public gyms. He booked simple **accommodation** for a short recovery trip by the sea, and before leaving, he remembered to take out the **garbage** and asked a friend to **eat** dinner with him one last time.`,

  // Day 32
  `My friend has become much more **considerate** lately, reminding me to wear **sunscreen** before we go out. On the way, she mentioned a strange **rumor** at school that suddenly started **trending** online. Her social media **account** was hacked, so she had to reset her **login** information and wait a while. While shopping, she almost bought a **knockoff** watch, but I convinced her to look more carefully first. A police officer nearby noted the **license plate** of an illegally parked scooter, and the owner kept saying he would **support** every traffic rule, yet always forgets to pay his **tax**.`,

  // Day 33
  `The doctor's final **diagnosis** was that stress had caused a **mood swing**, which explains why she's been **absent** from class so often. A kind **nurse** told her to rest more and not worry too much about the **interest** on her loan, which only made her feel more **guilty**. Luckily, she received **financial aid** from school, so tuition isn't a concern, and she managed to **pass** all her exams this term. She's also helping with a project about **cyberbullying**, and she moved her old files into rented **storage** space to make room at home.`,

  // Day 34
  `The sky was **overcast** today, but my roommate still seemed **hopeful**, since her **loan** application had finally been approved. She used to feel **ashamed** about forgetting a payment, but her professor's kind words helped **encourage** her to relax. This semester she's taking too many **credit** hours and often feels **overwhelmed**, so last night she took a **painkiller** for her headache before finally falling asleep. Loud **thunder** outside kept waking her up anyway, and she even glanced at a **price tag** on a jacket online, wondering if shopping might help her feel better.`,

  // Day 35
  `An **ambulance** rushed down our street late last night and woke the whole building. This morning, my landlord came to renew my **lease**, and I tried to **negotiate** a lower rent because of several **maintenance** issues lately. He said that would affect his **income**, but we finally agreed on a **cost** that felt fair to both of us. While tidying my room, I happened to **click** on an ad for a comfortable **mattress** and almost bought it on the spot. That evening, while scrolling my **feed**, I also updated my profile **bio**.`,

  // Day 36
  `Our school held a talk about **sustainable** living, and afterward we visited a **museum** with a related exhibit. On the way back, I tried to withdraw cash from an **ATM**, but my card got stuck, which felt pretty **awkward**. My classmate teased me for becoming so **frugal** lately, saying I even hesitate to pay for a phone **repair**, preferring to save for that **best seller** book instead. That night, I found my inbox full of **spam**, so I deleted each one and updated my **avatar** before starting the **essay** due tomorrow.`,

  // Day 37
  `Before moving in, I paid a **security deposit**, and the landlord mentioned the building uses **eco-friendly** materials. On moving day we got stuck in **rush hour** traffic, and the delivery truck had to **pull over** for a while. Someone tried to **jaywalk** across the street and nearly got hit. That night, to celebrate, we ordered a **main course** nearby, glad the special dish was still **in stock**. I had forgotten my **umbrella** and got soaked in the rain, but we managed to **compromise** on furniture costs so we could still **afford** this month's rent.`,

  // Day 38
  `Before the trip, I stopped by a **clinic** to get a travel **vaccine** and picked up a few **snack**s for the road. The **hostel** I booked had great reviews and even came with a free **guidebook**. On departure day, sudden **hail** fell outside, and cars nearby kept starting to **honk** in the traffic. The hostel's **rooftop** view was amazing, and we sipped drinks with paper **straw**s to be eco-friendly. That night, I checked my **financial** situation for the trip and felt relieved everything stayed within budget.`,

  // Day 39
  `Our department held an **online** orientation to introduce clubs around **campus**. A senior said the hiking club's trips feel like a real **adventure**, and members even learn to use a **compass** to find their way. I felt a little **disappointed** that I couldn't join because of my part-time job, so I grabbed lunch **to go** and ate from a paper **plate** at my desk instead. I've been trying not to **spend** too much this month, so I felt **relieved** when a friend agreed to **sublet** me her extra room for less rent.`,

  // Day 40
  `My sister, who is studying **abroad**, caught a cold with a bad **sore throat** and some **nausea**. She went to a local **pharmacy**, but realized she didn't have enough local **currency**, though the pharmacist was **mild**-mannered and agreed to **cooperate** by letting her pay the rest later. She felt a bit **upset** about being sick so far from home, and got even more **annoyed** when her phone kept forcing an automatic **logout**. Thankfully, a video call with our family cheered her up.`,

  // Day 41
  `Applying for a **visa** took so long that my friend felt completely **miserable** by the end of it. The day before her flight, she tried to **withdraw** cash, but the machine was **broken**, which only added to her stress. Local news warned about **severe weather** and thick **smog**, and the airport nearly closed. Her dorm also has a strict **curfew**, which reminded her of high school. She decided to **mute** every notification on her phone to get some rest, and the next day, walking out of the **parking lot**, she finally felt the **exotic** atmosphere of the place.`,

  // Day 42
  `My coworker suffered a small **fracture** last month and still isn't fully back to normal. He ordered a new **raincoat** online, since the **monsoon** season keeps bringing sudden rain. As a longtime **commuter**, he has to make a **U-turn** at one particular intersection every day just to reach the office. The online **seller** included a **coupon** with the raincoat, though he made sure to check the store's **return policy** before he clicked buy. He showed me the photo his friend chose to **tag** him in, complaining that the **air quality** outside has been terrible lately.`,

  // Day 43
  `My friend worked hard to **save** money before her working holiday abroad, but she still experienced real **culture shock** after landing. The **currency exchange** line at the airport was long, and she ended up with a pocket full of loose **coin**s. She met her new **landlord** in the **living room** to sign the contract, and he even cooked a meal for her, though the **sauce** tasted unusual and the bread seemed slightly **stale**. She quickly decided to **sign up** for a local language class, hoping it would reduce any **conflict** with her new roommates.`,

  // Day 44
  `While waiting at the **bus stop**, I ran into an old classmate, and we agreed to **catch up** properly soon. She told me a small **misunderstanding** once caused a fight with a friend, though they made peace long ago. She's currently doing **physical therapy** for her knee, but still talks about a memorable **hiking** trip through **foggy** mountains. She just received her monthly **paycheck** and is saving up for a family **cruise**. Before leaving, she pulled her old **report card** out of her **backpack** and laughed about how much things have changed since graduation.`,

  // Day 45
  `We first met through a **mutual friend** right after she finished her **midterm** exams. We agreed to meet near a **roundabout** downtown, and on the way she reminded me to watch the **traffic sign**s carefully. She's incredibly **thoughtful**, offering to help me **check in** at my hotel without being asked. During our chat, she admitted she's been **homesick** and often finds herself starting to **scroll** through old family photos. She was once **devastated** when a friend forgot her birthday, but she still values good **manners** enough to forgive people easily.`,

  // Day 46
  `I had an **appointment** with a real estate agent, who sent over the **floor plan** in advance, including a small **balcony**. Driving there, I passed through a **toll** booth and waited at a busy **intersection** for the **traffic light** to change. The agent said the current **tenant** would only **check out** next week, so I couldn't see the whole unit yet. As I left, it began to **snow**, which was rare for the season. On the way home, a bakery's **mouth-watering** smell convinced me to stop for a treat.`,

  // Day 47
  `My cousin just earned his **driver's license**, but he still feels **insecure** behind the wheel. He's been saving money in his **savings account**, planning to move out of the **dormitory** soon, and asked me to review his rental **contract** first. Today he drove me to a **gas station**, and afterward we stopped nearby to order a **combo meal** for lunch. Meanwhile, the school called an **electrician** to fix equipment before the next **field trip**. He also reminded me that new medicine sometimes comes with an unexpected **side effect**, so I should read the label carefully.`,

  // Day 48
  `Our group trip **camping** last year is still the time we really began to **bond** as friends. A sudden **heatwave** hit that weekend, and a few of us got mild **food poisoning**, so we rushed to the **emergency room**. The doctor there was very **sympathetic** and calmed everyone down quickly. After moving into my new **apartment**, I ordered new camping gear online and was glad it came with **free shipping**. Before that trip, we even played an **icebreaker** game to help new members mix in, and made sure to prepare a **vegetarian** option for dinner.`,

  // Day 49
  `A **cheerful** junior from my **club** suggested we all go to the **beach** together, reminding everyone to wear a **seatbelt** in the car. Halfway there, thick **fog** rolled in along with flashes of **lightning**, which startled all of us. Once we arrived, she got a call about a package **delivery** waiting at her door. That night she made a **video call** to her family, mentioning she opened a new **bank account** to manage her savings separately while paying off some old **debt**.`,

  // Day 50
  `During our school trip, we took photos at a famous **landmark**, still wearing our school **uniform**s. At lunch we ate more high-**calorie** dessert than planned, so the waiter packed the rest in a **doggy bag**. On the way back, I suddenly felt a **stomachache** and had to get an **X-ray** at the hospital, though it turned out to be nothing serious. The nurse told me to stay **calm** and drink warm water. Afterward, I took a **screenshot** of the report to send to my mom, forgot my phone **password** for a second, and then decided to **add to cart** a heating pad online.`,

  // Day 51
  `The **tracking number** for my package showed the new **tent** I ordered for camping was about to arrive. My friend teased me about the extra **expense**, asking why I suddenly stopped being so **stingy**. While cleaning my **closet**, I found an old paper **map** from a trip years ago. She's been learning how to **invest** lately, studying the **exchange rate** carefully, and joked that if her first investment happened to **fail**, at least she'd learn something. At checkout, the cashier's scanner couldn't read the **barcode**, so we waited a while longer.`,

  // Day 52
  `On my way to work, my **scooter** suddenly got a **flat tire**, making me late. My manager decided to **criticize** me in front of everyone, which stung a little. A coworker comforted me during **recess**, saying something similar happened to him before. At lunch, I used the **self-checkout** machine at the convenience store and realized I'm completely **broke** this month. Walking home past the old **monument**, I remembered the **earthquake** years ago when everyone gathered there for safety. That evening, my manager and I managed to **make up**, and he seemed genuinely **satisfied** with my explanation.`,

  // Day 53
  `While browsing **online shopping** sites, my friend received a strange **anonymous** comment about her photos, and she felt **confused** about how to respond. She clicked the **link** the person sent, and it turned out to be nothing serious, which left her oddly **thrilled** that the mystery was solved so easily. Outside, a light **drizzle** was falling, so she stopped by the pharmacy to pick up a **prescription** and a fresh **bandage** for her hand. On the way home, road work forced us to take a **detour**, and that evening she cooked pasta, adding a sprig of basil as a **garnish**.`,

  // Day 54
  `Right after my **final exam**, I finally had time for an **extracurricular activity**: a cooking **tour** led by a well-known **chef**. On the drive there, our bus driver stayed carefully under the **speed limit**. After the demonstration, I made a sudden **impulse buy** of a whole cookware set, and I could feel my **pulse** racing with excitement. The news that day mentioned a **wildfire** somewhere nearby, which made everyone a little quiet. That night, I cooked a simple **bowl** of noodle soup for dinner and picked up a **package** that had arrived earlier.`,

  // Day 55
  `A department store announced a **flash sale**, so we drove down the **highway** to catch it in time. My friend happened to **sprain** her ankle playing basketball earlier that day, and she kept trying to **vent** about it the whole ride. When we arrived, her **promo code** wouldn't work, which made her **furious**, so I tried to **comfort** her as best I could. We ended up sitting in the **food court** to rest, and she mentioned wanting to reduce her **carbon footprint** by taking public transportation more often. I felt genuinely **proud** of her for caring about the environment.`,

  // Day 56
  `Our bathroom started to **leak** again, so we called a **plumber** to come take a look. While waiting, I used my laptop's **browser** to book a **buffet** dinner at a nearby **resort**, celebrating the end of my **elective** class this term. When ordering, I accidentally selected the **fast food** meal's largest **portion** size and had to fix it with customer service. At the restaurant, the **cashier** was very friendly and even gave us extra **napkin**s without asking.`,

  // Day 57
  `Our **group project** finally came together for the class **presentation**, thanks to real **teamwork** among everyone. The **principal** watching in the back row gave us a kind **compliment** afterward. Earlier in the semester, our professor's **syllabus** had warned that the seasonal flu can be highly **contagious**, so most of us wore masks. Afterward, we celebrated with dinner, and a classmate teased me for using **chopsticks** the wrong way. Walking home, we reminded each other to respect every **pedestrian** at the crossing, and I casually decided to **unfollow** an account I never interact with anymore.`,

  // Day 58
  `My cousin is studying cybersecurity as her college **major**, so she often warns our family about **phishing** messages. She booked a highly rated **hotel** using money saved from her monthly **allowance**, planning to **explore** an unfamiliar city and ask a **local** for hidden gems. Before leaving, she set her phone to **offline** mode to get proper rest. Right before she left, the **doorbell** rang — it was a courier delivering a birthday **gift card** from our grandmother, and she checked the shop's **rating** before deciding to use it.`,

  // Day 59
  `My classmate has been **tardy** more often lately, ever since he switched to riding along the new **bike lane** to school. He signed up for a **membership** on a gym **website**, and his trainer told him to avoid **disposable** water bottles and skip greasy **side dish**es after workouts. During his first spin class, he felt a little **dizzy**, yet he was genuinely **amazed** at how much stamina he'd built already. He added new running shoes to his online **wishlist**, reminding himself to **respect** his body's limits instead of pushing too hard.`,

  // Day 60
  `The office **elevator** broke down again, so everyone had to climb the stairs and felt **exhausted** by the time they reached their desks. At lunch in the **cafeteria**, a coworker complained that the soup tasted too **bland**. In the afternoon, a **courier** delivered the package I had ordered through my online **shopping cart**, and I placed it straight into my office **locker**. Another coworker joked that he wished he were as **wealthy** as a certain client, but I said I felt quite **content** with my simple life. Later I heard she had a mild **infection** and reminded her to see a doctor.`,

  // Day 61
  `My roommate finally decided to **move out**, and we discussed splitting the furniture in our **group chat**. She's always been pretty **blunt**, so she said right away that the sofa she wanted was **out of stock**, meaning she'd have to wait before she could **move in** to her new place. She reminded me to renew my **health insurance** and suggested we **carpool** to work once she settles nearby. While shopping online, we noticed the **shipping** fee was higher than expected, and she joked she hoped the furniture was at least **recyclable**, unlike someone who might **cheat** on an exam just to save time.`,

  // Day 62
  `Our **student council** held a meeting about the school festival, but the president missed it because of a bad **toothache**. Beforehand, we grabbed snacks that turned out too **greasy**, missing the right **seasoning**. After the meeting, it rained hard, and a **rainbow** appeared, so everyone stopped to take photos. I've had slightly high **blood pressure** lately, so I'm cutting back on sugary drinks. On the way home, my car broke down, and I had to call a **mechanic**, who mentioned a nearby village once issued a **tsunami** warning. The next morning, **frost** covered the windows, and I still rushed out to grab a **limited edition** pair of sneakers.`,

  // Day 63
  `My new **studio** apartment is near a cafe with reliable **wifi**, perfect for studying after my daily **commute**. The staff there are always **polite**, unlike a customer at the next table who was surprisingly **rude**. I did poorly on this week's **quiz** and felt genuinely **frustrated**, especially after accidentally taking the wrong **dose** of cold medicine, which left me feeling worse. My club needed someone to show **leadership** for an upcoming event, and I felt **terrified** at first, but a friend helped me plan what to say.`,
];

window.STORIES_EN = STORIES_EN;
