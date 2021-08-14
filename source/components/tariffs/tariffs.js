'use strict';

class Tariffs {
    constructor(link) {
        this.link = link;
        this.link.addEventListener('click', (event) => this.toggle(event));
    }

    toggle(event) {
        event.preventDefault();
        let activeLink = document.querySelector('.tariffs__link_active');
        activeLink.classList.remove('tariffs__link_active');
        this.link.classList.add('tariffs__link_active');

        let activeBlock = document.querySelector('.tariffs__list_active');
        activeBlock.classList.remove('tariffs__list_active');

        let id = this.link.getAttribute('href').slice(1);
        let block = document.getElementById(id);
        block.classList.add('tariffs__list_active');
    }
}

let links = Array.from(document.querySelectorAll('.tariffs__link'));
links.forEach(link => new Tariffs(link));