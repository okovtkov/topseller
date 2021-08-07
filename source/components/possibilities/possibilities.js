'use strict';

class Possibiity {
    constructor(element) {
        let button = element.querySelector('.possibilities__button');
        let text = element.querySelector('.possibilities__text');

        button.addEventListener('click', () => this.toggle(element, text));
    }

    toggle(element, text) {
        let open = document.querySelector('.possibilities__item_open');
        if (open !== element && open) {
            open.classList.remove('possibilities__item_open');
            let visibleText = open.querySelector('.possibilities__text');
            visibleText.classList.remove('possibilities__text_open');
            element.classList.add('possibilities__item_open');
            text.classList.add('possibilities__text_open');
        } else {
            element.classList.toggle('possibilities__item_open');
            text.classList.toggle('possibilities__text_open');
        }
    }
}

let elements = Array.from(document.querySelectorAll('.possibilities__item'));
elements.forEach(element => new Possibiity(element));