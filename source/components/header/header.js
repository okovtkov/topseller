'use strict';

let burger = document.querySelector('.header__burger');
let navigation = document.querySelector('.navigation');
burger.addEventListener('click', () => {
    navigation.classList.add('navigation_open');
});
document.addEventListener('click', (event) => {
    if (!event.target.closest('.navigation') && event.target !== burger) 
        navigation.classList.remove('navigation_open');
});