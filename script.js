// Load last known-good script, then soft-patch MediaAIFarm case + terminal fixed-height scroll
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/Alexberik/alex_card@a7063c657609a35e37e94b8f4f1961c7575dcda5/script.js';
  s.onload = function () {
    try {
      // --- CASE_LINKS: add MediaAIFarm ---
      if (typeof CASE_LINKS !== 'undefined') {
        CASE_LINKS[8] = { url: 'https://t.me/mediaaifarmbot', labelKey: 'modal_link' };
      }

      // --- i18n: add c8 for all langs ---
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

        // Update terminal project list to include MediaAIFarm
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

      // Re-apply language so new strings show up
      if (typeof applyLang === 'function' && typeof currentLang !== 'undefined') {
        applyLang(currentLang);
      }

      // --- Terminal: keep fixed height, scroll lines up ---
      var body = document.getElementById('term-body');
      if (body) {
        body.style.height = '230px';
        body.style.minHeight = '230px';
        body.style.maxHeight = '230px';
        body.style.overflowY = 'auto';
        body.style.scrollbarWidth = 'none';
      }

      // Soft-patch tilt (already in CSS)
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

      // Observe terminal for new lines and scroll to bottom
      var termInteractive = document.getElementById('term-interactive');
      if (termInteractive && body) {
        var obs = new MutationObserver(function () {
          body.scrollTop = body.scrollHeight;
        });
        obs.observe(termInteractive, { childList: true, subtree: true, characterData: true });
      }

      // Restart terminal so updated project list appears
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
