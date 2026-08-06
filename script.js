// ================= i18n =================
const i18n = {
  ru: {
    nav_services:"Услуги", nav_expats:"Экспатам", nav_auto:"Авто", nav_cases:"Кейсы", nav_process:"Процесс", nav_why:"Почему я", nav_cta:"Написать →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:'Автоматизирую бизнес.<br><span class="accent">Строю AI</span>, который работает вместо отдела.',
    hero_sub:"Telegram-боты · AI-агенты · Автоматизация Make/n8n · Сайты · Экспатам в Грузии · Авто под ключ",
    btn_discuss:"Обсудить проект", btn_cases:"Смотреть кейсы",
    stat1:"Реализованных проектов", stat2:"Направлений услуг", stat3:"Языка интерфейса сайта", stat4:"Поддержка и мониторинг",
    term: [
      "alex@tbilisi:~$ whoami",
      "> Alex — AI Engineer & Automation Specialist. База: Тбилиси, Грузия.",
      "alex@tbilisi:~$ ls ./projects",
      "> JobHunterAI · SellAI · MAGIC · AI-Office · Content-Farm · Auto-Parts-Marketplace",
      "alex@tbilisi:~$ cat ./stack.txt",
      "> Make · n8n · Telegram Bot API · LLM-агенты · web-разработка",
      "alex@tbilisi:~$ cat ./services.txt",
      "> Автоматизация и AI · Экспатам в Грузии · Трансферы · Авто под ключ · Продвижение",
      "alex@tbilisi:~$ status",
      "> Открыт для новых проектов. Пишите в Telegram →"
    ],
    services_tag:"SERVICES", services_title:"Чем занимаюсь",
    s1_title:"AI и автоматизация", s1_desc:"Telegram-боты и AI-агенты на LLM, сценарии в Make и n8n, внедрение AI-инструментов в бизнес-процессы.",
    s2_title:"Легализация и бизнес в Грузии", s2_desc:"Переезд, регистрация ИП/компании, банковский счёт, ПТД/ВНЖ — полное сопровождение.",
    s3_title:"Трансферы", s3_desc:"Индивидуальные и групповые поездки — аэропорт, город, межгород, за рубеж.",
    s4_title:"Авто под ключ", s4_desc:"Подбор на местном рынке, в ЕС или на аукционах США — доставка, растаможка, диагностика.",
    s5_title:"SMM и продвижение", s5_desc:"Анализ соцсетей, стратегия продвижения, план контента под ваш бизнес или личный бренд.",
    s6_title:"Резюме и карьера", s6_desc:"Составление резюме, подготовка к собеседованию, упаковка профиля под целевые вакансии.",

    expats_tag:"FOR EXPATS", expats_title:"Экспатам в Грузии",
    expats_note:"Полное сопровождение переезда — от первого дня до открытия бизнеса и покупки жилья.",
    e1_title:"Переезд и консультации", e1_desc:"Первичная консультация, план переезда, ответы на вопросы по легализации и жизни в Грузии.",
    e2_title:"Открытие бизнеса", e2_desc:"Регистрация ИП или компании, оформление ПТД (обязательно с 2026 года) и ВНЖ.",
    e3_title:"Банковский счёт", e3_desc:"Открытие личного и бизнес-счёта в грузинском банке, помощь со всеми документами.",
    e4_title:"Подбор недвижимости", e4_desc:"Аренда или покупка — от поиска вариантов до сопровождения сделки.",
    e5_title:"Трансферы — индивидуальные и групповые", e5_desc:"Встреча в аэропорту, поездки по городу, межгород и за рубеж — свой водитель или групповой трансфер.",

    auto_tag:"AUTO", auto_title:"Авто под ключ",
    auto_note:"От выбора машины до документов на руках — работаю с локальным рынком и зарубежными источниками.",
    a1_title:"Местный рынок", a1_desc:"Подбор и проверка авто на рынке Грузии под ваш бюджет и задачи.",
    a2_title:"Аукционы и рынок ЕС", a2_desc:"Поиск на европейских площадках, расчёт доставки и растаможки в Грузию.",
    a3_title:"Аукционы США", a3_desc:"Подбор на американских автоаукционах — расчёт полной стоимости с доставкой и пошлинами.",
    a4_title:"Диагностика и сервис", a4_desc:"Техническая проверка перед покупкой и поиск надёжного сервиса после.",

    cases_tag:"PORTFOLIO", cases_title:"Кейсы и проекты",
    c1_desc:"Telegram-бот с AI: анализирует резюме, подбирает вакансии под профиль и автоматизирует первый контакт с работодателем.",
    c1_result:"→ От поиска до отклика — без ручного перебора вакансий",
    c2_desc:"AI-агент для продаж на маркетплейсах (FB/Instagram): подбор товара, генерация карточек, анализ цен и конкурентов.",
    c2_result:"→ Листинг и ценообразование — на автопилоте",
    c3_desc:"TikTok-бренд аватара для экспатов и релокантов в Грузии, двуязычный контент (RU/EN) плюс консалтинг по переезду.",
    c3_result:"→ Личный бренд, который сам приводит клиентов",
    c4_desc:"Мульти-агентная система: менеджер + агенты-отделы с визуальным орг-чартом — AI-офис для бизнеса.",
    c4_result:"→ Отдел, который работает без найма людей",
    c5_title:"Content-Farm", c5_desc:"Автоматизированная генерация контента для FB/TikTok/Instagram/YouTube с проверкой человеком перед публикацией.",
    c5_result:"→ Контент выходит по расписанию, а не от случая к случаю",
    c6_title:"Auto-Parts Marketplace", c6_desc:"B2B-приложение маркетплейса автозапчастей для грузинского рынка.",
    c6_result:"→ Поставщики и покупатели запчастей — в одном месте",

    process_tag:"WORKFLOW", process_title:"Как проходит работа",
    p1_title:"1. Заявка", p1_desc:"Пишете в Telegram — коротко о задаче: бот, сайт, переезд или машина. Отвечаю в течение дня.",
    p2_title:"2. Разбор задачи", p2_desc:"Уточняю детали под ваше направление — архитектуру бота, юридические нюансы или параметры авто — и называю сроки со стоимостью.",
    p3_title:"3. Работа без посредников", p3_desc:"Делаю сам: пишу код, готовлю документы или ищу нужный автомобиль — без передачи задачи на сторону.",
    p4_title:"4. Сдача результата", p4_desc:"Бот в проде, документы на руках, авто растаможено — показываю, как всё работает, и передаю доступы.",
    p5_title:"5. Сопровождение", p5_desc:"Остаюсь на связи после сдачи — от правок в коде до вопроса по продлению ВНЖ.",
    why_tag:"ADVANTAGES", why_title:"Почему выбирают меня",
    w1_title:"Один человек, а не агентство", w1_desc:"Общаетесь напрямую со мной на всех этапах — без менеджеров-прокладок и испорченного телефона.",
    w2_title:"Разные задачи — одна точка входа", w2_desc:"Не нужно отдельно искать программиста, юриста по релокации и перегонщика авто — закрываю это сам.",
    w3_title:"Знаю процесс изнутри", w3_desc:"Сам проходил регистрацию бизнеса и открытие счёта в Грузии — не пересказываю статьи, а знаю нюансы на практике.",
    w4_title:"Современный стек", w4_desc:"LLM-агенты, Make, n8n — те же инструменты, что используют крупные automation-студии.",
    w5_title:"Прозрачные сроки и цена", w5_desc:"Называю стоимость и сроки после разбора задачи — без сюрпризов в процессе работы.",
    w6_title:"На связи и после сдачи", w6_desc:"Мониторинг ботов, помощь с документами или машиной не заканчивается в день передачи проекта.",
    contact_tag:"GET IN TOUCH", contact_title:"Есть идея? Давайте превратим её в работающий продукт.",
    contact_desc:"Напишите пару слов о задаче — отвечу и предложу эффективный маршрут решения.",
    btn_telegram:"Написать в Telegram",
    footer_text:"© 2026 ALEX · TBILISI, GE · alexberik@gmail.com · +995 511 493 394",
    ai_text:"ALEX AI: Онлайн. Задать вопрос →"
  },
  en: {
    nav_services:"Services", nav_expats:"For Expats", nav_auto:"Cars", nav_cases:"Cases", nav_process:"Process", nav_why:"Why me", nav_cta:"Message →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:'Automating business.<br><span class="accent">Building AI</span> that works instead of a department.',
    hero_sub:"Telegram bots · AI agents · Make/n8n automation · Websites · Expats in Georgia · Car sourcing",
    btn_discuss:"Discuss a project", btn_cases:"View cases",
    stat1:"Completed projects", stat2:"Service directions", stat3:"Site interface languages", stat4:"Support & monitoring",
    term: [
      "alex@tbilisi:~$ whoami",
      "> Alex — AI Engineer & Automation Specialist. Based in Tbilisi, Georgia.",
      "alex@tbilisi:~$ ls ./projects",
      "> JobHunterAI · SellAI · MAGIC · AI-Office · Content-Farm · Auto-Parts-Marketplace",
      "alex@tbilisi:~$ cat ./stack.txt",
      "> Make · n8n · Telegram Bot API · LLM agents · web development",
      "alex@tbilisi:~$ cat ./services.txt",
      "> Automation & AI · Expats in Georgia · Transfers · Car sourcing · Promotion",
      "alex@tbilisi:~$ status",
      "> Open for new projects. Message on Telegram →"
    ],
    services_tag:"SERVICES", services_title:"What I do",
    s1_title:"AI & automation", s1_desc:"Telegram bots and AI agents on LLMs, Make and n8n scenarios, deploying AI tools into business processes.",
    s2_title:"Legal setup & business in Georgia", s2_desc:"Relocation, company/IE registration, bank account, work permit / residency — full support.",
    s3_title:"Transfers", s3_desc:"Individual and group rides — airport, city, intercity, cross-border.",
    s4_title:"Car sourcing, start to finish", s4_desc:"Sourcing from the local market, the EU, or US auctions — shipping, customs, diagnostics.",
    s5_title:"SMM & promotion", s5_desc:"Social media analysis, promotion strategy, content plan for your business or personal brand.",
    s6_title:"Resume & career", s6_desc:"Resume writing, interview prep, packaging your profile for target roles.",

    expats_tag:"FOR EXPATS", expats_title:"For expats in Georgia",
    expats_note:"Full relocation support — from day one to opening a business and buying a home.",
    e1_title:"Relocation & consulting", e1_desc:"Initial consultation, relocation plan, answers on legal status and life in Georgia.",
    e2_title:"Starting a business", e2_desc:"IE or company registration, work permit (mandatory since 2026) and residency.",
    e3_title:"Bank account", e3_desc:"Opening a personal or business account at a Georgian bank, help with all the paperwork.",
    e4_title:"Real estate search", e4_desc:"Renting or buying — from finding options to closing the deal.",
    e5_title:"Transfers — individual & group", e5_desc:"Airport pickup, city rides, intercity and cross-border trips — personal driver or group transfer.",

    auto_tag:"AUTO", auto_title:"Car sourcing, start to finish",
    auto_note:"From picking the car to paperwork in hand — I work with the local market and overseas sources.",
    a1_title:"Local market", a1_desc:"Sourcing and inspecting cars on the Georgian market for your budget and needs.",
    a2_title:"EU market & auctions", a2_desc:"Searching European platforms, calculating shipping and customs to Georgia.",
    a3_title:"US auctions", a3_desc:"Sourcing from US car auctions — full cost estimate with shipping and duties.",
    a4_title:"Diagnostics & service", a4_desc:"Pre-purchase technical inspection and finding a trustworthy service after.",

    cases_tag:"PORTFOLIO", cases_title:"Cases & projects",
    c1_desc:"An AI Telegram bot: analyzes resumes, matches jobs to the profile, and automates the first contact with employers.",
    c1_result:"→ From search to application — no manual scrolling through listings",
    c2_desc:"An AI agent for marketplace sales (FB/Instagram): product selection, listing generation, price and competitor analysis.",
    c2_result:"→ Listings and pricing on autopilot",
    c3_desc:"A TikTok avatar brand for expats and relocators in Georgia, bilingual content (RU/EN) plus relocation consulting.",
    c3_result:"→ A personal brand that brings in clients on its own",
    c4_desc:"A multi-agent system: manager + department agents with a visual org chart — an AI office for a business.",
    c4_result:"→ A department that runs without hiring people",
    c5_title:"Content-Farm", c5_desc:"Automated content generation for FB/TikTok/Instagram/YouTube with human review before publishing.",
    c5_result:"→ Content ships on schedule, not by chance",
    c6_title:"Auto-Parts Marketplace", c6_desc:"A B2B auto parts marketplace app for the Georgian market.",
    c6_result:"→ Suppliers and buyers of parts, in one place",

    process_tag:"WORKFLOW", process_title:"How the work happens",
    p1_title:"1. Request", p1_desc:"Message me on Telegram — a short note on the task: a bot, a site, relocation, or a car. I reply within a day.",
    p2_title:"2. Breaking it down", p2_desc:"I clarify the details for your specific case — bot architecture, legal nuances, or car specs — and give you a timeline and price.",
    p3_title:"3. No middlemen", p3_desc:"I do it myself: write the code, prepare the paperwork, or source the car — nothing gets handed off to a subcontractor.",
    p4_title:"4. Handover", p4_desc:"Bot's in production, paperwork's in hand, the car's cleared customs — I walk you through it and hand over access.",
    p5_title:"5. Ongoing support", p5_desc:"I stay reachable after handover — from a code fix to a question about renewing residency.",
    why_tag:"ADVANTAGES", why_title:"Why work with me",
    w1_title:"One person, not an agency", w1_desc:"You talk to me directly at every stage — no account managers, no telephone game.",
    w2_title:"Different needs, one contact", w2_desc:"No need to separately find a developer, a relocation lawyer, and a car broker — I cover this myself.",
    w3_title:"I know the process firsthand", w3_desc:"I've personally gone through business registration and opening a bank account in Georgia — not repeating articles, I know the actual nuances.",
    w4_title:"Modern stack", w4_desc:"LLM agents, Make, n8n — the same tools used by large automation studios.",
    w5_title:"Transparent price and timeline", w5_desc:"I quote cost and timeline after breaking down the task — no surprises mid-project.",
    w6_title:"Reachable after handover", w6_desc:"Monitoring bots, helping with paperwork or a car doesn't stop the day the project is delivered.",
    contact_tag:"GET IN TOUCH", contact_title:"Have an idea? Let's turn it into a working product.",
    contact_desc:"Send a few words about the task — I'll reply with an effective route to solve it.",
    btn_telegram:"Message on Telegram",
    footer_text:"© 2026 ALEX · TBILISI, GE · alexberik@gmail.com · +995 511 493 394",
    ai_text:"ALEX AI: Online. Ask a question →"
  },
  ka: {
    nav_services:"სერვისები", nav_expats:"ექსპატებს", nav_auto:"ავტო", nav_cases:"ქეისები", nav_process:"პროცესი", nav_why:"რატომ მე", nav_cta:"დაწერეთ →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:'ვაავტომატიზირებ ბიზნესს.<br><span class="accent">ვქმნი AI-ს</span>, რომელიც განყოფილების ნაცვლად მუშაობს.',
    hero_sub:"Telegram ბოტები · AI აგენტები · Make/n8n · საიტები · ექსპატებს საქართველოში · ავტო",
    btn_discuss:"განვიხილოთ პროექტი", btn_cases:"ქეისების ნახვა",
    stat1:"დასრულებული პროექტი", stat2:"სერვისის მიმართულება", stat3:"საიტის ენა", stat4:"მხარდაჭერა",
    term: [
      "alex@tbilisi:~$ whoami",
      "> Alex — AI ინჟინერი და ავტომატიზაციის სპეციალისტი. თბილისი, საქართველო.",
      "alex@tbilisi:~$ ls ./projects",
      "> JobHunterAI · SellAI · MAGIC · AI-Office · Content-Farm · Auto-Parts-Marketplace",
      "alex@tbilisi:~$ cat ./services.txt",
      "> ავტომატიზაცია და AI · ექსპატებს საქართველოში · ტრანსფერები · ავტო · პრომოუშენი",
      "alex@tbilisi:~$ status",
      "> ღიაა ახალი პროექტებისთვის. დაწერეთ Telegram-ში →"
    ],
    services_tag:"SERVICES", services_title:"რას ვაკეთებ",
    s1_title:"AI და ავტომატიზაცია", s1_desc:"Telegram ბოტები და AI აგენტები, Make და n8n სცენარები, AI ხელსაწყოების დანერგვა.",
    s2_title:"ლეგალიზაცია და ბიზნესი", s2_desc:"გადმოსახლება, ბიზნესის რეგისტრაცია, საბანკო ანგარიში, ნებართვა/ბინადრობა.",
    s3_title:"ტრანსფერები", s3_desc:"ინდივიდუალური და ჯგუფური მგზავრობა — აეროპორტი, ქალაქი, საზღვარგარეთ.",
    s4_title:"ავტო — სრული სერვისი", s4_desc:"შერჩევა ადგილობრივ ბაზარზე, ევროპაში ან აშშ-ის აუქციონებზე.",
    s5_title:"SMM და პრომოუშენი", s5_desc:"სოციალური ქსელების ანალიზი, სტრატეგია, კონტენტ-გეგმა.",
    s6_title:"რეზიუმე და კარიერა", s6_desc:"რეზიუმეს შედგენა, გასაუბრებისთვის მომზადება.",

    expats_tag:"FOR EXPATS", expats_title:"ექსპატებს საქართველოში",
    expats_note:"სრული მხარდაჭერა გადმოსახლებისას — პირველი დღიდან ბიზნესის გახსნამდე.",
    e1_title:"გადმოსახლება და კონსულტაცია", e1_desc:"პირველადი კონსულტაცია, გეგმა, კითხვები ლეგალიზაციაზე.",
    e2_title:"ბიზნესის გახსნა", e2_desc:"რეგისტრაცია, ნებართვა (სავალდებულო 2026-დან) და ბინადრობა.",
    e3_title:"საბანკო ანგარიში", e3_desc:"პირადი ან ბიზნეს ანგარიშის გახსნა ქართულ ბანკში.",
    e4_title:"უძრავი ქონების შერჩევა", e4_desc:"ქირავნობა ან ყიდვა — ძიებიდან გარიგებამდე.",
    e5_title:"ტრანსფერები — ინდივიდუალური და ჯგუფური", e5_desc:"აეროპორტი, ქალაქი, საზღვარგარეთ — პირადი მძღოლი ან ჯგუფური ტრანსფერი.",

    auto_tag:"AUTO", auto_title:"ავტო — სრული სერვისი",
    auto_note:"მანქანის შერჩევიდან დოკუმენტებამდე — ადგილობრივი ბაზარი და უცხოური წყაროები.",
    a1_title:"ადგილობრივი ბაზარი", a1_desc:"შერჩევა და შემოწმება საქართველოს ბაზარზე.",
    a2_title:"ევროპის ბაზარი და აუქციონები", a2_desc:"ძიება ევროპულ პლატფორმებზე, მიწოდება და განბაჟება.",
    a3_title:"აშშ-ის აუქციონები", a3_desc:"შერჩევა ამერიკულ აუქციონებზე — სრული ღირებულების გათვლა.",
    a4_title:"დიაგნოსტიკა და სერვისი", a4_desc:"ტექნიკური შემოწმება ყიდვამდე და საიმედო სერვისის ძებნა.",

    cases_tag:"PORTFOLIO", cases_title:"ქეისები და პროექტები",
    c1_desc:"AI Telegram ბოტი: აანალიზებს რეზიუმეს, არჩევს ვაკანსიებს, ავტომატიზირებს კონტაქტს დამსაქმებელთან.",
    c1_result:"→ ძიებიდან გამოხმაურებამდე ხელით გარჩევის გარეშე",
    c2_desc:"AI აგენტი მარკეტფლეისებზე გაყიდვისთვის — პროდუქტი, კარტები, ფასების ანალიზი.",
    c2_result:"→ ლისტინგი და ფასები ავტოპილოტზე",
    c3_desc:"TikTok ავატარ-ბრენდი ექსპატებისთვის საქართველოში, ორენოვანი კონტენტი და კონსალტინგი.",
    c3_result:"→ პირადი ბრენდი, რომელიც თავად მოაქვს კლიენტებს",
    c4_desc:"მულტი-აგენტური სისტემა — მენეჯერი და განყოფილება-აგენტები ვიზუალური სქემით.",
    c4_result:"→ განყოფილება ადამიანების დაქირავების გარეშე",
    c5_title:"Content-Farm", c5_desc:"კონტენტის ავტომატური გენერაცია FB/TikTok/Instagram/YouTube-სთვის.",
    c5_result:"→ კონტენტი გამოდის გრაფიკით",
    c6_title:"Auto-Parts Marketplace", c6_desc:"B2B მარკეტფლეისი ავტონაწილებისთვის საქართველოს ბაზრისთვის.",
    c6_result:"→ მომწოდებლები და მყიდველები ერთად",

    process_tag:"WORKFLOW", process_title:"როგორ მიმდინარეობს სამუშაო",
    p1_title:"1. განაცხადი", p1_desc:"დამიწერეთ Telegram-ში ამოცანის შესახებ — ბოტი, საიტი, გადმოსახლება თუ მანქანა. ვპასუხობ დღის განმავლობაში.",
    p2_title:"2. ამოცანის დაზუსტება", p2_desc:"ვაზუსტებ დეტალებს თქვენი მიმართულებით და ვასახელებ ვადებსა და ღირებულებას.",
    p3_title:"3. შუამავლების გარეშე", p3_desc:"ყველაფერს ვაკეთებ თვითონ — კოდი, დოკუმენტები ან მანქანის ძებნა.",
    p4_title:"4. ჩაბარება", p4_desc:"ბოტი მუშაობს, დოკუმენტები მზადაა, მანქანა განბაჟებულია — გადმოგცემთ წვდომებს.",
    p5_title:"5. მხარდაჭერა", p5_desc:"ხელმისაწვდომი ვრჩები ჩაბარების შემდეგაც.",
    why_tag:"ADVANTAGES", why_title:"რატომ მირჩევენ",
    w1_title:"ერთი ადამიანი, არა სააგენტო", w1_desc:"პირდაპირი კონტაქტი ჩემთან ყველა ეტაპზე.",
    w2_title:"სხვადასხვა ამოცანა — ერთი წერტილი", w2_desc:"არ გჭირდებათ ცალკე პროგრამისტი, იურისტი და ავტოგადამზიდველი.",
    w3_title:"ვიცნობ პროცესს შიგნიდან", w3_desc:"თვითონ გავიარე ბიზნესის რეგისტრაცია და ანგარიშის გახსნა საქართველოში.",
    w4_title:"თანამედროვე სტეკი", w4_desc:"LLM აგენტები, Make, n8n — იგივე ხელსაწყოები, რასაც დიდი სტუდიები იყენებენ.",
    w5_title:"გამჭვირვალე ფასი და ვადები", w5_desc:"ვასახელებ ღირებულებას ამოცანის დაზუსტების შემდეგ.",
    w6_title:"ხელმისაწვდომი ჩაბარების შემდეგაც", w6_desc:"მონიტორინგი და დახმარება არ სრულდება ჩაბარების დღეს.",
    contact_tag:"GET IN TOUCH", contact_title:"გაქვთ იდეა? გადავაქციოთ ის მუშა პროდუქტად.",
    contact_desc:"მოგვწერეთ ამოცანის შესახებ — შემოგთავაზებთ გადაწყვეტის მარშრუტს.",
    btn_telegram:"Telegram-ში დაწერა",
    footer_text:"© 2026 ALEX · TBILISI, GE · alexberik@gmail.com · +995 511 493 394",
    ai_text:"ALEX AI: ონლაინ →"
  },
  ua: {
    nav_services:"Послуги", nav_expats:"Експатам", nav_auto:"Авто", nav_cases:"Кейси", nav_process:"Процес", nav_why:"Чому я", nav_cta:"Написати →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:'Автоматизую бізнес.<br><span class="accent">Створюю AI</span>, який працює замість відділу.',
    hero_sub:"Telegram-боти · AI-агенти · Make/n8n · Сайти · Експатам у Грузії · Авто під ключ",
    btn_discuss:"Обговорити проєкт", btn_cases:"Дивитись кейси",
    stat1:"Реалізованих проєктів", stat2:"Напрямків послуг", stat3:"Мови інтерфейсу сайту", stat4:"Підтримка й моніторинг",
    term: [
      "alex@tbilisi:~$ whoami",
      "> Alex — AI Engineer & Automation Specialist. База: Тбілісі, Грузія.",
      "alex@tbilisi:~$ ls ./projects",
      "> JobHunterAI · SellAI · MAGIC · AI-Office · Content-Farm · Auto-Parts-Marketplace",
      "alex@tbilisi:~$ cat ./services.txt",
      "> Автоматизація та AI · Експатам у Грузії · Трансфери · Авто під ключ · Просування",
      "alex@tbilisi:~$ status",
      "> Відкритий для нових проєктів. Пишіть у Telegram →"
    ],
    services_tag:"SERVICES", services_title:"Чим займаюсь",
    s1_title:"AI та автоматизація", s1_desc:"Telegram-боти та AI-агенти, сценарії в Make і n8n, впровадження AI в бізнес-процеси.",
    s2_title:"Легалізація та бізнес у Грузії", s2_desc:"Переїзд, реєстрація бізнесу, банківський рахунок, дозвіл на роботу/ВНП.",
    s3_title:"Трансфери", s3_desc:"Індивідуальні та групові поїздки — аеропорт, місто, за кордон.",
    s4_title:"Авто під ключ", s4_desc:"Підбір на місцевому ринку, в ЄС або на аукціонах США.",
    s5_title:"SMM та просування", s5_desc:"Аналіз соцмереж, стратегія просування, контент-план.",
    s6_title:"Резюме та кар'єра", s6_desc:"Складання резюме, підготовка до співбесіди.",

    expats_tag:"FOR EXPATS", expats_title:"Експатам у Грузії",
    expats_note:"Повний супровід переїзду — від першого дня до відкриття бізнесу.",
    e1_title:"Переїзд і консультації", e1_desc:"Первинна консультація, план переїзду, відповіді на питання легалізації.",
    e2_title:"Відкриття бізнесу", e2_desc:"Реєстрація бізнесу, дозвіл на роботу (обов'язковий з 2026) і ВНП.",
    e3_title:"Банківський рахунок", e3_desc:"Відкриття особистого чи бізнес-рахунку в грузинському банку.",
    e4_title:"Підбір нерухомості", e4_desc:"Оренда чи купівля — від пошуку до угоди.",
    e5_title:"Трансфери — індивідуальні та групові", e5_desc:"Аеропорт, місто, за кордон — особистий водій або груповий трансфер.",

    auto_tag:"AUTO", auto_title:"Авто під ключ",
    auto_note:"Від вибору машини до документів на руках — місцевий ринок і закордонні джерела.",
    a1_title:"Місцевий ринок", a1_desc:"Підбір і перевірка авто на ринку Грузії.",
    a2_title:"Ринок і аукціони ЄС", a2_desc:"Пошук на європейських майданчиках, розрахунок доставки й розмитнення.",
    a3_title:"Аукціони США", a3_desc:"Підбір на американських аукціонах — повний розрахунок вартості.",
    a4_title:"Діагностика та сервіс", a4_desc:"Технічна перевірка перед купівлею та пошук надійного сервісу.",

    cases_tag:"PORTFOLIO", cases_title:"Кейси та проєкти",
    c1_desc:"AI Telegram-бот: аналізує резюме, підбирає вакансії, автоматизує перший контакт з роботодавцем.",
    c1_result:"→ Від пошуку до відгуку без ручного перебору",
    c2_desc:"AI-агент для продажів на маркетплейсах — товар, картки, аналіз цін.",
    c2_result:"→ Лістинг і ціноутворення на автопілоті",
    c3_desc:"TikTok-бренд аватара для експатів у Грузії, двомовний контент і консалтинг з переїзду.",
    c3_result:"→ Особистий бренд, що сам приводить клієнтів",
    c4_desc:"Мульти-агентна система — менеджер і агенти-відділи з візуальною схемою.",
    c4_result:"→ Відділ без найму людей",
    c5_title:"Content-Farm", c5_desc:"Автоматизована генерація контенту для FB/TikTok/Instagram/YouTube.",
    c5_result:"→ Контент виходить за розкладом",
    c6_title:"Auto-Parts Marketplace", c6_desc:"B2B маркетплейс автозапчастин для грузинського ринку.",
    c6_result:"→ Постачальники й покупці в одному місці",

    process_tag:"WORKFLOW", process_title:"Як відбувається робота",
    p1_title:"1. Заявка", p1_desc:"Пишете в Telegram коротко про задачу — бот, сайт, переїзд чи авто. Відповідаю протягом дня.",
    p2_title:"2. Розбір задачі", p2_desc:"Уточнюю деталі під ваш напрямок і називаю строки з вартістю.",
    p3_title:"3. Без посередників", p3_desc:"Роблю сам: код, документи або пошук авто — без передачі на аутсорс.",
    p4_title:"4. Передача результату", p4_desc:"Бот у проді, документи на руках, авто розмитнене — передаю доступи.",
    p5_title:"5. Супровід", p5_desc:"Залишаюсь на зв'язку і після здачі проєкту.",
    why_tag:"ADVANTAGES", why_title:"Чому обирають мене",
    w1_title:"Одна людина, не агенція", w1_desc:"Спілкуєтесь напряму зі мною на всіх етапах.",
    w2_title:"Різні задачі — одна точка входу", w2_desc:"Не треба окремо шукати розробника, юриста й перегонщика авто.",
    w3_title:"Знаю процес зсередини", w3_desc:"Сам реєстрував бізнес і відкривав рахунок у Грузії.",
    w4_title:"Сучасний стек", w4_desc:"LLM-агенти, Make, n8n — інструменти великих automation-студій.",
    w5_title:"Прозорі строки і ціна", w5_desc:"Називаю вартість після розбору задачі, без сюрпризів.",
    w6_title:"На зв'язку і після здачі", w6_desc:"Моніторинг і допомога не закінчуються в день передачі проєкту.",
    contact_tag:"GET IN TOUCH", contact_title:"Є ідея? Перетворімо її на робочий продукт.",
    contact_desc:"Напишіть кілька слів про задачу — відповім і запропоную маршрут рішення.",
    btn_telegram:"Написати в Telegram",
    footer_text:"© 2026 ALEX · TBILISI, GE · alexberik@gmail.com · +995 511 493 394",
    ai_text:"ALEX AI: Онлайн →"
  }
};

