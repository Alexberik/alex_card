(function () {
  const dict = {
    ru: { nav_ai: 'AI', nav_design: 'Design', nav_business: 'Business', nav_auto: 'Auto', cta_tg: 'Написать в Telegram', lang: 'EN', footer_note: 'Research & delivery · Не является юридической или инвестиционной консультацией' },
    en: { nav_ai: 'AI', nav_design: 'Design', nav_business: 'Business', nav_auto: 'Auto', cta_tg: 'Message on Telegram', lang: 'RU', footer_note: 'Research & delivery · Not legal or investment advice' }
  };
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const pack = dict[lang] || dict.ru;
      if (pack[key]) el.textContent = pack[key];
    });
    document.querySelectorAll('[data-show]').forEach((el) => {
      el.hidden = el.getAttribute('data-show') !== lang;
    });
    const code = document.querySelector('#lang-btn .lang-code');
    if (code) code.textContent = (dict[lang] || dict.ru).lang;
    try { localStorage.setItem('magic_lang', lang); } catch (_) {}
  }
  let lang = 'ru';
  try { lang = localStorage.getItem('magic_lang') || 'ru'; } catch (_) {}
  applyLang(lang);
  const btn = document.getElementById('lang-btn');
  if (btn) btn.addEventListener('click', () => { lang = lang === 'ru' ? 'en' : 'ru'; applyLang(lang); });
  const ambient = document.querySelector('.ambient');
  if (ambient) {
    ambient.innerHTML = '';
    ['aurora-a', 'aurora-b', 'aurora-c'].forEach((cls) => {
      const d = document.createElement('div');
      d.className = 'aurora ' + cls;
      ambient.appendChild(d);
    });
  }
  document.body.appendChild(Object.assign(document.createElement('div'), { className: 'vignette' }));
  const spot = Object.assign(document.createElement('div'), { className: 'spotlight' });
  document.body.appendChild(spot);
  let raf = 0, mx = innerWidth / 2, my = innerHeight / 3;
  function moveSpot() { spot.style.transform = 'translate(' + mx + 'px,' + my + 'px)'; raf = 0; }
  window.addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(moveSpot); }, { passive: true });
  document.querySelectorAll('.portal').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
})();
