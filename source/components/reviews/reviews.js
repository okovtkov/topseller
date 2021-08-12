'use strict';

class Scroll {
    constructor(list) {
        this.list = list;
        this.pages = document.querySelector('.reviews__pages');
        this.list.addEventListener('scroll', () => this.move());
        let buttons = Array.from(document.querySelectorAll('.reviews__button'));

        buttons.forEach(button => {
            button.addEventListener('click', () => this.slide(button));
        });
    }

    move() {
        let scroll = this.list.scrollLeft;
        let width = window.screen.width;
        let widthOfList = this.list.scrollWidth - width;
        let percent = scroll / widthOfList * 70;
        let slider = document.querySelector('.reviews__slider');
        slider.style.left = percent + '%';
    }

    slide(button) {
        let width = -parseFloat(getComputedStyle(document.querySelector('.reviews__item')).width);
        let length = Array.from(document.querySelectorAll('.reviews__page')).length - 1;

        if (button.classList.contains('reviews__button_prev')) page -= 1;
        else page += 1;

        if (page > length) {
            page = 0;
            position = start;
        } else if (page === 0) {
            position = start;
        } else if (page < 0) {
            page = length;
            position = page * width + 16;
        } else {
            position = page * width + 16;
        }

        this.list.style.marginLeft = position + 'px';
        this.selectPage(page);
    }

    selectPage(page) {
        let current = this.pages.querySelector('.reviews__page_current');
        current.classList.remove('reviews__page_current');

        let pages = Array.from(this.pages.querySelectorAll('.reviews__page'));
        pages[page].classList.add('reviews__page_current');
    }
}

let page = 0;
let position = 0;
let start = parseFloat(getComputedStyle(document.querySelector('.reviews__list')).marginLeft);
let list = document.querySelector('.reviews__list');
new Scroll(list);