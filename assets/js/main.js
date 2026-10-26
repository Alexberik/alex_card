(function () {
  const dict = {
    ru: { nav_ai: 'AI', nav_design: 'Design', nav_business: 'Business', nav_auto: 'Auto', cta_tg: 'Написать в Telegram', lang: 'EN', footer_note: 'Тбилиси / remote · AI, дизайн, релокация, авто' },
    en: { nav_ai: 'AI', nav_design: 'Design', nav_business: 'Business', nav_auto: 'Auto', cta_tg: 'Message on Telegram', lang: 'RU', footer_note: 'Tbilisi / remote · AI, design, relocation, auto' }
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

  /* SVG social icons — replace emoji / text glyphs */
  const ICONS = {
    whatsapp: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.3 17.6L2 22l4.5-1.2A11 11 0 1 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.7.7.7-2.6-.2-.3A9 9 0 1 1 12 20.5zm5-6.7c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.6-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.9 3.4.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8-1.55 7.3c-.12.53-.43.66-.87.41l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.49.24l.17-2.43 4.45-4.02c.19-.17-.04-.27-.3-.1l-5.5 3.46-2.37-.74c-.52-.16-.53-.52.11-.77l9.26-3.57c.43-.16.81.1.67.67z"/></svg>',
    email: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M23 12s0-3.4-.4-5c-.2-1.1-1.1-1.9-2.1-2.1C18.7 4.4 12 4.4 12 4.4s-6.7 0-8.5.5c-1 .2-1.9 1-2.1 2.1C1 8.6 1 12 1 12s0 3.4.4 5c.2 1.1 1.1 1.9 2.1 2.1 1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5c1-.2 1.9-1 2.1-2.1.4-1.6.4-5 .4-5zM9.8 15.5v-7l6.3 3.5-6.3 3.5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V23h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V23h-4V8.5z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M14 8.2h2.6V5h-2.6C11.8 5 10 6.8 10 9.2V11H8v3.2h2V23h3.5v-8.8h2.6l.5-3.2H13.5V9.2c0-.6.4-1 1-1z"/></svg>'
  };
  function detectIcon(a) {
    const href = (a.getAttribute('href') || '').toLowerCase();
    const title = (a.getAttribute('title') || a.getAttribute('aria-label') || '').toLowerCase();
    if (href.includes('wa.me') || href.includes('whatsapp') || title.includes('whatsapp')) return 'whatsapp';
    if (href.includes('t.me') || href.includes('telegram') || title.includes('telegram')) return 'telegram';
    if (href.startsWith('mailto:') || title.includes('email') || title.includes('mail')) return 'email';
    if (href.includes('instagram') || title.includes('instagram')) return 'instagram';
    if (href.includes('youtube') || title.includes('youtube')) return 'youtube';
    if (href.includes('linkedin') || title.includes('linkedin')) return 'linkedin';
    if (href.includes('facebook') || title.includes('facebook')) return 'facebook';
    return null;
  }
  document.querySelectorAll('a.social').forEach((a) => {
    if (a.querySelector('svg')) return;
    const key = detectIcon(a);
    if (key && ICONS[key]) a.innerHTML = ICONS[key];
  });
})();
