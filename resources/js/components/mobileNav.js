`use strict`;

export function mobileNav() {
  const openNavBtnEl = document.querySelector('.btn-mobile-nav');
  const headerEl = document.querySelector('.header');
  const navLinksEl = document.querySelectorAll('.nav-link');

  openNavBtnEl.addEventListener('click', e => {
    if (headerEl.classList.contains('nav-open')) {
      headerEl.classList.remove('nav-open');
    } else {
      headerEl.classList.add('nav-open');
    }
  });

  navLinksEl.forEach(link => {
    link.addEventListener('click', e => {
      headerEl.classList.remove('nav-open');
    });
  });
}
