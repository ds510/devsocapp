/**
 * Day & Night - Theme Toggle & Interactions
 * DevSoc UNSW Application
 */

(function () {
  'use strict';

  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');

  // Check for saved preference or system preference
  function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'night';
    }
    return 'day';
  }

  function setTheme(theme) {
    if (theme === 'night') {
      body.classList.add('night-mode');
      body.classList.remove('day-mode');
    } else {
      body.classList.add('day-mode');
      body.classList.remove('night-mode');
    }
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const isNight = body.classList.contains('night-mode');
    setTheme(isNight ? 'day' : 'night');
  }

  // Initialize
  setTheme(getInitialTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Optional: smooth reveal on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.about-box, .interest-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
})();
