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
    const btn = document.getElementById('lang-btn');
    if (btn) btn.textContent = (dict[lang] || dict.ru).lang;
    localStorage.setItem('magic_lang', lang);
  }
  let lang = localStorage.getItem('magic_lang') || 'ru';
  applyLang(lang);
  const btn = document.getElementById('lang-btn');
  if (btn) btn.addEventListener('click', () => { lang = lang === 'ru' ? 'en' : 'ru'; applyLang(lang); });
})();
