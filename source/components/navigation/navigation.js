'use strict';

class Menu {
    constructor() {
        this.burger = document.querySelector('.header__burger');
        this.navigation = document.querySelector('.navigation');
        this.closeButton = document.querySelector('.navigation__close');

        this.burger.addEventListener('click', () => this.open());
        this.closeButton.addEventListener('click', () => this.close());
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.navigation') && !event.target.closest('.header__burger')) 
                this.close();
        });
    }

    close() {
        this.navigation.classList.remove('navigation_open');
    }

    open() {
        this.navigation.classList.add('navigation_open');
    }
}

new Menu();