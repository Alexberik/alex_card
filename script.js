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
    nav_services:"Услуги", nav_wf:"Workflows", nav_auto:"Авто", nav_cases:"Кейсы", nav_pricing:"Цены", nav_cta:"Написать →",
    hero_tag:"AI & AUTOMATION · TBILISI",
    hero_h1:"Автоматизирую бизнес.<br><span class=\"accent\">Строю AI</span>, который работает вместо отдела.",
    hero_sub:"Telegram-боты · AI-агенты · n8n/Make · Media Farm · AI-Office · Авто под ключ",
    btn_telegram:"Написать в Telegram", btn_wf:"Готовые workflows",
    promise_2h:"Ответ в течение 2 часов", promise_24:"На связи 24/7",
    services_tag:"SERVICES", services_title:"Что делаю", services_lead:"Главный фокус — AI и автоматизация. Остальное — в том же контакте.",
    s1_title:"AI & Автоматизация", s1_desc:"Агенты, боты и пайплайны, которые закрывают рутину.",
    s1_f1:"AI-агенты и multi-agent", s1_f2:"Telegram-боты под ключ", s1_f3:"n8n / Make / кастом", s1_f4:"API, CRM, маркетплейсы",
    e1_title:"Легализация", e1_desc:"ВНЖ, документы, сопровождение.", e2_title:"ИП и компания", e2_desc:"Регистрация бизнеса.",
    a1_title:"Авто под ключ", a1_desc:"Подбор, проверка, оформление.", smm_title:"SMM / Контент", smm_desc:"Контент-пайплайны и Shorts.",
    wf_tag:"READY WORKFLOWS", wf_title:"Готовые решения", wf_lead:"Шаблоны n8n / Make — подключаем и запускаем под вашу задачу.",
    wf1_title:"Контент → Shorts", wf1_desc:"Тема → сценарий → озвучка → монтаж → публикация.",
    wf2_title:"Входящие → ответ", wf2_desc:"Почта/TG → triage → черновик → CRM → эскалация.",
    wf3_title:"Вакансии → отклик", wf3_desc:"Поиск → матч резюме → письмо → трекинг статусов.",
    wf4_title:"Карточка → цена", wf4_desc:"Товар → описание → цены конкурентов → публикация.",
    wf5_title:"FAQ-бот 24/7", wf5_desc:"База знаний → ответы → эскалация человеку.",
    wf6_title:"Лид → менеджер", wf6_desc:"Форма/реклама → квалификация → TG-алерт → CRM.",
    jv_title:"JARVIS — командная консоль", jv_lead:"Holographic HUD в стиле Iron Man: статусы, сканирование, голосовые команды.",
    bot_demo_title:"Живой цикл бота", bs1:"Сообщение", bs2:"AI-разбор", bs3:"Действие", bs4:"Ответ",
    auto_tag:"AUTO", auto_title:"Авто под ключ", auto_lead:"Подбор, проверка, оформление — без сюрпризов.",
    auto_s1:"Звонок / TG", auto_s1s:"Бриф и бюджет", auto_s2:"Аукцион", auto_s2s:"Подбор и ставка",
    auto_s3:"Порт", auto_s3s:"Доставка и растаможка", auto_s4:"Клиент", auto_s4s:"Передача под ключ",
    auto_note:"США / Корея / Европа → Грузия. Сопровождение на каждом этапе.",
    cases_tag:"CASES", cases_title:"Кейсы и проекты",
    c1_result:"→ Поиск вакансий и первый отклик — без ручного перебора", c1_desc:"Telegram-бот с AI: резюме, вакансии, отклики.",
    c2_result:"→ Карточка товара и цены — без ручной рутины", c2_desc:"AI-агент для продаж: карточки, цены, конкуренты.",
    c3_result:"→ AI, автоматизация и релокация — один контакт", c3_desc:"AI, автоматизация и сопровождение в Грузии.",
    c4_result:"→ Офисная рутина уходит на агентов, не на людей", c4_desc:"Мульти-агентная система для рутины офиса.",
    c5_title:"Контент-ферма", c5_result:"→ Контент по пайплайну, не «когда руки дойдут»", c5_desc:"Контент-пайплайн под соцсети и Shorts.",
    c8_result:"→ От темы до Shorts — один пайплайн", c8_desc:"Тема → сценарий → озвучка → Shorts.",
    pricing_tag:"PRICING", pricing_title:"Пакеты и старт", pricing_note:"Ориентиры. Фикс — после короткого брифа.",
    price1_name:"Старт", price1_amount:"от 149 ₾", price1_desc:"Быстрый запуск бота или автоматизации.",
    price1_f1:"Telegram-бот или простой workflow", price1_f2:"1 интеграция", price1_f3:"Документация и передача", price1_cta:"Обсудить Старт",
    price2_badge:"Частый выбор", price2_name:"Бизнес", price2_amount:"от 499 ₾", price2_desc:"AI-агент или связка процессов под задачу.",
    price2_f1:"AI-агент / multi-step n8n·Make", price2_f2:"До 3 интеграций", price2_f3:"2 недели поддержки", price2_cta:"Обсудить Бизнес",
    price3_name:"Под ключ", price3_amount:"от 1 199 ₾", price3_desc:"Система: агенты, контент, автоматизация офиса.",
    price3_f1:"Мульти-агентная схема", price3_f2:"Кастомные интеграции", price3_f3:"Месяц сопровождения", price3_cta:"Обсудить под ключ",
    cta_title:"Готовы начать?", cta_sub:"Напишите — разберём задачу и предложим маршрут.", cta_btn:"Написать в Telegram"
  },
  en: {
    nav_services:"Services", nav_wf:"Workflows", nav_auto:"Cars", nav_cases:"Cases", nav_pricing:"Pricing", nav_cta:"Message →",
    hero_tag:"AI & AUTOMATION · TBILISI",
    hero_h1:"I automate business.<br><span class=\"accent\">I build AI</span> that works instead of a department.",
    hero_sub:"Telegram bots · AI agents · n8n/Make · Media Farm · AI-Office · Cars turnkey",
    btn_telegram:"Message on Telegram", btn_wf:"Ready workflows",
    promise_2h:"Reply within 2 hours", promise_24:"Available 24/7",
    services_tag:"SERVICES", services_title:"What I do", services_lead:"Primary focus — AI and automation.",
    s1_title:"AI & Automation", s1_desc:"Agents, bots and pipelines.", s1_f1:"AI agents", s1_f2:"Telegram bots", s1_f3:"n8n / Make", s1_f4:"API, CRM",
    e1_title:"Legalization", e1_desc:"Residence, documents.", e2_title:"Company setup", e2_desc:"Registration.",
    a1_title:"Cars turnkey", a1_desc:"Selection, paperwork.", smm_title:"SMM / Content", smm_desc:"Content pipelines.",
    wf_tag:"READY WORKFLOWS", wf_title:"Ready solutions", wf_lead:"n8n / Make templates.",
    wf1_title:"Content → Shorts", wf1_desc:"Topic → script → voice → Shorts.",
    wf2_title:"Inbox → reply", wf2_desc:"Mail/TG → triage → CRM.",
    wf3_title:"Jobs → apply", wf3_desc:"Search → match → letter.",
    wf4_title:"Card → price", wf4_desc:"SKU → copy → publish.",
    wf5_title:"FAQ bot 24/7", wf5_desc:"Knowledge base → answers.",
    wf6_title:"Lead → manager", wf6_desc:"Form → TG alert → CRM.",
    jv_title:"JARVIS — command console", jv_lead:"Iron Man style holographic HUD.",
    bot_demo_title:"Live bot cycle", bs1:"Message", bs2:"AI parse", bs3:"Action", bs4:"Reply",
    auto_tag:"AUTO", auto_title:"Cars turnkey", auto_lead:"Selection, inspection, paperwork.",
    auto_s1:"Call / TG", auto_s1s:"Brief", auto_s2:"Auction", auto_s2s:"Bid",
    auto_s3:"Port", auto_s3s:"Customs", auto_s4:"Client", auto_s4s:"Keys",
    auto_note:"USA / Korea / Europe → Georgia.",
    cases_tag:"CASES", cases_title:"Cases & projects",
    c1_result:"→ Job search without manual scrolling", c1_desc:"Telegram bot with AI.",
    c2_result:"→ Product card without manual grind", c2_desc:"AI agent for sales.",
    c3_result:"→ AI and relocation — one contact", c3_desc:"AI and support in Georgia.",
    c4_result:"→ Office routine on agents", c4_desc:"Multi-agent system.",
    c5_title:"Content farm", c5_result:"→ Content on a pipeline", c5_desc:"Content pipeline.",
    c8_result:"→ Topic to Shorts", c8_desc:"Topic → script → Shorts.",
    pricing_tag:"PRICING", pricing_title:"Packages", pricing_note:"Ballpark figures.",
    price1_name:"Start", price1_amount:"from 149 ₾", price1_desc:"Quick bot launch.",
    price1_f1:"Bot or workflow", price1_f2:"1 integration", price1_f3:"Docs", price1_cta:"Discuss Start",
    price2_badge:"Popular", price2_name:"Business", price2_amount:"from 499 ₾", price2_desc:"AI agent.",
    price2_f1:"AI / n8n·Make", price2_f2:"Up to 3 integrations", price2_f3:"2 weeks support", price2_cta:"Discuss Business",
    price3_name:"Turnkey", price3_amount:"from 1,199 ₾", price3_desc:"Full system.",
    price3_f1:"Multi-agent", price3_f2:"Custom", price3_f3:"1 month", price3_cta:"Discuss turnkey",
    cta_title:"Ready to start?", cta_sub:"Message me — we map the task.", cta_btn:"Message on Telegram"
  },
  ka: {
    nav_services:"სერვისები", nav_wf:"Workflows", nav_auto:"ავტო", nav_cases:"ქეისები", nav_pricing:"ფასები", nav_cta:"დაწერეთ →",
    hero_tag:"AI & AUTOMATION · TBILISI",
    hero_h1:"ავტომატიზაციას ვაკეთებ ბიზნესზე.<br><span class=\"accent\">ვაშენებ AI-ს</span>, რომელიც განყოფილების ნაცვლად მუშაობს.",
    hero_sub:"Telegram-ბოტები · AI-აგენტები · n8n/Make",
    btn_telegram:"დაწერეთ Telegram-ში", btn_wf:"მზა workflows",
    promise_2h:"პასუხი 2 საათში", promise_24:"24/7 კავშირზე",
    services_tag:"SERVICES", services_title:"რას ვაკეთებ", services_lead:"მთავარი ფოკუსი — AI.",
    s1_title:"AI & ავტომატიზაცია", s1_desc:"აგენტები და ბოტები.", s1_f1:"AI-აგენტები", s1_f2:"ბოტები", s1_f3:"n8n / Make", s1_f4:"API",
    e1_title:"ლეგალიზაცია", e1_desc:"ბინადრობა.", e2_title:"კომპანია", e2_desc:"რეგისტრაცია.",
    a1_title:"ავტო", a1_desc:"შერჩევა.", smm_title:"SMM", smm_desc:"კონტენტი.",
    wf_tag:"READY WORKFLOWS", wf_title:"მზა გადაწყვეტილებები", wf_lead:"n8n / Make შაბლონები.",
    wf1_title:"კონტენტი → Shorts", wf1_desc:"თემა → Shorts.", wf2_title:"Inbox → პასუხი", wf2_desc:"ფოსტა → CRM.",
    wf3_title:"ვაკანსიები", wf3_desc:"ძიება → წერილი.", wf4_title:"ბარათი → ფასი", wf4_desc:"SKU → ფასები.",
    wf5_title:"FAQ-ბოტი", wf5_desc:"ცოდნის ბაზა.", wf6_title:"ლიდი", wf6_desc:"ფორმა → CRM.",
    jv_title:"JARVIS", jv_lead:"Iron Man HUD.", bot_demo_title:"ბოტის ციკლი", bs1:"შეტყობინება", bs2:"AI", bs3:"მოქმედება", bs4:"პასუხი",
    auto_tag:"AUTO", auto_title:"ავტო სრულად", auto_lead:"შერჩევა.", auto_s1:"ზარი", auto_s1s:"ბრიფი", auto_s2:"აუქციონი", auto_s2s:"ფსონი", auto_s3:"პორტი", auto_s3s:"განბაჟება", auto_s4:"კლიენტი", auto_s4s:"გადაცემა", auto_note:"აშშ → საქართველო.",
    cases_tag:"CASES", cases_title:"ქეისები", c1_result:"→ ვაკანსიები", c1_desc:"ბოტი.", c2_result:"→ ბარათი", c2_desc:"AI.", c3_result:"→ რელოკაცია", c3_desc:"AI.", c4_result:"→ ოფისი", c4_desc:"აგენტები.", c5_title:"კონტენტი", c5_result:"→ მილი", c5_desc:"კონტენტი.", c8_result:"→ Shorts", c8_desc:"Shorts.",
    pricing_tag:"PRICING", pricing_title:"პაკეტები", pricing_note:"ორიენტირები.",
    price1_name:"Start", price1_amount:"149 ₾-დან", price1_desc:"სწრაფი გაშვება.", price1_f1:"ბოტი", price1_f2:"1 ინტეგრაცია", price1_f3:"დოკი", price1_cta:"განვიხილოთ",
    price2_badge:"პოპულარული", price2_name:"Business", price2_amount:"499 ₾-დან", price2_desc:"AI.", price2_f1:"n8n", price2_f2:"3 ინტეგრაცია", price2_f3:"2 კვირა", price2_cta:"განვიხილოთ",
    price3_name:"Turnkey", price3_amount:"1,199 ₾-დან", price3_desc:"სისტემა.", price3_f1:"მულტი", price3_f2:"კასტომი", price3_f3:"1 თვე", price3_cta:"განვიხილოთ",
    cta_title:"მზად ხართ?", cta_sub:"დამიწერეთ.", cta_btn:"დაწერეთ Telegram-ში"
  },
  ua: {
    nav_services:"Послуги", nav_wf:"Workflows", nav_auto:"Авто", nav_cases:"Кейси", nav_pricing:"Ціни", nav_cta:"Написати →",
    hero_tag:"AI & AUTOMATION · TBILISI",
    hero_h1:"Автоматизую бізнес.<br><span class=\"accent\">Будую AI</span>, який працює замість відділу.",
    hero_sub:"Telegram-боти · AI-агенти · n8n/Make",
    btn_telegram:"Написати в Telegram", btn_wf:"Готові workflows",
    promise_2h:"Відповідь протягом 2 годин", promise_24:"На зв'язку 24/7",
    services_tag:"SERVICES", services_title:"Що роблю", services_lead:"Головний фокус — AI.",
    s1_title:"AI & Автоматизація", s1_desc:"Агенти і боти.", s1_f1:"AI-агенти", s1_f2:"Боти", s1_f3:"n8n / Make", s1_f4:"API",
    e1_title:"Легалізація", e1_desc:"ВНЖ.", e2_title:"ФОП", e2_desc:"Реєстрація.", a1_title:"Авто", a1_desc:"Підбір.", smm_title:"SMM", smm_desc:"Контент.",
    wf_tag:"READY WORKFLOWS", wf_title:"Готові рішення", wf_lead:"Шаблони n8n / Make.",
    wf1_title:"Контент → Shorts", wf1_desc:"Тема → Shorts.", wf2_title:"Вхідні → відповідь", wf2_desc:"Пошта → CRM.",
    wf3_title:"Вакансії", wf3_desc:"Пошук → лист.", wf4_title:"Картка → ціна", wf4_desc:"SKU → ціни.",
    wf5_title:"FAQ-бот", wf5_desc:"База знань.", wf6_title:"Лід", wf6_desc:"Форма → CRM.",
    jv_title:"JARVIS", jv_lead:"HUD Iron Man.", bot_demo_title:"Цикл бота", bs1:"Повідомлення", bs2:"AI", bs3:"Дія", bs4:"Відповідь",
    auto_tag:"AUTO", auto_title:"Авто під ключ", auto_lead:"Підбір.", auto_s1:"Дзвінок", auto_s1s:"Бриф", auto_s2:"Аукціон", auto_s2s:"Ставка", auto_s3:"Порт", auto_s3s:"Розмитнення", auto_s4:"Клієнт", auto_s4s:"Передача", auto_note:"США → Грузія.",
    cases_tag:"CASES", cases_title:"Кейси", c1_result:"→ Вакансії", c1_desc:"Бот.", c2_result:"→ Картка", c2_desc:"AI.", c3_result:"→ Релокація", c3_desc:"AI.", c4_result:"→ Офіс", c4_desc:"Агенти.", c5_title:"Контент", c5_result:"→ Пайплайн", c5_desc:"Контент.", c8_result:"→ Shorts", c8_desc:"Shorts.",
    pricing_tag:"PRICING", pricing_title:"Пакети", pricing_note:"Орієнтири.",
    price1_name:"Старт", price1_amount:"від 149 ₾", price1_desc:"Швидкий запуск.", price1_f1:"Бот", price1_f2:"1 інтеграція", price1_f3:"Документація", price1_cta:"Обговорити",
    price2_badge:"Популярний", price2_name:"Бізнес", price2_amount:"від 499 ₾", price2_desc:"AI.", price2_f1:"n8n", price2_f2:"3 інтеграції", price2_f3:"2 тижні", price2_cta:"Обговорити",
    price3_name:"Під ключ", price3_amount:"від 1 199 ₾", price3_desc:"Система.", price3_f1:"Мульти", price3_f2:"Кастом", price3_f3:"Місяць", price3_cta:"Обговорити",
    cta_title:"Готові почати?", cta_sub:"Напишіть.", cta_btn:"Написати в Telegram"
  }
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

const TERM_LINES = ['$ magic init --project ai-office', '→ loading agents…', '→ wiring n8n + telegram…', '✓ agent online · waiting for brief'];
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

const BOT_LOGS = ['> user: «Нужен бот для заявок»', '> parse: intent=lead_bot · lang=ru', '> action: create n8n draft + TG alert', '> reply: «Схема готова. Отправил в TG.»'];
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
  gsap.utils.toArray('.glass-card, .wf-card, .section-title, .auto-flow, .jarvis-stage, .bot-demo').forEach(el => {
    gsap.from(el, { opacity: 0, y: 22, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
}
