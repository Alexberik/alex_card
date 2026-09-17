/* MAGIC growth blocks: audience, pricing, quiz, promise */
(function () {
  function el(html) {
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstChild;
  }

  function insertBeforeContact(node) {
    var contact = document.getElementById('contact');
    if (!contact || !contact.parentNode) return false;
    contact.parentNode.insertBefore(node, contact);
    return true;
  }

  function buildAudience() {
    if (document.getElementById('audience')) return;
    var sec = el(
      '<section id="audience" class="cine-section">' +
      '<div class="section-tag reveal">FOR WHOM</div>' +
      '<h2 class="section-title">Для кого это работает</h2>' +
      '<div class="audience-grid">' +
      '<div class="glass-card audience-card"><i data-lucide="hotel" size="28" class="icon"></i><h3>Отели и апартаменты</h3><p>Заявки 24/7, бронирование, ответы на FAQ</p></div>' +
      '<div class="glass-card audience-card"><i data-lucide="stethoscope" size="28" class="icon"></i><h3>Клиники и салоны</h3><p>Запись на услугу, напоминания, квалификация</p></div>' +
      '<div class="glass-card audience-card"><i data-lucide="building-2" size="28" class="icon"></i><h3>Недвижимость и сервисы</h3><p>Лиды из Instagram/Telegram, follow-up</p></div>' +
      '<div class="glass-card audience-card"><i data-lucide="plane" size="28" class="icon"></i><h3>Экспаты и релоканты</h3><p>Легализация, жильё, ответы на типовые вопросы</p></div>' +
      '</div></section>'
    );
    insertBeforeContact(sec);
  }

  function buildPricing() {
    if (document.getElementById('pricing')) return;
    var sec = el(
      '<section id="pricing" class="cine-section">' +
      '<div class="section-tag reveal">PRICING</div>' +
      '<h2 class="section-title">Пакеты AI Employee</h2>' +
      '<p class="subgrid-note">Прозрачные цены в лари. Установка отдельно. Можно начать с малого.</p>' +
      '<div class="pricing-grid">' +
      '<div class="glass-card price-card">' +
      '<div class="price-name">AI Receptionist</div>' +
      '<div class="price-amount">от 249 ₾ <span>/ мес</span></div>' +
      '<p class="price-desc">Виртуальный ресепшн: отвечает на типовые вопросы и собирает заявки.</p>' +
      '<ul class="price-list">' +
      '<li>Telegram / сайт</li><li>RU · EN · KA</li><li>Сбор контакта</li><li>Передача менеджеру</li>' +
      '</ul>' +
      '<a href="https://t.me/alex_berik?text=' + encodeURIComponent('Интересует пакет AI Receptionist') + '" target="_blank" rel="noopener" class="btn btn-secondary">Выбрать</a>' +
      '</div>' +
      '<div class="glass-card price-card featured">' +
      '<div class="price-badge">Хит</div>' +
      '<div class="price-name">AI Employee</div>' +
      '<div class="price-amount">от 499 ₾ <span>/ мес</span></div>' +
      '<p class="price-desc">Полноценный AI-сотрудник: квалификация, запись, CRM, follow-up.</p>' +
      '<ul class="price-list">' +
      '<li>Instagram / TG / WhatsApp</li><li>Запись на услугу</li><li>Google Sheets / CRM</li><li>Напоминания клиентам</li>' +
      '</ul>' +
      '<a href="https://t.me/alex_berik?text=' + encodeURIComponent('Интересует пакет AI Employee') + '" target="_blank" rel="noopener" class="btn btn-primary">Выбрать</a>' +
      '</div>' +
      '<div class="glass-card price-card">' +
      '<div class="price-name">AI Business System</div>' +
      '<div class="price-amount">от 900 ₾ <span>/ мес</span></div>' +
      '<p class="price-desc">Связка каналов + автоматизация процессов под ваш бизнес.</p>' +
      '<ul class="price-list">' +
      '<li>Несколько каналов</li><li>Сценарии n8n / Make</li><li>Отчёты и аналитика</li><li>Приоритетная поддержка</li>' +
      '</ul>' +
      '<a href="https://t.me/alex_berik?text=' + encodeURIComponent('Интересует пакет AI Business System') + '" target="_blank" rel="noopener" class="btn btn-secondary">Выбрать</a>' +
      '</div>' +
      '</div></section>'
    );
    insertBeforeContact(sec);
  }

  function buildQuiz() {
    if (document.getElementById('quiz')) return;
    var sec = el(
      '<section id="quiz" class="cine-section">' +
      '<div class="section-tag reveal">QUIZ</div>' +
      '<h2 class="section-title">Какой бот вам нужен?</h2>' +
      '<p class="subgrid-note">3 коротких вопроса — и рекомендация пакета.</p>' +
      '<div class="glass-card quiz-box" id="quiz-box">' +
      '<div class="quiz-progress"><span class="quiz-dot on" data-d="0"></span><span class="quiz-dot" data-d="1"></span><span class="quiz-dot" data-d="2"></span></div>' +
      '<div class="quiz-step active" data-step="0">' +
      '<div class="quiz-q">1. Откуда приходят клиенты?</div>' +
      '<div class="quiz-options">' +
      '<button type="button" class="quiz-opt" data-v="tg">В основном Telegram / сайт</button>' +
      '<button type="button" class="quiz-opt" data-v="multi">Instagram + Telegram + WhatsApp</button>' +
      '<button type="button" class="quiz-opt" data-v="all">Много каналов и процессов</button>' +
      '</div></div>' +
      '<div class="quiz-step" data-step="1">' +
      '<div class="quiz-q">2. Что бот должен делать?</div>' +
      '<div class="quiz-options">' +
      '<button type="button" class="quiz-opt" data-v="reply">Отвечать на вопросы и собирать заявки</button>' +
      '<button type="button" class="quiz-opt" data-v="book">Записывать на услугу и напоминать</button>' +
      '<button type="button" class="quiz-opt" data-v="ops">Автоматизировать отдел / CRM / отчёты</button>' +
      '</div></div>' +
      '<div class="quiz-step" data-step="2">' +
      '<div class="quiz-q">3. Какой масштаб?</div>' +
      '<div class="quiz-options">' +
      '<button type="button" class="quiz-opt" data-v="small">Малый бизнес, старт</button>' +
      '<button type="button" class="quiz-opt" data-v="mid">Растущий поток заявок</button>' +
      '<button type="button" class="quiz-opt" data-v="big">Несколько точек / команд</button>' +
      '</div></div>' +
      '<div class="quiz-step" data-step="3">' +
      '<div class="quiz-result" id="quiz-result"></div>' +
      '</div></div></section>'
    );
    insertBeforeContact(sec);
    bindQuiz();
  }

  function bindQuiz() {
    var answers = [];
    var box = document.getElementById('quiz-box');
    if (!box || box.dataset.bound === '1') return;
    box.dataset.bound = '1';

    box.addEventListener('click', function (e) {
      var btn = e.target.closest('.quiz-opt');
      if (!btn) return;
      var stepEl = btn.closest('.quiz-step');
      var step = parseInt(stepEl.getAttribute('data-step'), 10);
      answers[step] = btn.getAttribute('data-v');
      stepEl.classList.remove('active');
      var next = box.querySelector('.quiz-step[data-step="' + (step + 1) + '"]');
      if (next) {
        next.classList.add('active');
        box.querySelectorAll('.quiz-dot').forEach(function (d) {
          d.classList.toggle('on', parseInt(d.getAttribute('data-d'), 10) <= step);
        });
      }
      if (step === 2) showResult(answers);
    });
  }

  function showResult(answers) {
    var score = { receptionist: 0, employee: 0, business: 0 };
    answers.forEach(function (v) {
      if (v === 'tg' || v === 'reply' || v === 'small') score.receptionist++;
      if (v === 'multi' || v === 'book' || v === 'mid') score.employee++;
      if (v === 'all' || v === 'ops' || v === 'big') score.business++;
    });
    var pack = 'AI Employee';
    var price = 'от 499 ₾/мес';
    var desc = 'Запись, квалификация и follow-up — оптимальный старт для растущего потока заявок.';
    if (score.business >= score.employee && score.business >= score.receptionist) {
      pack = 'AI Business System';
      price = 'от 900 ₾/мес';
      desc = 'Несколько каналов, сценарии и отчёты — когда нужен целый контур автоматизации.';
    } else if (score.receptionist > score.employee) {
      pack = 'AI Receptionist';
      price = 'от 249 ₾/мес';
      desc = 'Ответы на типовые вопросы и сбор заявок — лёгкий вход без лишней сложности.';
    }
    var msg = 'Квиз на сайте: рекомендуете пакет ' + pack;
    var result = document.getElementById('quiz-result');
    if (!result) return;
    result.innerHTML =
      '<div class="section-tag">РЕКОМЕНДАЦИЯ</div>' +
      '<h3>' + pack + '</h3>' +
      '<p><strong>' + price + '</strong><br>' + desc + '</p>' +
      '<a class="btn btn-primary" target="_blank" rel="noopener" href="https://t.me/alex_berik?text=' + encodeURIComponent(msg) + '">' +
      '<i data-lucide="send"></i> Написать в Telegram</a>' +
      '<button type="button" class="btn btn-secondary" id="quiz-restart">Пройти ещё раз</button>';
    if (window.lucide) try { lucide.createIcons(); } catch (e) {}
    var restart = document.getElementById('quiz-restart');
    if (restart) {
      restart.onclick = function () {
        var box = document.getElementById('quiz-box');
        box.querySelectorAll('.quiz-step').forEach(function (s, i) {
          s.classList.toggle('active', i === 0);
        });
        box.querySelectorAll('.quiz-dot').forEach(function (d, i) {
          d.classList.toggle('on', i === 0);
        });
      };
    }
    if (typeof gtag === 'function') {
      try { gtag('event', 'quiz_complete', { package: pack }); } catch (e) {}
    }
  }

  function addPromise() {
    var card = document.querySelector('#contact .contact-card');
    if (!card || card.querySelector('.response-promise')) return;
    var promise = el(
      '<div class="response-promise"><i data-lucide="clock" size="16"></i> Отвечаю в Telegram в течение 2 часов</div>'
    );
    var form = card.querySelector('#contact-form');
    var counter = card.querySelector('#visit-counter');
    if (form) form.insertAdjacentElement('afterend', promise);
    else if (counter) counter.insertAdjacentElement('beforebegin', promise);
    else card.appendChild(promise);
    if (window.lucide) try { lucide.createIcons(); } catch (e) {}
  }

  function run() {
    buildAudience();
    buildPricing();
    buildQuiz();
    addPromise();
    if (window.lucide) try { lucide.createIcons(); } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
  setTimeout(run, 900);
})();
