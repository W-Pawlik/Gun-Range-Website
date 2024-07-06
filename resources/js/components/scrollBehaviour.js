'use strict';

export function scrollBehaviour() {
  const links = document.querySelectorAll('a:link');

  links.forEach(function (link) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');

      if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