let currentLang = 'ru';

function applyLang(lang){
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(dict[k]) el.textContent = dict[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const k = el.getAttribute('data-i18n-html');
    if(dict[k]) el.innerHTML = dict[k];
  });
  document.querySelectorAll('.langs button').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-lang')===lang);
  });
  document.documentElement.lang = lang;
  restartTerminal();
}
document.querySelectorAll('.langs button').forEach(btn=>{
  btn.addEventListener('click', ()=> applyLang(btn.getAttribute('data-lang')));
});

// ================= Icons =================
lucide.createIcons();

// ================= Scroll progress bar =================
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  scrollBar.style.width = pct + '%';
});

// ================= Hero particle canvas (cursor-reactive) =================
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null, radius: 130 };
function resizeCanvas() {
  canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });
resizeCanvas();
window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1; this.baseX = this.x; this.baseY = this.y;
    this.density = (Math.random() * 22) + 1;
  }
  draw() { ctx.fillStyle = 'rgba(47, 230, 201, 0.55)'; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
  update() {
    const dx = mouse.x - this.x, dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius) {
      const force = (mouse.radius - distance) / mouse.radius;
      this.x -= (dx / distance) * force * this.density; this.y -= (dy / distance) * force * this.density;
    } else {
      if (this.x !== this.baseX) this.x -= (this.x - this.baseX) * 0.05;
      if (this.y !== this.baseY) this.y -= (this.y - this.baseY) * 0.05;
    }
  }
}
function initParticles() {
  particles = [];
  const count = (canvas.width * canvas.height) / 16000;
  for (let i = 0; i < count; i++) particles.push(new Particle());
}
initParticles();
function connectParticles() {
  for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
    const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 110) {
      ctx.strokeStyle = `rgba(47, 230, 201, ${0.12 * (1 - dist / 110)})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
    }
  }
}
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.draw(); p.update(); });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ================= REAL terminal typing (whoami about Alex) =================
const termInteractive = document.getElementById('term-interactive');
let termTimeoutId = null;

let termRunId = 0;
function restartTerminal(){
  if(termTimeoutId) clearTimeout(termTimeoutId);
  termRunId++;
  const myRun = termRunId;
  termInteractive.innerHTML = '';
  let lineIdx = 0, charIdx = 0;
  const lines = i18n[currentLang].term;
  function typeLine(){
    if(myRun !== termRunId) return; // a newer run (language switch) superseded this one
    if(lineIdx >= lines.length){
      // loop forever: pause, clear, restart from the top — the terminal never goes idle/fades
      termTimeoutId = setTimeout(()=>{
        if(myRun !== termRunId) return;
        termInteractive.innerHTML = '';
        lineIdx = 0; charIdx = 0;
        typeLine();
      }, 2200);
      return;
    }
    const line = lines[lineIdx];
    const isOutput = line.trim().startsWith('>');
    if(charIdx === 0){
      termInteractive.innerHTML += `<div class="term-line-${lineIdx}"></div>`;
    }
    const target = document.querySelector(`.term-line-${lineIdx}`);
    if(!target){ return; }
    if(charIdx < line.length){
      target.textContent = line.slice(0, charIdx+1);
      if(isOutput) target.classList.add('term-highlight');
      charIdx++;
      termTimeoutId = setTimeout(typeLine, isOutput ? 12 : 28);
    } else {
      lineIdx++; charIdx = 0;
      termTimeoutId = setTimeout(typeLine, 450);
    }
  }
  typeLine();
}
setTimeout(restartTerminal, 1200);

// ================= 3D tilt on glass cards =================
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2, y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 22}deg) rotateY(${x / 22}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  });
});

// ================= Per-section themed background field (dots / cubes) =================
class BgField {
  constructor(canvasEl, opts) {
    this.canvas = canvasEl; this.ctx = canvasEl.getContext('2d');
    this.shape = opts.shape; this.colors = opts.colors; this.count = opts.count || 24;
    this.items = []; this.resize();
    for (let i = 0; i < this.count; i++) this.items.push(this.spawn());
    window.addEventListener('resize', () => this.resize());
  }
  resize() {
    const parent = this.canvas.closest('section');
    this.canvas.width = parent.offsetWidth; this.canvas.height = parent.offsetHeight;
  }
  spawn() {
    return {
      x: Math.random() * this.canvas.width, y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.55, vy: (Math.random() - 0.5) * 0.55,
      size: this.shape === 'cube' ? (6 + Math.random() * 10) : (1.8 + Math.random() * 2.2),
      rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.018,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      opacity: 0.3 + Math.random() * 0.4
    };
  }
  step() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // constellation links — wider reach and brighter so the "connected dots" effect actually reads
    for (let i = 0; i < this.items.length; i++) for (let j = i + 1; j < this.items.length; j++) {
      const a = this.items[i], b = this.items[j];
      const dx = a.x - b.x, dy = a.y - b.y, dist = Math.sqrt(dx*dx+dy*dy);
      if (dist < 220) {
        ctx.strokeStyle = a.color.replace(')', `, ${0.22*(1-dist/220)})`).replace('rgb','rgba');
        ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      }
    }
    this.items.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;
      if (p.x < -20) p.x = canvas.width+20; if (p.x > canvas.width+20) p.x = -20;
      if (p.y < -20) p.y = canvas.height+20; if (p.y > canvas.height+20) p.y = -20;
      ctx.save(); ctx.translate(p.x,p.y); ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
      if (this.shape === 'cube') {
        ctx.rotate(p.rot); ctx.strokeStyle = p.color; ctx.lineWidth = 1; ctx.globalAlpha = p.opacity*0.8;
        ctx.strokeRect(-p.size/2,-p.size/2,p.size,p.size);
      } else { ctx.beginPath(); ctx.arc(0,0,p.size,0,Math.PI*2); ctx.fill(); }
      ctx.restore();
    });
    ctx.globalAlpha = 1;
  }
}
const THEME_COLORS = {
  'cubes-cyan':   { shape:'cube', colors:['rgb(47,230,201)'] },
  'cubes-violet': { shape:'cube', colors:['rgb(139,107,255)'] },
  'dots-mixed':   { shape:'dot',  colors:['rgb(47,230,201)','rgb(139,107,255)'] },
  'dots-violet':  { shape:'dot',  colors:['rgb(139,107,255)'] },
  'dots-converge':{ shape:'dot',  colors:['rgb(47,230,201)','rgb(139,107,255)'] }
};
const bgFields = [];
document.querySelectorAll('canvas.section-bg').forEach(cv => {
  const conf = THEME_COLORS[cv.getAttribute('data-theme')];
  if (!conf) return;
  bgFields.push(new BgField(cv, { shape: conf.shape, colors: conf.colors, count: conf.shape==='cube'?16:22 }));
});
function animateBgFields(){ bgFields.forEach(f=>f.step()); requestAnimationFrame(animateBgFields); }
animateBgFields();

// ================= GSAP: cinematic scroll =================
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo('.hero-content > *', { opacity:0, y:28 }, { opacity:1, y:0, duration:0.9, ease:'power3.out', stagger:0.12, delay:0.2 });
gsap.fromTo('.terminal-window', { opacity:0, y:40, scale:0.96 }, { opacity:1, y:0, scale:1, duration:1, ease:'power3.out', delay:0.4 });
gsap.to('.hero-content', { yPercent:-12, opacity:0.3, ease:'none', scrollTrigger:{ trigger:'.hero', start:'top top', end:'bottom top', scrub:true } });
/* terminal window stays fully visible while scrolling — only a tiny parallax drift, no fade */
gsap.to('.terminal-window', { yPercent:-4, ease:'none', scrollTrigger:{ trigger:'.hero', start:'top top', end:'bottom top', scrub:true } });
gsap.to('#hero-canvas', { yPercent:15, ease:'none', scrollTrigger:{ trigger:'.hero', start:'top top', end:'bottom top', scrub:true } });

document.querySelectorAll('.cine-section').forEach(sec => {
  gsap.fromTo(sec, { scale:0.92, opacity:0, y:60 }, {
    scale:1, opacity:1, y:0, ease:'power2.out', duration:1,
    scrollTrigger:{ trigger:sec, start:'top 85%', end:'top 45%', scrub:0.6 }
  });
});
document.querySelectorAll('.reveal').forEach(el => {
  gsap.fromTo(el, { opacity:0, y:36 }, { opacity:1, y:0, duration:0.9, ease:'power3.out',
    scrollTrigger:{ trigger:el, start:'top 85%', toggleActions:'play none none reverse' } });
});
['.services-grid', '.cases-grid', '.adv-grid', '.stats-grid'].forEach(sel => {
  document.querySelectorAll(sel).forEach(grid=>{
    gsap.fromTo(grid.children, { opacity:0, y:34, scale:0.97 }, {
      opacity:1, y:0, scale:1, duration:0.7, ease:'power3.out', stagger:0.08,
      scrollTrigger:{ trigger:grid, start:'top 82%', toggleActions:'play none none reverse' } });
  });
});
document.querySelectorAll('h2.section-title').forEach(h => {
  gsap.fromTo(h, { opacity:0, y:24 }, { opacity:1, y:0, duration:0.8, ease:'power3.out',
    scrollTrigger:{ trigger:h, start:'top 88%', toggleActions:'play none none reverse' } });
});

// ================= Animated counters =================
document.querySelectorAll('.stat-num[data-target]').forEach(num => {
  const target = +num.getAttribute('data-target');
  const counter = { val: 0 };
  ScrollTrigger.create({
    trigger: num, start:'top 88%', once:true,
    onEnter: () => { gsap.to(counter, { val:target, duration:1.4, ease:'power2.out',
      onUpdate: () => { num.childNodes[0].nodeValue = Math.ceil(counter.val); } }); }
  });
});

// ================= Timeline fill =================
window.addEventListener('scroll', () => {
  const timeline = document.getElementById('timeline');
  const progress = document.getElementById('timeline-progress');
  if (!timeline) return;
  const rect = timeline.getBoundingClientRect();
  const visibleHeight = window.innerHeight * 0.75 - rect.top;
  let pct = Math.max(0, Math.min(100, (visibleHeight / rect.height) * 100));
  progress.style.height = pct + '%';
  document.querySelectorAll('.timeline-item').forEach(item => {
    if (item.getBoundingClientRect().top < window.innerHeight * 0.72) item.classList.add('active');
  });
});

// initial language apply (after DOM + i18n ready)
applyLang('ru');
