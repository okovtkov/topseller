'use strict';

class Partners {
    constructor(link) {
        this.partner = link.closest('.partners__item').querySelector('.partner');
        this.background = this.partner.nextElementSibling;
        link.addEventListener('click', (event) => this.open(event));
    }

    open(event) {
        event.preventDefault();
        this.partner.classList.add('partner_open');
        this.background.classList.add('partner-background_open');
    }
}

let links = Array.from(document.querySelectorAll('.partners__link'));
links.forEach(link => new Partners(link));