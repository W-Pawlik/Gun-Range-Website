'use strict';
import { slider } from './components/slider.js';
import { map } from './components/map.js';
import { hideAnimations } from './components/hideAnimations.js';
import { mobileNav } from './components/mobileNav.js';
import { scrollBehaviour } from './components/scrollBehaviour.js';
import { navObserver } from './components/stickyNav.js';

slider();

map();

hideAnimations();

mobileNav();

scrollBehaviour();

const homeSection = document.querySelector('.home');
navObserver.observe(homeSection);
