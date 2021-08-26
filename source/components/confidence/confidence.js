'use strict';

class Scroll {
    constructor(list) {
        this.list = list;
        this.pages = document.querySelector('.confidence__pages');
        this.list.addEventListener('scroll', () => this.move());
        let buttons = Array.from(document.querySelectorAll('.confidence__button'));

        buttons.forEach(button => {
            button.addEventListener('click', () => this.slide(button));
        });
    }

    move() {
        let scroll = this.list.scrollLeft;
        let width = window.screen.width;
        let widthOfList = this.list.scrollWidth - width;
        let percent = scroll / widthOfList * 70;
        let slider = document.querySelector('.confidence__slider');
        slider.style.left = percent + '%';
    }

    slide(button) {
        let width = -parseFloat(getComputedStyle(document.querySelector('.confidence__item')).width);
        let margin = -parseFloat(getComputedStyle(document.querySelector('.confidence__item')).marginRight);
        let length = Array.from(document.querySelectorAll('.confidence__page')).length - 1;

        if (button.classList.contains('confidence__button_prev')) page -= 1;
        else page += 1;

        if (page > length) {
            page = 0;
            position = 0;
        } else if (page === 0) {
            position = 0;
        } else if (page < 0) {
            page = length;
            position = page * (width + margin);
        } else {
            position = page * (width + margin);
        }

        this.list.firstElementChild.style.marginLeft = position + 'px';
        this.selectPage(page);
    }

    selectPage(page) {
        let current = this.pages.querySelector('.confidence__page_current');
        current.classList.remove('confidence__page_current');

        let pages = Array.from(this.pages.querySelectorAll('.confidence__page'));
        pages[page].classList.add('confidence__page_current');
    }
}

let page = 0;
let position = 0;
let list = document.querySelector('.confidence__list');
new Scroll(list);