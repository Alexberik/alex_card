if (window.lucide) lucide.createIcons();

(function () {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, stars = [], mouse = { x: 0.5, y: 0.5 }, mx = 0, my = 0;
  const N = 90;
  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < N; i++) {
      stars.push({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.4 + 0.3, a: Math.random() * 0.5 + 0.15, s: Math.random() * 0.4 + 0.1, p: Math.random() * Math.PI * 2 });
    }
  }
  resize();
  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX / w; mouse.y = e.clientY / h; }, { passive: true });
  function draw() {
    mx += (mouse.x - 0.5 - mx) * 0.04;
    my += (mouse.y - 0.5 - my) * 0.04;
    ctx.clearRect(0, 0, w, h);
    const t = Date.now() * 0.001;
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const a = stars[i], b = stars[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.strokeStyle = 'rgba(34,211,238,' + (0.12 * (1 - d / 120)) + ')';
          ctx.beginPath();
          ctx.moveTo(a.x + mx * 18 * a.s, a.y + my * 18 * a.s);
          ctx.lineTo(b.x + mx * 18 * b.s, b.y + my * 18 * b.s);
          ctx.stroke();
        }
      }
    }
    for (const s of stars) {
      const px = s.x + mx * 22 * s.s, py = s.y + my * 22 * s.s;
      const tw = s.a + Math.sin(t * 1.5 + s.p) * 0.15;
      ctx.fillStyle = 'rgba(34,211,238,' + Math.max(0.05, tw) + ')';
      ctx.beginPath(); ctx.arc(px, py, s.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

const I18N = {
  ru: {
    nav_services:"Услуги", nav_products:"Продукты", nav_process:"Как работаем", nav_pricing:"Цены", nav_cta:"Опишите задачу →",
    hero_tag:"AI ENGINEERING & AUTOMATION · TBILISI",
    hero_h1:"Автоматизирую рутину.<br><span class=\"accent\">Строю AI</span>, который берёт на себя заявки, ответы и контент.",
    hero_sub:"Ваш бизнес может работать умнее и быстрее — без найма целого отдела под каждую задачу.",
    hero_p1:"AI-агенты и виртуальные сотрудники", hero_p2:"Автоматизация процессов и интеграции", hero_p3:"Telegram-боты и AI-инструменты под задачу",
    btn_telegram:"Опишите задачу в Telegram", btn_services:"Что можно автоматизировать",
    promise_2h:"Ответ в течение 2 часов", promise_24:"На связи 24/7",
    services_tag:"SERVICES", services_title:"Какие задачи закрываю", services_lead:"Не стек, а результат: что система делает за вас и что нужно для запуска.",
    t1_label:"Заявки и лиды", t1_title:"Заявки сами попадают к менеджеру", t1_problem:"Проблема: лиды из формы, рекламы и Telegram теряются или обрабатываются вручную.", t1_solution:"Решение: квалификация → уведомление в Telegram → запись в CRM.", t1_s1:"Подключение форм / рекламы / бота", t1_s2:"Правила квалификации", t1_s3:"Алерты и передача в CRM",
    t2_label:"Поддержка", t2_title:"Ответы на типовые вопросы 24/7", t2_problem:"Проблема: одни и те же вопросы в чате и почте съедают время команды.", t2_solution:"Решение: бот по базе знаний + эскалация человеку, когда нужно.", t2_s1:"Telegram-бот или виджет", t2_s2:"База знаний / FAQ", t2_s3:"Передача сложных кейсов",
    t3_label:"Контент", t3_title:"Контент и Shorts по пайплайну", t3_problem:"Проблема: контент зависит от «когда руки дойдут», нет стабильного потока.", t3_solution:"Решение: тема → сценарий → озвучка / текст → черновик публикации.", t3_s1:"Сценарии и шаблоны", t3_s2:"Генерация и сборка", t3_s3:"Черновики под ваши каналы",
    t4_label:"Офис", t4_title:"Почта и рутина без ручного разбора", t4_problem:"Проблема: входящие, таблицы и повторяющиеся действия занимают полдня.", t4_solution:"Решение: разбор входящих → черновики ответов → обновление таблиц / CRM.", t4_s1:"Почта / таблицы / CRM", t4_s2:"Правила и шаблоны", t4_s3:"Контроль и эскалация",
    t5_label:"Продажи", t5_title:"Карточки товаров и цены без рутины", t5_problem:"Проблема: описания, цены и конкуренты обновляются вручную.", t5_solution:"Решение: SKU → текст карточки → ориентир по ценам → черновик публикации.", t5_s1:"Шаблоны карточек", t5_s2:"Сбор цен (по договорённости)", t5_s3:"Выгрузка в нужный формат",
    t6_label:"Карьера", t6_title:"Поиск вакансий и первый отклик", t6_problem:"Проблема: часы на перебор вакансий и одинаковые письма.", t6_solution:"Решение: подбор по резюме → черновик отклика → трекинг статусов.", t6_s1:"Профиль и критерии", t6_s2:"Подбор и черновики", t6_s3:"Список статусов",
    task_cta:"Обсудить эту задачу",
    products_tag:"PRODUCTS", products_title:"Продукты и прототипы", products_lead:"Только то, что реально есть. Статус указан честно — без выдуманных метрик.",
    status_proto:"Прототип", status_work:"В разработке",
    p1_for:"Для кого: кто ищет работу и тратит время на ручной перебор вакансий.", p1_does:"Задача: подобрать вакансии под профиль и подготовить первый отклик.", p1_f1:"Разбор резюме / профиля", p1_f2:"Подбор вакансий по критериям", p1_f3:"Черновик письма-отклика", p1_access:"Доступ: обсуждение внедрения под ваш процесс.",
    p2_for:"Для кого: продавцы и маркетплейсы с потоком карточек.", p2_does:"Задача: ускорить описание товара и ориентир по цене.", p2_f1:"Генерация текста карточки", p2_f2:"Структура под площадку", p2_f3:"Черновик для публикации", p2_access:"Доступ: пилот на вашем каталоге по запросу.",
    p3_for:"Для кого: команды с повторяющейся офисной рутиной.", p3_does:"Задача: разбор входящих, черновики ответов, обновление статусов.", p3_f1:"Triage входящих", p3_f2:"Черновики ответов", p3_f3:"Связка с таблицами / CRM", p3_access:"Доступ: сборка под ваши каналы и правила.",
    p4_for:"Для кого: кому нужен регулярный контент, а не разовые посты.", p4_does:"Задача: пайплайн от темы до черновика Shorts / поста.", p4_f1:"Тема → сценарий", p4_f2:"Текст / озвучка (по схеме)", p4_f3:"Черновик под канал", p4_access:"Доступ: настройка пайплайна под ваш формат.",
    product_cta:"Спросить в Telegram",
    process_tag:"PROCESS", process_title:"Как проходит работа", process_lead:"Прозрачный маршрут от сообщения до рабочей схемы.",
    pr1_t:"Задача", pr1_d:"Пишете в Telegram, что болит: заявки, ответы, контент, рутина.",
    pr2_t:"Разбор", pr2_d:"Уточняю каналы, объём и ограничения. Без лишней бюрократии.",
    pr3_t:"Предложение", pr3_d:"Схема автоматизации, состав работ и ориентир по сроку и цене.",
    pr4_t:"Сборка", pr4_d:"Делаю бота / агента / пайплайн, подключаю ваши сервисы.",
    pr5_t:"Тест и передача", pr5_d:"Проверяем на реальных сценариях, передаю доступы и краткую инструкцию.",
    jv_title:"JARVIS — командная консоль", jv_lead:"Интерактивный HUD-прототип: статусы, цикл обработки сообщения, визуальный каркас будущего агента.",
    bot_demo_title:"Цикл обработки сообщения", bs1:"Сообщение", bs2:"Разбор", bs3:"Действие", bs4:"Ответ",
    geo_tag:"ALSO · GEORGIA", geo_title:"Также помогаю с релокацией и авто", geo_lead:"Отдельное направление для тех, кто в Грузии или переезжает. Не смешиваю с AI-услугами в один список.",
    geo1_t:"Легализация", geo1_d:"ВНЖ, документы, сопровождение по процессу.", geo2_t:"ИП и компания", geo2_d:"Регистрация бизнеса и базовая структура.", geo3_t:"Авто под ключ", geo3_d:"Подбор, проверка, оформление, доставка в Грузию.",
    auto_s1:"Звонок / TG", auto_s1s:"Бриф и бюджет", auto_s2:"Аукцион", auto_s2s:"Подбор и ставка", auto_s3:"Порт", auto_s3s:"Доставка и растаможка", auto_s4:"Клиент", auto_s4s:"Передача под ключ",
    auto_note:"США / Корея / Европа → Грузия. Сопровождение на каждом этапе.", geo_cta:"Написать про релокацию / авто",
    pricing_tag:"PRICING", pricing_title:"Ориентиры по цене", pricing_note:"Фикс — после короткого брифа. Без обещаний «гарантированного ROI».",
    price1_name:"Старт", price1_amount:"от 149 ₾", price1_desc:"Быстрый запуск бота или простой автоматизации.", price1_f1:"Telegram-бот или простой сценарий", price1_f2:"1 интеграция", price1_f3:"Документация и передача", price1_cta:"Обсудить Старт",
    price2_badge:"Частый выбор", price2_name:"Бизнес", price2_amount:"от 499 ₾", price2_desc:"AI-агент или связка процессов под одну задачу.", price2_f1:"Агент или multi-step сценарий", price2_f2:"До 3 интеграций", price2_f3:"2 недели поддержки", price2_cta:"Обсудить Бизнес",
    price3_name:"Под ключ", price3_amount:"от 1 199 ₾", price3_desc:"Система: несколько процессов, контент или офисная связка.", price3_f1:"Несколько сценариев / агентов", price3_f2:"Кастомные интеграции", price3_f3:"Месяц сопровождения", price3_cta:"Обсудить под ключ",
    cta_title:"Опишите задачу — предложу вариант автоматизации", cta_sub:"Без длинных брифов: напишите, что сейчас делается вручную — разберём и предложим схему.", cta_btn:"Написать в Telegram @alex_berik"
  },
  en: {
    nav_services:"Services", nav_products:"Products", nav_process:"Process", nav_pricing:"Pricing", nav_cta:"Describe your task →",
    hero_tag:"AI ENGINEERING & AUTOMATION · TBILISI",
    hero_h1:"I automate routine.<br><span class=\"accent\">I build AI</span> that handles leads, replies and content.",
    hero_sub:"Your business can run smarter and faster — without hiring a full team for every task.",
    hero_p1:"AI agents and virtual teammates", hero_p2:"Process automation and integrations", hero_p3:"Telegram bots and AI tools for the job",
    btn_telegram:"Describe your task on Telegram", btn_services:"What can be automated",
    promise_2h:"Reply within 2 hours", promise_24:"Available 24/7",
    services_tag:"SERVICES", services_title:"Problems I solve", services_lead:"Not the tech stack — the outcome: what the system does and what you need to start.",
    t1_label:"Leads", t1_title:"Leads reach the manager automatically", t1_problem:"Problem: leads from forms, ads and Telegram get lost or handled manually.", t1_solution:"Solution: qualify → Telegram alert → CRM record.", t1_s1:"Forms / ads / bot", t1_s2:"Qualification rules", t1_s3:"Alerts and CRM handoff",
    t2_label:"Support", t2_title:"Answers to common questions 24/7", t2_problem:"Problem: the same questions in chat and email eat team time.", t2_solution:"Solution: knowledge-base bot + human escalation when needed.", t2_s1:"Telegram bot or widget", t2_s2:"Knowledge base / FAQ", t2_s3:"Handoff for hard cases",
    t3_label:"Content", t3_title:"Content and Shorts on a pipeline", t3_problem:"Problem: content depends on when we have time.", t3_solution:"Solution: topic → script → voice/text → draft for publishing.", t3_s1:"Scripts and templates", t3_s2:"Generation and assembly", t3_s3:"Drafts for your channels",
    t4_label:"Office", t4_title:"Inbox and routine without manual sorting", t4_problem:"Problem: inbox, sheets and repeat tasks take half the day.", t4_solution:"Solution: triage → reply drafts → update sheets / CRM.", t4_s1:"Mail / sheets / CRM", t4_s2:"Rules and templates", t4_s3:"Control and escalation",
    t5_label:"Sales", t5_title:"Product cards and pricing without grind", t5_problem:"Problem: descriptions and prices updated by hand.", t5_solution:"Solution: SKU → card text → price orientation → publish draft.", t5_s1:"Card templates", t5_s2:"Price collection (as agreed)", t5_s3:"Export in your format",
    t6_label:"Career", t6_title:"Job search and first application", t6_problem:"Problem: hours spent browsing jobs and writing the same emails.", t6_solution:"Solution: match by profile → reply draft → status tracking.", t6_s1:"Profile and criteria", t6_s2:"Matches and drafts", t6_s3:"Status list",
    task_cta:"Discuss this task",
    products_tag:"PRODUCTS", products_title:"Products and prototypes", products_lead:"Only what actually exists. Status is honest — no invented metrics.",
    status_proto:"Prototype", status_work:"In development",
    p1_for:"For: people who spend hours browsing jobs manually.", p1_does:"Goal: match jobs to a profile and prepare the first reply.", p1_f1:"Resume / profile parse", p1_f2:"Job matching", p1_f3:"Application draft", p1_access:"Access: implementation discussion for your flow.",
    p2_for:"For: sellers and marketplaces with many product cards.", p2_does:"Goal: speed up product copy and price orientation.", p2_f1:"Card text generation", p2_f2:"Marketplace structure", p2_f3:"Publish draft", p2_access:"Access: pilot on your catalog on request.",
    p3_for:"For: teams with repeating office routine.", p3_does:"Goal: inbox triage, reply drafts, status updates.", p3_f1:"Inbox triage", p3_f2:"Reply drafts", p3_f3:"Sheets / CRM link", p3_access:"Access: built for your channels and rules.",
    p4_for:"For: those who need steady content, not one-off posts.", p4_does:"Goal: pipeline from topic to Shorts / post draft.", p4_f1:"Topic → script", p4_f2:"Text / voice (by scheme)", p4_f3:"Channel draft", p4_access:"Access: pipeline setup for your format.",
    product_cta:"Ask on Telegram",
    process_tag:"PROCESS", process_title:"How work goes", process_lead:"Clear path from a message to a working setup.",
    pr1_t:"Task", pr1_d:"You write on Telegram what hurts: leads, replies, content, routine.",
    pr2_t:"Review", pr2_d:"I clarify channels, volume and limits. No heavy bureaucracy.",
    pr3_t:"Proposal", pr3_d:"Automation scheme, scope, time and price range.",
    pr4_t:"Build", pr4_d:"I build the bot / agent / pipeline and connect your tools.",
    pr5_t:"Test & handoff", pr5_d:"We test real scenarios; you get access and a short guide.",
    jv_title:"JARVIS — command console", jv_lead:"Interactive HUD prototype: status, message cycle, visual shell of a future agent.",
    bot_demo_title:"Message handling cycle", bs1:"Message", bs2:"Parse", bs3:"Action", bs4:"Reply",
    geo_tag:"ALSO · GEORGIA", geo_title:"Also: relocation and cars", geo_lead:"A separate track for people in Georgia or moving here. Not mixed into the AI service list.",
    geo1_t:"Legalization", geo1_d:"Residence, documents, process support.", geo2_t:"Company setup", geo2_d:"Business registration and basic structure.", geo3_t:"Cars turnkey", geo3_d:"Selection, checks, paperwork, delivery to Georgia.",
    auto_s1:"Call / TG", auto_s1s:"Brief & budget", auto_s2:"Auction", auto_s2s:"Pick & bid", auto_s3:"Port", auto_s3s:"Delivery & customs", auto_s4:"Client", auto_s4s:"Keys handoff",
    auto_note:"USA / Korea / Europe → Georgia. Support at each step.", geo_cta:"Message about relocation / cars",
    pricing_tag:"PRICING", pricing_title:"Price range", pricing_note:"Fixed price after a short brief. No guaranteed ROI claims.",
    price1_name:"Start", price1_amount:"from 149 ₾", price1_desc:"Quick bot or simple automation launch.", price1_f1:"Telegram bot or simple flow", price1_f2:"1 integration", price1_f3:"Docs and handoff", price1_cta:"Discuss Start",
    price2_badge:"Popular", price2_name:"Business", price2_amount:"from 499 ₾", price2_desc:"AI agent or process chain for one job.", price2_f1:"Agent or multi-step flow", price2_f2:"Up to 3 integrations", price2_f3:"2 weeks support", price2_cta:"Discuss Business",
    price3_name:"Turnkey", price3_amount:"from 1,199 ₾", price3_desc:"System: several flows, content or office setup.", price3_f1:"Several flows / agents", price3_f2:"Custom integrations", price3_f3:"One month support", price3_cta:"Discuss turnkey",
    cta_title:"Describe the task — I'll propose an automation option", cta_sub:"No long briefs: write what is done by hand now — we'll map a scheme.", cta_btn:"Message on Telegram @alex_berik"
  },
  ka: { nav_services:"სერვისები", nav_products:"პროდუქტები", nav_process:"პროცესი", nav_pricing:"ფასები", nav_cta:"აღწერეთ ამოცანა →", hero_tag:"AI ENGINEERING & AUTOMATION · TBILISI", hero_h1:"ავტომატიზაციას ვაკეთებ რუტინაზე.<br><span class=\"accent\">ვაშენებ AI-ს</span>.", hero_sub:"ბიზნესი შეიძლება მუშაობდეს უფრო ჭკვიანურად.", hero_p1:"AI-აგენტები", hero_p2:"ავტომატიზაცია", hero_p3:"Telegram-ბოტები", btn_telegram:"აღწერეთ ამოცანა Telegram-ში", btn_services:"რა შეიძლება ავტომატიზდეს", promise_2h:"პასუხი 2 საათში", promise_24:"24/7", services_title:"ამოცანები", services_lead:"შედეგი, არა სტეკი.", task_cta:"განვიხილოთ", products_title:"პროდუქტები", status_proto:"პროტოტიპი", status_work:"შემუშავებაში", product_cta:"Telegram", process_title:"პროცესი", jv_title:"JARVIS", bot_demo_title:"ციკლი", bs1:"შეტყობინება", bs2:"გარჩევა", bs3:"მოქმედება", bs4:"პასუხი", geo_title:"რელოკაცია და ავტო", pricing_title:"ფასები", cta_title:"აღწერეთ ამოცანა", cta_btn:"Telegram @alex_berik" },
  ua: { nav_services:"Послуги", nav_products:"Продукти", nav_process:"Процес", nav_pricing:"Ціни", nav_cta:"Опишіть задачу →", hero_tag:"AI ENGINEERING & AUTOMATION · TBILISI", hero_h1:"Автоматизую рутину.<br><span class=\"accent\">Будую AI</span>, який бере заявки, відповіді та контент.", hero_sub:"Бізнес може працювати розумніше і швидше.", hero_p1:"AI-агенти", hero_p2:"Автоматизація процесів", hero_p3:"Telegram-боти", btn_telegram:"Опишіть задачу в Telegram", btn_services:"Що можна автоматизувати", promise_2h:"Відповідь протягом 2 годин", promise_24:"На зв'язку 24/7", services_title:"Які задачі закриваю", services_lead:"Не стек, а результат.", task_cta:"Обговорити задачу", products_title:"Продукти та прототипи", status_proto:"Прототип", status_work:"В розробці", product_cta:"Запитати в Telegram", process_title:"Як проходить робота", jv_title:"JARVIS", bot_demo_title:"Цикл", bs1:"Повідомлення", bs2:"Розбір", bs3:"Дія", bs4:"Відповідь", geo_title:"Релокація та авто", pricing_title:"Орієнтири", cta_title:"Опишіть задачу — запропоную варіант", cta_btn:"Telegram @alex_berik" }
};

function applyLang(lang) {
  const t = I18N[lang] || I18N.ru;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (t[k] != null) el.textContent = t[k]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.getAttribute('data-i18n-html'); if (t[k] != null) el.innerHTML = t[k]; });
  document.querySelectorAll('.langs button').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang') === lang));
  try { localStorage.setItem('magic_lang', lang); } catch (e) {}
  if (window.lucide) lucide.createIcons();
}
document.querySelectorAll('.langs button').forEach(btn => btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang'))));
try { const saved = localStorage.getItem('magic_lang'); if (saved && I18N[saved]) applyLang(saved); } catch (e) {}

const TERM_LINES = ['$ magic init --project ai-office', '→ loading agents…', '→ wiring telegram + crm…', '✓ agent online · waiting for brief'];
function typeTerminal() {
  const out = document.getElementById('term-out');
  if (!out) return;
  let lineIdx = 0, charIdx = 0;
  function tick() {
    if (lineIdx >= TERM_LINES.length) return;
    const line = TERM_LINES[lineIdx];
    out.textContent = TERM_LINES.slice(0, lineIdx).join('\n') + (lineIdx ? '\n' : '') + line.slice(0, charIdx);
    charIdx++;
    if (charIdx > line.length) { lineIdx++; charIdx = 0; setTimeout(tick, 400); }
    else setTimeout(tick, 26);
  }
  tick();
}
setTimeout(typeTerminal, 500);

const jvStatuses = ['SYSTEM ONLINE', 'SCANNING…', 'VOICE READY', 'AGENTS LINKED', 'SYSTEM ONLINE'];
let jvI = 0;
setInterval(() => { const el = document.getElementById('jv-status'); if (!el) return; jvI = (jvI + 1) % jvStatuses.length; el.textContent = jvStatuses[jvI]; }, 2200);

const BOT_LOGS = ['> user: «Нужен бот для заявок»', '> parse: intent=lead_bot · lang=ru', '> action: qualify + TG alert + CRM', '> reply: «Схема готова. Напишите в TG.»'];
let botStep = 0;
function runBotDemo() {
  const steps = document.querySelectorAll('.bot-step');
  const log = document.getElementById('bot-log');
  if (!steps.length || !log) return;
  steps.forEach((s, i) => s.classList.toggle('active', i === botStep));
  log.textContent = BOT_LOGS[botStep];
  botStep = (botStep + 1) % BOT_LOGS.length;
}
runBotDemo();
setInterval(runBotDemo, 2400);

const progress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  if (!progress) return;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
}, { passive: true });

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.glass-card, .task-card, .product-card, .process-step, .section-title, .auto-flow, .jarvis-stage, .bot-demo').forEach(el => {
    gsap.from(el, { opacity: 0, y: 22, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
}
