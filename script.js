(function () {
  'use strict';

  function init() {
    var saved = localStorage.getItem('theme');
    var isNight = saved === 'night' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.body.classList.toggle('night-mode', isNight);
    document.body.classList.toggle('day-mode', !isNight);

    // Click ball to expand/collapse interest panel
    document.querySelectorAll('.interest-ball').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var panelId = btn.getAttribute('data-panel');
        var panel = document.getElementById(panelId);
        var isOpen = panel.classList.contains('is-open');

        if (isOpen) {
          panel.classList.remove('is-open');
          panel.setAttribute('hidden', '');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          panel.classList.add('is-open');
          panel.removeAttribute('hidden');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Smooth reveal on scroll
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.talm-bout-me, .ball-row').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    var playerCards = document.querySelectorAll('.player-card, .player-image-only');
    playerCards.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
