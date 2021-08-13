'use strict';

class Acceleration {
    constructor(element) {
        let button = element.querySelector('.acceleration__button');
        let text = element.querySelector('.acceleration__text');

        button.addEventListener('click', () => this.toggle(element, text));
    }

    toggle(element, text) {
        let open = document.querySelector('.acceleration__item_open');
        if (open !== element && open) {
            open.classList.remove('acceleration__item_open');
            let visibleText = open.querySelector('.acceleration__text');
            visibleText.classList.remove('acceleration__text_open');
            element.classList.add('acceleration__item_open');
            text.classList.add('acceleration__text_open');
        } else {
            element.classList.toggle('acceleration__item_open');
            text.classList.toggle('acceleration__text_open');
        }
    }
}

class Scroll {
    constructor(list) {
        this.list = list;
        this.pages = document.querySelector('.acceleration__pages');
        this.list.addEventListener('scroll', () => this.move());
    }

    move() {
        let scroll = this.list.scrollLeft;
        let width = window.screen.width;
        let widthOfList = this.list.scrollWidth - width;
        let percent = scroll / widthOfList * 70;
        let slider = document.querySelector('.acceleration__slider');
        slider.style.left = percent + '%';
    }
}

let elements = Array.from(document.querySelectorAll('.acceleration__item'));
elements.forEach(element => new Acceleration(element));

let list = document.querySelector('.acceleration__list');
new Scroll(list);