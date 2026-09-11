// Load last known-good script, then soft-patch MediaAIFarm + terminal + visit counter
(function () {
  // --- Visit counter fix (runs immediately; base script looks for wrong id) ---
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
      // Beam: ensure spread + fade (base script already adds .animate)
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

      if (typeof i18n !== 'undefined') {
        if (i18n.ru) {
          i18n.ru.c8_desc = 'Telegram-бот: тема → сценарий (Gemini) → озвучка → субтитры → Shorts. Одобрение и публикация на YouTube в один клик.';
          i18n.ru.c8_result = '→ Shorts готовы за минуты, без монтажа';
          i18n.ru.c8_problem = 'Ручной монтаж Shorts отнимает часы: сценарий, озвучка, субтитры, выгрузка.';
          i18n.ru.c8_solution = 'Бот сам пишет сценарий по трендам, озвучивает, клеит видео с субтитрами и анимированным персонажем, заливает на YouTube после одобрения.';
          i18n.ru.c8_stack = 'Python · aiogram 3 · Gemini · edge-tts · FFmpeg · YouTube API';
        }
        if (i18n.en) {
          i18n.en.c8_desc = 'Telegram bot: topic → Gemini script → voiceover → subtitles → Shorts. Approve and publish to YouTube in one click.';
          i18n.en.c8_result = '→ Shorts ready in minutes, no editing';
          i18n.en.c8_problem = 'Manual Shorts production eats hours: script, voice, subtitles, upload.';
          i18n.en.c8_solution = 'The bot writes a trend-based script, narrates it, composites video with subtitles and an animated mascot, then uploads to YouTube after approval.';
          i18n.en.c8_stack = 'Python · aiogram 3 · Gemini · edge-tts · FFmpeg · YouTube API';
        }
        if (i18n.ka) {
          i18n.ka.c8_desc = 'Telegram-ბოტი: თემა → Gemini სცენარი → გახმოვანება → სუბტიტრები → Shorts. YouTube-ზე გამოქვეყნება ერთი დაწკაპუნებით.';
          i18n.ka.c8_result = '→ Shorts მზადაა წუთებში, მონტაჟის გარეშე';
          i18n.ka.c8_problem = 'Shorts-ის ხელით მონტაჟი საათებს იღებს: სცენარი, ხმა, სუბტიტრები, ატვირთვა.';
          i18n.ka.c8_solution = 'ბოტი წერს ტრენდულ სცენარს, ახმოვანებს, აწყობს ვიდეოს სუბტიტრებით და ანიმაციური პერსონაჟით, შემდეგ YouTube-ზე ტვირთავს დამტკიცების შემდეგ.';
          i18n.ka.c8_stack = 'Python · aiogram 3 · Gemini · edge-tts · FFmpeg · YouTube API';
        }
        if (i18n.ua) {
          i18n.ua.c8_desc = 'Telegram-бот: тема → сценарій (Gemini) → озвучка → субтитри → Shorts. Схвалення і публікація на YouTube в один клік.';
          i18n.ua.c8_result = '→ Shorts готові за хвилини, без монтажу';
          i18n.ua.c8_problem = 'Ручний монтаж Shorts забирає години: сценарій, озвучка, субтитри, вивантаження.';
          i18n.ua.c8_solution = 'Бот сам пише сценарій за трендами, озвучує, збирає відео з субтитрами та анімованим персонажем, заливає на YouTube після схвалення.';
          i18n.ua.c8_stack = 'Python · aiogram 3 · Gemini · edge-tts · FFmpeg · YouTube API';
        }

        // s7 Business design
        if (i18n.ru) {
          i18n.ru.s7_title = 'Дизайн бизнеса от А до Я';
          i18n.ru.s7_desc = 'Внешнее оформление офиса, магазина, СТО: проект → печать → монтаж.';
        }
        if (i18n.en) {
          i18n.en.s7_title = 'Business design A to Z';
          i18n.en.s7_desc = 'Exterior design for office, shop, service station: concept → print → install.';
        }
        if (i18n.ka) {
          i18n.ka.s7_title = 'ბიზნეს დიზაინი A-დან Z-მდე';
          i18n.ka.s7_desc = 'ოფისის, მაღაზიის, სერვისის გარე გაფორმება: პროექტი → ბეჭდვა → მონტაჟი.';
        }
        if (i18n.ua) {
          i18n.ua.s7_title = 'Дизайн бізнесу від А до Я';
          i18n.ua.s7_desc = 'Зовнішнє оформлення офісу, магазину, СТО: проєкт → друк → монтаж.';
        }

        ['ru','en','ka','ua'].forEach(function(lang) {
          if (i18n[lang] && Array.isArray(i18n[lang].term)) {
            i18n[lang].term = i18n[lang].term.map(function(line) {
              if (line.indexOf('JobHunterAI') !== -1 && line.indexOf('MediaAIFarm') === -1) {
                return line.replace('MAGIC · AI-Office', 'MediaAIFarm · AI-Office')
                           .replace('SellAI · MAGIC', 'SellAI · MediaAIFarm');
              }
              return line;
            });
          }
        });
      }

      if (typeof applyLang === 'function' && typeof currentLang !== 'undefined') {
        applyLang(currentLang);
      }

      var body = document.getElementById('term-body');
      if (body) {
        body.style.height = '230px';
        body.style.minHeight = '230px';
        body.style.maxHeight = '230px';
        body.style.overflowY = 'auto';
        body.style.scrollbarWidth = 'none';
      }

      document.querySelectorAll('[data-tilt]').forEach(function (card) {
        card.onmousemove = null;
        card.onmouseleave = null;
        card.addEventListener('mouseenter', function () {
          card.style.transform = 'translateY(-3px)';
        });
        card.addEventListener('mouseleave', function () {
          card.style.transform = 'translateY(0)';
        });
      });

      var termInteractive = document.getElementById('term-interactive');
      if (termInteractive && body) {
        var obs = new MutationObserver(function () {
          body.scrollTop = body.scrollHeight;
        });
        obs.observe(termInteractive, { childList: true, subtree: true, characterData: true });
      }

      if (window.lucide) lucide.createIcons();

      if (typeof restartTerminal === 'function') {
        setTimeout(restartTerminal, 100);
      }
    } catch (e) {
      console.error('Patch error:', e);
    }
  };
  s.onerror = function () {
    console.error('Failed to load base script from CDN');
  };
  document.head.appendChild(s);
})();
