// ================= Cinematic beam reveal on load =================
window.addEventListener('load', () => {
  const beam = document.getElementById('beam-reveal');
  if (!beam) return;
  beam.classList.add('animate');
  setTimeout(() => beam.classList.add('fade'), 900);
  setTimeout(() => { if (beam.parentNode) beam.parentNode.removeChild(beam); }, 1400);
});

if (window.lucide) lucide.createIcons();

const I18N = {
  ru: {
    nav_services:"Услуги", nav_expats:"Экспатам", nav_auto:"Авто", nav_cases:"Кейсы", nav_process:"Процесс", nav_why:"Почему я", nav_pricing:"Цены", nav_cta:"Написать →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:"Автоматизирую бизнес.<br><span class=\"accent\">Строю AI</span>, который работает вместо отдела.",
    hero_sub:"Telegram-боты · AI-агенты · Make/n8n · Экспатам в Грузии · Авто под ключ",
    btn_telegram:"Написать в Telegram", btn_cases:"Смотреть кейсы",
    services_tag:"SERVICES", services_title:"Что делаю",
    services_lead:"Главный фокус — AI и автоматизация. Остальное — в том же контакте, если нужно.",
    s1_title:"AI & Автоматизация", s1_desc:"Агенты, боты и пайплайны, которые закрывают рутину.",
    s1_f1:"AI-агенты и мульти-агентные системы", s1_f2:"Telegram-боты под ключ", s1_f3:"Make / n8n / кастомные пайплайны", s1_f4:"Интеграции API, CRM, маркетплейсы",
    e1_title:"Легализация", e1_desc:"ВНЖ, документы, сопровождение.",
    e2_title:"ИП и компания", e2_desc:"Регистрация бизнеса.",
    a1_title:"Авто под ключ", a1_desc:"Подбор, проверка, оформление.",
    smm_title:"SMM / Контент", smm_desc:"Контент-пайплайны и Shorts.",
    pricing_tag:"PRICING", pricing_title:"Пакеты и старт",
    pricing_note:"Ориентиры. Фикс — после короткого брифа.",
    price1_name:"Старт", price1_amount:"от 149 ₾", price1_desc:"Быстрый запуск бота или автоматизации.",
    price1_f1:"Telegram-бот или простой workflow", price1_f2:"1 интеграция", price1_f3:"Документация и передача", price1_cta:"Обсудить Старт",
    price2_badge:"Частый выбор", price2_name:"Бизнес", price2_amount:"от 499 ₾", price2_desc:"AI-агент или связка процессов под задачу.",
    price2_f1:"AI-агент / multi-step n8n·Make", price2_f2:"До 3 интеграций", price2_f3:"2 недели поддержки", price2_cta:"Обсудить Бизнес",
    price3_name:"Под ключ", price3_amount:"от 1 199 ₾", price3_desc:"Система: агенты, контент, автоматизация офиса.",
    price3_f1:"Мульти-агентная схема", price3_f2:"Кастомные интеграции", price3_f3:"Месяц сопровождения", price3_cta:"Обсудить под ключ",
    cases_tag:"CASES", cases_title:"Кейсы и проекты", case_more:"Подробнее",
    c1_result:"→ Поиск вакансий и первый отклик — без ручного перебора", c1_desc:"Telegram-бот с AI: резюме, вакансии, отклики.",
    c2_result:"→ Карточка товара и цены — без ручной рутины", c2_desc:"AI-агент для продаж: карточки, цены, конкуренты.",
    c3_result:"→ AI, автоматизация и релокация — один контакт", c3_desc:"AI, автоматизация и сопровождение в Грузии.",
    c4_result:"→ Офисная рутина уходит на агентов, не на людей", c4_desc:"Мульти-агентная система для рутины офиса.",
    c5_title:"Контент-ферма", c5_result:"→ Контент по пайплайну, не «когда руки дойдут»", c5_desc:"Контент-пайплайн под соцсети и Shorts.",
    c6_title:"Auto-Parts Marketplace", c6_result:"→ Поставщик и покупатель — в одном месте", c6_desc:"B2B-витрина автозапчастей.",
    c7_title:"QR-меню", c7_result:"→ Заказ со стола по QR, меньше очередей у персонала", c7_desc:"Цифровое меню и заказы.",
    c8_result:"→ От темы до Shorts — один пайплайн", c8_desc:"Тема → сценарий → озвучка → Shorts.",
    process_tag:"PROCESS", process_title:"Как проходит работа",
    p1_title:"Бриф", p1_desc:"Цель и ограничения.", p2_title:"План", p2_desc:"Маршрут и сроки.", p3_title:"Сборка", p3_desc:"Бот или сопровождение.", p4_title:"Запуск", p4_desc:"Передача и поддержка.",
    why_tag:"WHY", why_title:"Почему я",
    w1_title:"Скорость", w1_desc:"От брифа до рабочего прототипа — дни, не месяцы.",
    w2_title:"Системность", w2_desc:"Не разовые скрипты, а связки процессов.",
    w3_title:"Грузия", w3_desc:"Локальный контекст + AI-экспертиза.",
    cta_title:"Готовы начать?", cta_sub:"Напишите — разберём задачу и предложим маршрут.", cta_btn:"Написать в Telegram",
    expats_tag:"FOR EXPATS", expats_title:"Экспатам в Грузии",
    ex1_title:"Документы", ex1_desc:"ВНЖ, регистрация, справки.",
    ex2_title:"Бизнес", ex2_desc:"ИП, ООО, банковский счёт.",
    ex3_title:"Быт", ex3_desc:"Жильё, связь, ориентиры.",
    auto_tag:"AUTO", auto_title:"Авто под ключ", auto_lead:"Подбор, проверка, оформление — без сюрпризов.", auto_s1:"Звонок / TG", auto_s1s:"Бриф и бюджет", auto_s2:"Аукцион", auto_s2s:"Подбор и ставка", auto_s3:"Порт", auto_s3s:"Доставка и растаможка", auto_s4:"Клиент", auto_s4s:"Передача под ключ", auto_note:"США / Корея / Европа → Грузия. Сопровождение на каждом этапе."
  },
  en: {
    nav_services:"Services", nav_expats:"For Expats", nav_auto:"Cars", nav_cases:"Cases", nav_process:"Process", nav_why:"Why me", nav_pricing:"Pricing", nav_cta:"Message →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:"I automate business.<br><span class=\"accent\">I build AI</span> that works instead of a department.",
    hero_sub:"Telegram bots · AI agents · Make/n8n · Expats in Georgia · Cars turnkey",
    btn_telegram:"Message on Telegram", btn_cases:"View cases",
    services_tag:"SERVICES", services_title:"What I do",
    services_lead:"Primary focus — AI and automation. Everything else is the same contact when you need it.",
    s1_title:"AI & Automation", s1_desc:"Agents, bots and pipelines that close the routine.",
    s1_f1:"AI agents and multi-agent systems", s1_f2:"Telegram bots end-to-end", s1_f3:"Make / n8n / custom pipelines", s1_f4:"API, CRM, marketplace integrations",
    e1_title:"Legalization", e1_desc:"Residence, documents, support.",
    e2_title:"Sole prop & company", e2_desc:"Business registration.",
    a1_title:"Cars turnkey", a1_desc:"Selection, inspection, paperwork.",
    smm_title:"SMM / Content", smm_desc:"Content pipelines and Shorts.",
    pricing_tag:"PRICING", pricing_title:"Packages & starting points",
    pricing_note:"Ballpark figures. Fixed quote after a short brief.",
    price1_name:"Start", price1_amount:"from 149 ₾", price1_desc:"Quick bot or automation launch.",
    price1_f1:"Telegram bot or simple workflow", price1_f2:"1 integration", price1_f3:"Docs and handoff", price1_cta:"Discuss Start",
    price2_badge:"Popular", price2_name:"Business", price2_amount:"from 499 ₾", price2_desc:"AI agent or process chain for the job.",
    price2_f1:"AI agent / multi-step n8n·Make", price2_f2:"Up to 3 integrations", price2_f3:"2 weeks support", price2_cta:"Discuss Business",
    price3_name:"Turnkey", price3_amount:"from 1,199 ₾", price3_desc:"System: agents, content, office automation.",
    price3_f1:"Multi-agent setup", price3_f2:"Custom integrations", price3_f3:"One month support", price3_cta:"Discuss turnkey",
    cases_tag:"CASES", cases_title:"Cases & projects", case_more:"More",
    c1_result:"→ Job search and first reply — without manual scrolling", c1_desc:"Telegram bot with AI: resume, jobs, replies.",
    c2_result:"→ Product card and pricing — without manual grind", c2_desc:"AI agent for sales: cards, prices, competitors.",
    c3_result:"→ AI, automation, relocation — one contact", c3_desc:"AI, automation and support in Georgia.",
    c4_result:"→ Office routine on agents, not on people", c4_desc:"Multi-agent system for office routine.",
    c5_title:"Content farm", c5_result:"→ Content on a pipeline, not when we have time", c5_desc:"Content pipeline for social and Shorts.",
    c6_title:"Auto-Parts Marketplace", c6_result:"→ Supplier and buyer in one place", c6_desc:"B2B auto-parts storefront.",
    c7_title:"QR menu", c7_result:"→ Order from the table via QR, less staff load", c7_desc:"Digital menu and orders.",
    c8_result:"→ From topic to Shorts — one pipeline", c8_desc:"Topic → script → voice → Shorts.",
    process_tag:"PROCESS", process_title:"How work goes",
    p1_title:"Brief", p1_desc:"Goal and constraints.", p2_title:"Plan", p2_desc:"Route and timeline.", p3_title:"Build", p3_desc:"Bot or support.", p4_title:"Launch", p4_desc:"Handoff and support.",
    why_tag:"WHY", why_title:"Why me",
    w1_title:"Speed", w1_desc:"From brief to working prototype — days, not months.",
    w2_title:"Systems", w2_desc:"Not one-off scripts — process chains.",
    w3_title:"Georgia", w3_desc:"Local context + AI expertise.",
    cta_title:"Ready to start?", cta_sub:"Message me — we map the task and a route.", cta_btn:"Message on Telegram",
    expats_tag:"FOR EXPATS", expats_title:"For expats in Georgia",
    ex1_title:"Documents", ex1_desc:"Residence, registration, certificates.",
    ex2_title:"Business", ex2_desc:"Sole prop, LLC, bank account.",
    ex3_title:"Daily life", ex3_desc:"Housing, connectivity, orientation.",
    auto_tag:"AUTO", auto_title:"Cars turnkey", auto_lead:"Selection, inspection, paperwork — no surprises.", auto_s1:"Call / TG", auto_s1s:"Brief & budget", auto_s2:"Auction", auto_s2s:"Pick & bid", auto_s3:"Port", auto_s3s:"Shipping & customs", auto_s4:"Client", auto_s4s:"Keys in hand", auto_note:"USA / Korea / Europe → Georgia. Support at every step."
  },
  ka: {
    nav_services:"სერვისები", nav_expats:"ექსპატებს", nav_auto:"ავტო", nav_cases:"ქეისები", nav_process:"პროცესი", nav_why:"რატომ მე", nav_pricing:"ფასები", nav_cta:"დაწერეთ →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:"ავტომატიზაციას ვაკეთებ ბიზნესზე.<br><span class=\"accent\">ვაშენებ AI-ს</span>, რომელიც განყოფილების ნაცვლად მუშაობს.",
    hero_sub:"Telegram-ბოტები · AI-აგენტები · Make/n8n · ექსპატები საქართველოში · ავტო სრულად",
    btn_telegram:"დაწერეთ Telegram-ში", btn_cases:"ქეისების ნახვა",
    services_tag:"SERVICES", services_title:"რას ვაკეთებ",
    services_lead:"მთავარი ფოკუსი — AI და ავტომატიზაცია. დანარჩენი — იმავე კონტაქტზე.",
    s1_title:"AI & ავტომატიზაცია", s1_desc:"აგენტები, ბოტები და მილები, რომლებიც რუტინას ხურავენ.",
    s1_f1:"AI-აგენტები და მულტი-აგენტური სისტემები", s1_f2:"Telegram-ბოტები სრულად", s1_f3:"Make / n8n / კასტომ მილები", s1_f4:"API, CRM, მარკეტფლეის ინტეგრაციები",
    e1_title:"ლეგალიზაცია", e1_desc:"ბინადრობა, დოკუმენტები, თანხლება.",
    e2_title:"ინდ. მეწარმე და კომპანია", e2_desc:"ბიზნესის რეგისტრაცია.",
    a1_title:"ავტო სრულად", a1_desc:"შერჩევა, შემოწმება, გაფორმება.",
    smm_title:"SMM / კონტენტი", smm_desc:"კონტენტ-მილები და Shorts.",
    pricing_tag:"PRICING", pricing_title:"პაკეტები და სტარტი",
    pricing_note:"ორიენტირები. ფიქსი — მოკლე ბრიფის შემდეგ.",
    price1_name:"Start", price1_amount:"149 ₾-დან", price1_desc:"ბოტის ან ავტომატიზაციის სწრაფი გაშვება.",
    price1_f1:"Telegram-ბოტი ან მარტივი workflow", price1_f2:"1 ინტეგრაცია", price1_f3:"დოკუმენტაცია და გადაცემა", price1_cta:"განვიხილოთ Start",
    price2_badge:"ხშირი არჩევანი", price2_name:"Business", price2_amount:"499 ₾-დან", price2_desc:"AI-აგენტი ან პროცესების ჯაჭვი ამოცანისთვის.",
    price2_f1:"AI-აგენტი / multi-step n8n·Make", price2_f2:"მდე 3 ინტეგრაცია", price2_f3:"2 კვირის მხარდაჭერა", price2_cta:"განვიხილოთ Business",
    price3_name:"Turnkey", price3_amount:"1,199 ₾-დან", price3_desc:"სისტემა: აგენტები, კონტენტი, ოფისის ავტომატიზაცია.",
    price3_f1:"მულტი-აგენტური სქემა", price3_f2:"კასტომ ინტეგრაციები", price3_f3:"ერთი თვის თანხლება", price3_cta:"განვიხილოთ turnkey",
    cases_tag:"CASES", cases_title:"ქეისები და პროექტები", case_more:"მეტი",
    c1_result:"→ ვაკანსიების ძიება", c1_desc:"Telegram-ბოტი AI-ით.",
    c2_result:"→ პროდუქტის ბარათი", c2_desc:"AI-აგენტი გაყიდვებისთვის.",
    c3_result:"→ AI და რელოკაცია", c3_desc:"AI და თანხლება საქართველოში.",
    c4_result:"→ ოფისის რუტინა აგენტებზე", c4_desc:"მულტი-აგენტური სისტემა.",
    c5_title:"კონტენტ-ფერმა", c5_result:"→ კონტენტი მილით", c5_desc:"კონტენტ-მილი.",
    c6_title:"Auto-Parts Marketplace", c6_result:"→ მომწოდებელი და მყიდველი", c6_desc:"B2B ვიტრინა.",
    c7_title:"QR-მენიუ", c7_result:"→ შეკვეთა QR-ით", c7_desc:"ციფრული მენიუ.",
    c8_result:"→ თემიდან Shorts-მდე", c8_desc:"თემა → სცენარი → Shorts.",
    process_tag:"PROCESS", process_title:"როგორ მიდის სამუშაო",
    p1_title:"ბრიფი", p1_desc:"მიზანი.", p2_title:"გეგმა", p2_desc:"მარშრუტი.", p3_title:"აწყობა", p3_desc:"ბოტი.", p4_title:"გაშვება", p4_desc:"გადაცემა.",
    why_tag:"WHY", why_title:"რატომ მე",
    w1_title:"სიჩქარე", w1_desc:"დღეები, არა თვეები.",
    w2_title:"სისტემურობა", w2_desc:"პროცესების ჯაჭვები.",
    w3_title:"საქართველო", w3_desc:"ლოკალური კონტექსტი + AI.",
    cta_title:"მზად ხართ?", cta_sub:"დამიწერეთ.", cta_btn:"დაწერეთ Telegram-ში",
    expats_tag:"FOR EXPATS", expats_title:"ექსპატებს საქართველოში",
    ex1_title:"დოკუმენტები", ex1_desc:"ბინადრობა.",
    ex2_title:"ბიზნესი", ex2_desc:"რეგისტრაცია.",
    ex3_title:"ყოველდღიურობა", ex3_desc:"საცხოვრებელი.",
    auto_tag:"AUTO", auto_title:"ავტო სრულად", auto_lead:"შერჩევა, შემოწმება, გაფორმება — სიურპრიზების გარეშე.", auto_s1:"ზარი / TG", auto_s1s:"ბრიფი და ბიუჯეტი", auto_s2:"აუქციონი", auto_s2s:"შერჩევა და ფსონი", auto_s3:"პორტი", auto_s3s:"მიწოდება და განბაჟება", auto_s4:"კლიენტი", auto_s4s:"გადაცემა", auto_note:"აშშ / კორეა / ევროპა → საქართველო."
  },
  ua: {
    nav_services:"Послуги", nav_expats:"Експатам", nav_auto:"Авто", nav_cases:"Кейси", nav_process:"Процес", nav_why:"Чому я", nav_pricing:"Ціни", nav_cta:"Написати →",
    hero_tag:"AI & AUTOMATION SPECIALIST",
    hero_h1:"Автоматизую бізнес.<br><span class=\"accent\">Будую AI</span>, який працює замість відділу.",
    hero_sub:"Telegram-боти · AI-агенти · Make/n8n · Експатам у Грузії · Авто під ключ",
    btn_telegram:"Написати в Telegram", btn_cases:"Дивитися кейси",
    services_tag:"SERVICES", services_title:"Що роблю",
    services_lead:"Головний фокус — AI і автоматизація.",
    s1_title:"AI & Автоматизація", s1_desc:"Агенти, боти і пайплайни.",
    s1_f1:"AI-агенти", s1_f2:"Telegram-боти", s1_f3:"Make / n8n", s1_f4:"Інтеграції API, CRM",
    e1_title:"Легалізація", e1_desc:"ВНЖ, документи.",
    e2_title:"ФОП і компанія", e2_desc:"Реєстрація бізнесу.",
    a1_title:"Авто під ключ", a1_desc:"Підбір, перевірка, оформлення.",
    smm_title:"SMM / Контент", smm_desc:"Контент-пайплайни і Shorts.",
    pricing_tag:"PRICING", pricing_title:"Пакети і старт",
    pricing_note:"Орієнтири. Фікс — після короткого брифу.",
    price1_name:"Старт", price1_amount:"від 149 ₾", price1_desc:"Швидкий запуск бота або автоматизації.",
    price1_f1:"Telegram-бот або простий workflow", price1_f2:"1 інтеграція", price1_f3:"Документація і передача", price1_cta:"Обговорити Старт",
    price2_badge:"Частий вибір", price2_name:"Бізнес", price2_amount:"від 499 ₾", price2_desc:"AI-агент або зв'язка процесів під задачу.",
    price2_f1:"AI-агент / multi-step n8n·Make", price2_f2:"До 3 інтеграцій", price2_f3:"2 тижні підтримки", price2_cta:"Обговорити Бізнес",
    price3_name:"Під ключ", price3_amount:"від 1 199 ₾", price3_desc:"Система: агенти, контент, автоматизація офісу.",
    price3_f1:"Мульти-агентна схема", price3_f2:"Кастомні інтеграції", price3_f3:"Місяць супроводу", price3_cta:"Обговорити під ключ",
    cases_tag:"CASES", cases_title:"Кейси і проєкти", case_more:"Детальніше",
    c1_result:"→ Пошук вакансій", c1_desc:"Telegram-бот з AI.",
    c2_result:"→ Картка товару", c2_desc:"AI-агент для продажів.",
    c3_result:"→ AI і релокація", c3_desc:"AI і супровід у Грузії.",
    c4_result:"→ Офісна рутина на агентів", c4_desc:"Мульти-агентна система.",
    c5_title:"Контент-ферма", c5_result:"→ Контент пайплайном", c5_desc:"Контент-пайплайн.",
    c6_title:"Auto-Parts Marketplace", c6_result:"→ Постачальник і покупець", c6_desc:"B2B-вітрина.",
    c7_title:"QR-меню", c7_result:"→ Замовлення з QR", c7_desc:"Цифрове меню.",
    c8_result:"→ Від теми до Shorts", c8_desc:"Тема → сценарій → Shorts.",
    process_tag:"PROCESS", process_title:"Як проходить робота",
    p1_title:"Бриф", p1_desc:"Мета.", p2_title:"План", p2_desc:"Маршрут.", p3_title:"Збірка", p3_desc:"Бот.", p4_title:"Запуск", p4_desc:"Передача.",
    why_tag:"WHY", why_title:"Чому я",
    w1_title:"Швидкість", w1_desc:"Дні, не місяці.",
    w2_title:"Системність", w2_desc:"Зв'язки процесів.",
    w3_title:"Грузія", w3_desc:"Локальний контекст + AI.",
    cta_title:"Готові почати?", cta_sub:"Напишіть — розберемо задачу.", cta_btn:"Написати в Telegram",
    expats_tag:"FOR EXPATS", expats_title:"Експатам у Грузії",
    ex1_title:"Документи", ex1_desc:"ВНЖ, реєстрація.",
    ex2_title:"Бізнес", ex2_desc:"ФОП, ТОВ.",
    ex3_title:"Побут", ex3_desc:"Житло, зв'язок.",
    auto_tag:"AUTO", auto_title:"Авто під ключ", auto_lead:"Підбір, перевірка, оформлення — без сюрпризів.", auto_s1:"Дзвінок / TG", auto_s1s:"Бриф і бюджет", auto_s2:"Аукціон", auto_s2s:"Підбір і ставка", auto_s3:"Порт", auto_s3s:"Доставка і розмитнення", auto_s4:"Клієнт", auto_s4s:"Передача під ключ", auto_note:"США / Корея / Європа → Грузія."
  }
};

