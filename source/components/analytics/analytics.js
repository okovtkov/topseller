'use strict';

class Analytics {
    constructor(element) {
        let button = element.querySelector('.analytics__button');
        let text = element.querySelector('.analytics__text');
        button.addEventListener('click', () => this.toggle(element, text));
    }

    toggle(element, text) {
        let open = document.querySelector('.analytics__item_open');

        if (open !== element && open) {
            open.classList.remove('analytics__item_open');
            let visibleText = open.querySelector('.analytics__text');
            visibleText.classList.remove('analytics__text_open');
            element.classList.add('analytics__item_open');
            text.classList.add('analytics__text_open');
        } else {
            element.classList.toggle('analytics__item_open');
            text.classList.toggle('analytics__text_open');
        }

        if (window.screen.width >= 1024) this.changeHeight();
    }

    changeHeight() {
        let open = document.querySelector('.analytics__item_open');
        let list = document.querySelector('.analytics__list');
        if (open)
            list.style.height = '497px';
        else
            list.style.height = '370px';
    }
}

class Arrow {
    constructor(arrow) {
        arrow.addEventListener('click', () => this.scroll(arrow));
    }

    scroll(arrow) {
        if (arrow.classList.contains('analytics__button-arrow_up')) distance += 90;
        else distance -= 90;
        if (distance < -90) {
            distance = -90;
            return;
        }
        if (distance > 0) {
            distance = 0;
            return;
        }
        let item = document.querySelector('.analytics__item');
        item.style.marginTop = `${distance}px`;
    }
}

class Scroll {
    constructor(list) {
        this.list = list;
        this.pages = document.querySelector('.analytics__pages');
        this.list.addEventListener('scroll', () => this.move());
    }

    move() {
        let scroll = this.list.scrollLeft;
        let width = window.screen.width;
        let widthOfList = this.list.scrollWidth - width;
        let percent = scroll / widthOfList * 70;
        let slider = document.querySelector('.analytics__slider');
        slider.style.left = percent + '%';
    }
}

let distance = 0;
let arrows = Array.from(document.querySelectorAll('.analytics__button-arrow'));
let items = Array.from(document.querySelectorAll('.analytics__item'));
items.forEach(item => new Analytics(item));
arrows.forEach(arrow => new Arrow(arrow));

let list = document.querySelector('.analytics__list');
new Scroll(list);