'use strict';

export function hideAnimations() {
  const createObserver = (classToRemove, threshold, rootMargin) => {
    return new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(classToRemove);
          }
        });
      },
      { threshold: threshold, rootMargin: rootMargin }
    );
  };

  const observers = [
    { classToRemove: 'hidden-bottom', threshold: 0.5, rootMargin: '0px' },
    { classToRemove: 'hidden-left', threshold: 1, rootMargin: '0px' },
  ];

  observers.forEach(({ classToRemove, threshold, rootMargin }) => {
    const observer = createObserver(classToRemove, threshold, rootMargin);
    const elements = document.querySelectorAll(`.${classToRemove}`);
    elements.forEach(el => observer.observe(el));
  });
}
