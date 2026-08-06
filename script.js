// ================= i18n =================
const i18n = {
  ru: {
    nav_services:"Услуги", nav_expats:"Экспатам", nav_auto:"Авто", nav_cases:"Кейсы", nav_why:"Почему я", nav_cta:"Написать →",
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
    p1_title:"1. Заявка", p1_desc:"Первичная связь, фиксация задачи и определение главных целей проекта.",
    p2_title:"2. Анализ", p2_desc:"Изучение процессов, подбор архитектуры и согласование плана реализации.",
    p3_title:"3. Разработка", p3_desc:"Написание кода, настройка AI-моделей, связка вебхуков и тестирование сценариев.",
    p4_title:"4. Запуск", p4_desc:"Деплой на продакшен, интеграция в существующие системы и ввод в эксплуатацию.",
    p5_title:"5. Поддержка", p5_desc:"Мониторинг, оперативные обновления и масштабирование под растущие нагрузки.",
    why_tag:"ADVANTAGES", why_title:"Почему выбирают меня",
    w1_title:"Скорость", w1_desc:"Быстрый запуск первых рабочих версий решений без бюрократии и задержек.",
    w2_title:"AI-first подход", w2_desc:"Фокус на внедрении искусственного интеллекта для исключения рутины и сокращения издержек.",
    w3_title:"Без посредников", w3_desc:"Прямой контакт с инженером-разработчиком — прозрачная коммуникация на каждом этапе.",
    w4_title:"Современные технологии", w4_desc:"LLM-агенты, Make, n8n, современные web-фреймворки — актуальный стек, а не шаблоны.",
    w5_title:"Живу в Грузии", w5_desc:"Не консультант из другой страны — знаю рынок и процессы изнутри, каждый день.",
    w6_title:"Поддержка после запуска", w6_desc:"Гарантия стабильности систем и помощь в решении вопросов после передачи проекта.",
    contact_tag:"GET IN TOUCH", contact_title:"Есть идея? Давайте превратим её в работающий продукт.",
    contact_desc:"Напишите пару слов о задаче — отвечу и предложу эффективный маршрут решения.",
    btn_telegram:"Написать в Telegram",
    footer_text:"© 2026 ALEX · TBILISI, GE · alexberik@gmail.com · +995 511 493 394",
    ai_text:"ALEX AI: Онлайн. Задать вопрос →"
  },
  en: {
    nav_services:"Services", nav_expats:"For Expats", nav_auto:"Cars", nav_cases:"Cases", nav_why:"Why me", nav_cta:"Message →",
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
    p1_title:"1. Request", p1_desc:"Initial contact, capturing the task and defining the project's main goals.",
    p2_title:"2. Analysis", p2_desc:"Studying processes, choosing an architecture, agreeing on an implementation plan.",
    p3_title:"3. Build", p3_desc:"Writing code, configuring AI models, wiring webhooks, and testing scenarios.",
    p4_title:"4. Launch", p4_desc:"Production deployment, integration into existing systems, and going live.",
    p5_title:"5. Support", p5_desc:"Monitoring, prompt updates, and scaling as load grows.",
    why_tag:"ADVANTAGES", why_title:"Why work with me",
    w1_title:"Speed", w1_desc:"Fast launch of the first working versions, without bureaucracy or delays.",
    w2_title:"AI-first approach", w2_desc:"Focused on deploying AI to remove routine work and cut costs.",
    w3_title:"No middlemen", w3_desc:"Direct contact with the engineer — transparent communication at every step.",
    w4_title:"Modern stack", w4_desc:"LLM agents, Make, n8n, modern web frameworks — a current stack, not templates.",
    w5_title:"Based in Georgia", w5_desc:"Not a consultant from another country — I know the market and process firsthand, every day.",
    w6_title:"Support after launch", w6_desc:"Guaranteed system stability and help with anything after handover.",
    contact_tag:"GET IN TOUCH", contact_title:"Have an idea? Let's turn it into a working product.",
    contact_desc:"Send a few words about the task — I'll reply with an effective route to solve it.",
    btn_telegram:"Message on Telegram",
    footer_text:"© 2026 ALEX · TBILISI, GE · alexberik@gmail.com · +995 511 493 394",
    ai_text:"ALEX AI: Online. Ask a question →"
  },
  ka: {
    nav_services:"სერვისები", nav_expats:"ექსპატებს", nav_auto:"ავტო", nav_cases:"ქეისები", nav_why:"რატომ მე", nav_cta:"დაწერეთ →",
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
    p1_title:"1. განაცხადი", p1_desc:"პირველადი კონტაქტი და მიზნების განსაზღვრა.",
    p2_title:"2. ანალიზი", p2_desc:"პროცესების შესწავლა და არქიტექტურის შერჩევა.",
    p3_title:"3. დეველოპმენტი", p3_desc:"კოდის წერა, AI მოდელების კონფიგურაცია, ტესტირება.",
    p4_title:"4. გაშვება", p4_desc:"დეპლოი და ინტეგრაცია არსებულ სისტემებში.",
    p5_title:"5. მხარდაჭერა", p5_desc:"მონიტორინგი და მასშტაბირება.",
    why_tag:"ADVANTAGES", why_title:"რატომ მირჩევენ",
    w1_title:"სისწრაფე", w1_desc:"სამუშაო ვერსიების სწრაფი გაშვება.",
    w2_title:"AI-first მიდგომა", w2_desc:"ფოკუსი AI-ის დანერგვაზე.",
    w3_title:"შუამავლების გარეშე", w3_desc:"პირდაპირი კონტაქტი ინჟინერთან.",
    w4_title:"თანამედროვე სტეკი", w4_desc:"LLM აგენტები, Make, n8n.",
    w5_title:"ვცხოვრობ საქართველოში", w5_desc:"ვიცნობ ბაზარს შიგნიდან, ყოველდღე.",
    w6_title:"მხარდაჭერა გაშვების შემდეგ", w6_desc:"სისტემების სტაბილურობის გარანტია.",
    contact_tag:"GET IN TOUCH", contact_title:"გაქვთ იდეა? გადავაქციოთ ის მუშა პროდუქტად.",
    contact_desc:"მოგვწერეთ ამოცანის შესახებ — შემოგთავაზებთ გადაწყვეტის მარშრუტს.",
    btn_telegram:"Telegram-ში დაწერა",
    footer_text:"© 2026 ALEX · TBILISI, GE · alexberik@gmail.com · +995 511 493 394",
    ai_text:"ALEX AI: ონლაინ →"
  },
  ua: {
    nav_services:"Послуги", nav_expats:"Експатам", nav_auto:"Авто", nav_cases:"Кейси", nav_why:"Чому я", nav_cta:"Написати →",
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
    p1_title:"1. Заявка", p1_desc:"Перший контакт і визначення головних цілей проєкту.",
    p2_title:"2. Аналіз", p2_desc:"Вивчення процесів і підбір архітектури.",
    p3_title:"3. Розробка", p3_desc:"Написання коду, налаштування AI-моделей, тестування.",
    p4_title:"4. Запуск", p4_desc:"Деплой і інтеграція в існуючі системи.",
    p5_title:"5. Підтримка", p5_desc:"Моніторинг і масштабування.",
    why_tag:"ADVANTAGES", why_title:"Чому обирають мене",
    w1_title:"Швидкість", w1_desc:"Швидкий запуск перших робочих версій.",
    w2_title:"AI-first підхід", w2_desc:"Фокус на впровадженні AI.",
    w3_title:"Без посередників", w3_desc:"Прямий контакт з інженером.",
    w4_title:"Сучасні технології", w4_desc:"LLM-агенти, Make, n8n.",
    w5_title:"Живу в Грузії", w5_desc:"Знаю ринок зсередини, щодня.",
    w6_title:"Підтримка після запуску", w6_desc:"Гарантія стабільності систем.",
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

function restartTerminal(){
  if(termTimeoutId) clearTimeout(termTimeoutId);
  termInteractive.innerHTML = '';
  let lineIdx = 0, charIdx = 0;
  const lines = i18n[currentLang].term;
  function typeLine(){
    if(lineIdx >= lines.length){
      termInteractive.innerHTML += '<span class="term-caret"></span>';
      return;
    }
    const line = lines[lineIdx];
    const isOutput = line.trim().startsWith('>');
    if(charIdx === 0){
      termInteractive.innerHTML += `<div class="term-line-${lineIdx}"></div>`;
    }
    const target = document.querySelector(`.term-line-${lineIdx}`);
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
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      size: this.shape === 'cube' ? (6 + Math.random() * 10) : (1.6 + Math.random() * 2),
      rot: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - 0.5) * 0.01,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      opacity: 0.25 + Math.random() * 0.35
    };
  }
  step() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < this.items.length; i++) for (let j = i + 1; j < this.items.length; j++) {
      const a = this.items[i], b = this.items[j];
      const dx = a.x - b.x, dy = a.y - b.y, dist = Math.sqrt(dx*dx+dy*dy);
      if (dist < 160) {
        ctx.strokeStyle = a.color.replace(')', `, ${0.10*(1-dist/160)})`).replace('rgb','rgba');
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
gsap.to('.terminal-window', { yPercent:-6, scale:0.94, opacity:0.4, ease:'none', scrollTrigger:{ trigger:'.hero', start:'top top', end:'bottom top', scrub:true } });
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
