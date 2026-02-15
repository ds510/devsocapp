(function () {
  'use strict';

  function init() {
    var ball = document.getElementById('rolling-ball');
    var interestsSection = document.getElementById('interests-section');

    // Apply saved theme on load
    var saved = localStorage.getItem('theme');
    var isNight = saved === 'night' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.body.classList.toggle('night-mode', isNight);
    document.body.classList.toggle('day-mode', !isNight);

    if (ball && interestsSection) {
      ball.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var isRolledRight = ball.classList.contains('rolled-right');

        if (isRolledRight) {
          ball.classList.remove('rolled-right');
          interestsSection.classList.remove('is-visible');
          interestsSection.setAttribute('aria-hidden', 'true');
        } else {
          document.body.classList.toggle('night-mode');
          document.body.classList.toggle('day-mode');
          localStorage.setItem('theme', document.body.classList.contains('night-mode') ? 'night' : 'day');
          ball.classList.add('rolled-right');
          interestsSection.classList.add('is-visible');
          interestsSection.setAttribute('aria-hidden', 'false');
        }
      });
    }

    // Smooth reveal on scroll
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.talm-bout-me, .interest-panel').forEach(function (el) {
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
