(function () {
  const dict = {
    ru: {
      nav_services: 'Услуги', nav_work: 'Работы', nav_process: 'Процесс', nav_contact: 'Контакты',
      nav_ai: 'AI', nav_design: 'Дизайн', nav_business: 'Бизнес', nav_auto: 'Авто',
      cta_tg: 'Обсудить проект ↗', lang: 'EN', footer_note: 'Креатив, AI и цифровые решения.',
      title: 'MAGIC Studio — Креатив, AI и цифровые решения',
      description: 'MAGIC Studio объединяет креативный дизайн, AI-контент и цифровые решения: брендинг, рекламные материалы, AI-автоматизация и цифровые продукты.'
    },
    en: {
      nav_services: 'Services', nav_work: 'Work', nav_process: 'Process', nav_contact: 'Contact',
      nav_ai: 'AI', nav_design: 'Design', nav_business: 'Business', nav_auto: 'Auto',
      cta_tg: 'Discuss a project ↗', lang: 'RU', footer_note: 'Creative, AI and digital solutions.',
      title: 'MAGIC Studio — Creativity, Engineered.',
      description: 'MAGIC Studio combines creative design, AI-powered content and digital solutions: branding, campaign assets, AI automation and digital products.'
    }
  };

  function applyLang(lang) {
    const active = dict[lang] ? lang : 'ru';
    document.documentElement.lang = active;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const pack = dict[active];
      if (pack[key]) el.textContent = pack[key];
    });
    document.querySelectorAll('[data-show]').forEach((el) => {
      el.hidden = el.getAttribute('data-show') !== active;
    });
    const btn = document.getElementById('lang-btn');
    if (btn) {
      btn.textContent = dict[active].lang;
      btn.setAttribute('aria-label', active === 'ru' ? 'Switch language to English' : 'Переключить язык на русский');
    }
    document.title = dict[active].title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', dict[active].description);
    try { localStorage.setItem('magic_lang', active); } catch (_) {}
  }

  let lang = 'ru';
  try { lang = localStorage.getItem('magic_lang') || 'ru'; } catch (_) {}
  applyLang(lang);
  const btn = document.getElementById('lang-btn');
  if (btn) btn.addEventListener('click', () => {
    lang = lang === 'ru' ? 'en' : 'ru';
    applyLang(lang);
  });

  const ambient = document.querySelector('.ambient');
  if (ambient) {
    ambient.innerHTML = '';
    ['aurora-a', 'aurora-b', 'aurora-c'].forEach((cls) => {
      const d = document.createElement('div');
      d.className = 'aurora ' + cls;
      ambient.appendChild(d);
    });
  }
  const vignette = document.createElement('div');
  vignette.className = 'vignette';
  document.body.appendChild(vignette);

  const spot = document.createElement('div');
  spot.className = 'spotlight';
  document.body.appendChild(spot);
  let raf = 0;
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 3;
  function moveSpot() {
    spot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
    raf = 0;
  }
  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!raf) raf = requestAnimationFrame(moveSpot);
  }, { passive: true });
})();