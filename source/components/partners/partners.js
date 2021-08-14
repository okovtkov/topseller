'use strict';

class Scroll {
    constructor(list) {
        this.list = list;
        this.pages = document.querySelector('.partners__pages');
        this.list.addEventListener('scroll', () => this.move());
        let buttons = Array.from(document.querySelectorAll('.partners__button'));

        buttons.forEach(button => {
            button.addEventListener('click', () => this.slide(button));
        });
    }

    move() {
        let scroll = this.list.scrollLeft;
        let width = window.screen.width;
        let widthOfList = this.list.scrollWidth - width;
        let percent = scroll / widthOfList * 70;
        let slider = document.querySelector('.partners__slider');
        slider.style.left = percent + '%';
    }

    slide(button) {
        let width = -parseFloat(getComputedStyle(document.querySelector('.partners__item')).width);
        let length = Array.from(document.querySelectorAll('.partners__page')).length - 1;

        if (button.classList.contains('partners__button_prev')) page -= 1;
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
        let current = this.pages.querySelector('.partners__page_current');
        current.classList.remove('partners__page_current');

        let pages = Array.from(this.pages.querySelectorAll('.partners__page'));
        pages[page].classList.add('partners__page_current');
    }
}

let page = 0;
let position = 0;
let start = parseFloat(getComputedStyle(document.querySelector('.partners__list')).marginLeft);
let list = document.querySelector('.partners__list');
new Scroll(list);