function applyLang(lang) {
  const t = I18N[lang] || I18N.ru;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] != null) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (t[k] != null) el.innerHTML = t[k];
  });
  document.querySelectorAll('.langs button').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  try { localStorage.setItem('magic_lang', lang); } catch (e) {}
  if (window.lucide) lucide.createIcons();
}

document.querySelectorAll('.langs button').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

try {
  const saved = localStorage.getItem('magic_lang');
  if (saved && I18N[saved]) applyLang(saved);
} catch (e) {}

const TERM_LINES = [
  '$ magic init --project ai-agent',
  '→ scanning workflows…',
  '→ wiring n8n + telegram…',
  '✓ agent online · waiting for brief'
];
function typeTerminal() {
  const out = document.getElementById('term-out');
  if (!out) return;
  let lineIdx = 0, charIdx = 0;
  function tick() {
    if (lineIdx >= TERM_LINES.length) return;
    const line = TERM_LINES[lineIdx];
    out.textContent = TERM_LINES.slice(0, lineIdx).join('\n') + (lineIdx ? '\n' : '') + line.slice(0, charIdx);
    charIdx++;
    if (charIdx > line.length) { lineIdx++; charIdx = 0; setTimeout(tick, 420); }
    else setTimeout(tick, 28);
  }
  tick();
}
setTimeout(typeTerminal, 600);

const progress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  if (!progress) return;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
}, { passive: true });

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.glass-card, .section-title, .section-tag, .auto-flow').forEach(el => {
    gsap.from(el, { opacity: 0, y: 24, duration: 0.55, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
}

document.querySelectorAll('[data-case]').forEach(card => {
  card.addEventListener('click', () => {
    const modal = document.getElementById('case-modal');
    const body = document.getElementById('case-modal-body');
    if (!modal || !body) return;
    const title = card.querySelector('h3')?.textContent || '';
    const result = card.querySelector('.case-result')?.textContent || '';
    const desc = card.querySelector('p')?.textContent || '';
    body.innerHTML = '<h3>' + title + '</h3><p class="case-result">' + result + '</p><p>' + desc + '</p>';
    modal.setAttribute('aria-hidden', 'false');
  });
});
document.getElementById('case-close')?.addEventListener('click', () => {
  document.getElementById('case-modal')?.setAttribute('aria-hidden', 'true');
});
document.getElementById('case-modal')?.addEventListener('click', e => {
  if (e.target.id === 'case-modal') e.target.setAttribute('aria-hidden', 'true');
});
