'use strict';

class Slider {
    constructor(slider) {
        this.page = 0;
        this.position = 0;
        this.block = slider.closest('section');
        this.class = this.block.classList[0];
        this.list = this.block.querySelector(`.${this.class}__list`)
        this.start = parseFloat(getComputedStyle(document.querySelector(`.${this.class}__list`)).marginLeft);
        this.slider = slider;
        let buttons = Array.from(document.querySelectorAll(`.${this.class}__button`));

        buttons.forEach(button => {
            button.addEventListener('click', () => this.slide(button));
        });
    }

    slide(button) {
        let width = -parseFloat(getComputedStyle(document.querySelector(`.${this.class}__item`)).width);
        let length = Array.from(this.slider.querySelectorAll('.slider__page')).length - 1;

        if (button.classList.contains(`${this.class}__button_prev`)) this.page -= 1;
        else this.page += 1;

        if (this.page > length) {
            this.page = 0;
            this.position = this.start;
        } else if (this.page === 0) {
            this.position = this.start;
        } else if (this.page < 0) {
            this.page = length;
            this.position = this.page * width + 16;
        } else {
            this.position = this.page * width + 16;
        }

        this.list.style.marginLeft = this.position + 'px';
        this.selectPage(this.page);
    }

    selectPage(page) {
        let current = this.slider.querySelector('.slider__page_current');
        current.classList.remove('slider__page_current');

        let pages = Array.from(this.slider.querySelectorAll('.slider__page'));
        pages[page].classList.add('slider__page_current');
    }
}

let sliders = Array.from(document.querySelectorAll('.slider'));
sliders.forEach(slider => new Slider(slider));