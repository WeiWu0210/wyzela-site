/**
 * Wyzela LLC - Patent Agent Practice Website
 * Progressive Enhancement JavaScript
 */

(function() {
  'use strict';

  // Mobile Navigation Toggle (T032)
  const menuToggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      this.setAttribute('aria-expanded', !isExpanded);

      // Toggle navigation visibility
      nav.classList.toggle('is-open');

      // Update aria-hidden on nav
      nav.setAttribute('aria-hidden', isExpanded);
    });

    // Close menu when clicking on a nav link
    const navLinks = nav.querySelectorAll('.header__nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        nav.setAttribute('aria-hidden', 'true');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = menuToggle.contains(event.target) || nav.contains(event.target);

      if (!isClickInside && nav.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        nav.setAttribute('aria-hidden', 'true');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        nav.setAttribute('aria-hidden', 'true');
        menuToggle.focus();
      }
    });
  }

  // Smooth scroll polyfill for browsers that don't support CSS scroll-behavior
  if (!CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
})();
