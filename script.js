// Load last known-good script, then soft-patch MediaAIFarm + terminal + visit counter
(function () {
  (function initVisitCounter() {
    var COUNTER_KEY = 'alexberik_alexcard_visits';
    var numEl = document.getElementById('visit-num') || document.getElementById('visit-counter-num');
    if (!numEl) return;
    function animateCount(target) {
      var start = 0;
      var duration = 900;
      var startTime = performance.now();
      function step(now) {
        var p = Math.min((now - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        numEl.textContent = Math.round(eased * target).toLocaleString('ru-RU');
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    fetch('https://countapi.mileshilliard.com/api/v1/hit/' + COUNTER_KEY)
      .then(function (r) { return r.json(); })
      .then(function (data) { animateCount(parseInt(data.value, 10) || 0); })
      .catch(function () { numEl.textContent = '—'; });
  })();

  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/Alexberik/alex_card@a7063c657609a35e37e94b8f4f1961c7575dcda5/script.js';
  s.onload = function () {
    try {
      (function fixBeam(){
        var beam = document.getElementById('beam-reveal');
        if (!beam) return;
        if (!beam.classList.contains('animate')) beam.classList.add('animate');
        setTimeout(function(){ beam.classList.add('fade'); }, 900);
        setTimeout(function(){ if (beam && beam.parentNode) beam.parentNode.removeChild(beam); }, 1400);
      })();
      if (typeof CASE_LINKS !== 'undefined') {
        CASE_LINKS[8] = { url: 'https://t.me/mediaaifarmbot', labelKey: 'modal_link' };
      }
      if (typeof applyLang === 'function' && typeof currentLang !== 'undefined') {
        applyLang(currentLang);
      }
      if (window.lucide) lucide.createIcons();
      if (typeof restartTerminal === 'function') setTimeout(restartTerminal, 100);
    } catch (e) { console.error('Patch error:', e); }
  };
  document.head.appendChild(s);
})();

/* Contact form: inject UI + Telegram submit + GA */
(function () {
  function injectContactForm() {
    var card = document.querySelector('#contact .contact-card');
    if (!card || card.querySelector('#contact-form')) return;
    var desc = card.querySelector('[data-i18n="contact_desc"]');
    if (desc) desc.textContent = 'Оставьте заявку — отвечу в Telegram или по контакту.';
    var oldBtn = card.querySelector('a.btn-primary');
    var formHtml = ''
      + '<form id="contact-form" class="contact-form" novalidate>'
      + '<div class="form-row">'
      + '<label class="form-field"><span data-i18n="form_name">Имя</span>'
      + '<input type="text" name="name" id="cf-name" required autocomplete="name" placeholder="Как к вам обращаться"></label>'
      + '<label class="form-field"><span data-i18n="form_contact">Telegram / телефон / email</span>'
      + '<input type="text" name="contact" id="cf-contact" required autocomplete="tel" placeholder="@username или +995..."></label>'
      + '</div>'
      + '<label class="form-field"><span data-i18n="form_message">Сообщение</span>'
      + '<textarea name="message" id="cf-message" rows="4" required placeholder="Кратко опишите задачу"></textarea></label>'
      + '<div class="form-actions">'
      + '<button type="submit" class="btn btn-primary" id="cf-submit"><i data-lucide="send"></i> <span data-i18n="form_submit">Отправить заявку</span></button>'
      + '<a href="https://t.me/alex_berik" target="_blank" rel="noopener" class="btn btn-secondary"><i data-lucide="message-circle"></i> <span data-i18n="btn_telegram">Написать в Telegram</span></a>'
      + '</div>'
      + '<p class="form-status" id="cf-status" role="status" aria-live="polite"></p>'
      + '</form>';
    if (oldBtn) { oldBtn.insertAdjacentHTML('beforebegin', formHtml); oldBtn.remove(); }
    else {
      var counter = card.querySelector('#visit-counter');
      if (counter) counter.insertAdjacentHTML('beforebegin', formHtml);
      else card.insertAdjacentHTML('beforeend', formHtml);
    }
    if (window.lucide) try { lucide.createIcons(); } catch (e) {}
    var form = document.getElementById('contact-form');
    var statusEl = document.getElementById('cf-status');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = ((document.getElementById('cf-name') || {}).value || '').trim();
      var contact = ((document.getElementById('cf-contact') || {}).value || '').trim();
      var message = ((document.getElementById('cf-message') || {}).value || '').trim();
      if (!name || !contact || !message) {
        if (statusEl) { statusEl.className = 'form-status error'; statusEl.textContent = 'Заполните все поля'; }
        return;
      }
      var text = 'Заявка с сайта MAGIC\nИмя: ' + name + '\nКонтакт: ' + contact + '\n\n' + message;
      var url = 'https://t.me/alex_berik?text=' + encodeURIComponent(text);
      if (typeof gtag === 'function') { try { gtag('event', 'contact_form_submit', { method: 'telegram' }); } catch (err) {} }
      if (statusEl) { statusEl.className = 'form-status ok'; statusEl.textContent = 'Открываю Telegram…'; }
      window.open(url, '_blank', 'noopener');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectContactForm);
  else injectContactForm();
  setTimeout(injectContactForm, 800);
})();

/* Load growth blocks */
(function(){var s=document.createElement('script');s.src='growth.js?v=2';s.defer=true;document.head.appendChild(s);})();
