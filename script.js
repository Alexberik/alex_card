// Load last known-good script, then soft-patch tilt (CSS already updated)
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/gh/Alexberik/alex_card@a7063c657609a35e37e94b8f4f1961c7575dcda5/script.js';
  s.onload = function () {
    try {
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
    } catch (e) {}
  };
  s.onerror = function () {
    console.error('Failed to load script from CDN');
  };
  document.head.appendChild(s);
})();
