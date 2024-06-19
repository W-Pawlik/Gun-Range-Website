'use strict';

export function slider() {
  const prevBtnEl = document.querySelector('.btn-prev');
  const nextBtnEl = document.querySelector('.btn-next');
  const allSlides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function changeActiveSlide(index) {
    allSlides.forEach((slide, i) => {
      if (i === index) {
        slide.setAttribute('data-active', '');
      } else {
        slide.removeAttribute('data-active');
      }
    });
  }

  prevBtnEl.addEventListener('click', () => {
    console.log('prev');
    currentIndex = (currentIndex + 1) % allSlides.length;
    changeActiveSlide(currentIndex);
  });

  nextBtnEl.addEventListener('click', () => {
    console.log('next');
    currentIndex = (currentIndex - 1 + allSlides.length) % allSlides.length;
    changeActiveSlide(currentIndex);
  });
}
