'use strict';

let navigation = document.querySelector('.navigation');
let close = document.querySelector('.navigation__close');
close.addEventListener('click', () => navigation.classList.remove('navigation_open'));