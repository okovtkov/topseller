'use strict';

class Follow {
    constructor(button) {
        button.addEventListener('click', () => this.scroll(button));
    }

    scroll(button) {
        let video = document.querySelector('.follow__video-container');
        let width = video.getBoundingClientRect().width + 32;
        if (button.classList.contains('follow__button_left')) position += 1;
        else position -= 1;
        if (position > 0) position = -length;
        if (position < -length) position = 0;
        video.style.marginLeft = position * width + 'px';
    }
} 

class Scroll {
    constructor(container) {
        this.container = container;
        this.pages = document.querySelector('.follow__pages');
        this.container.addEventListener('scroll', () => this.move());
    }

    move() {
        let scroll = this.container.scrollLeft;
        let width = window.screen.width;
        let widthOfcontainer = this.container.scrollWidth - width;
        let percent = scroll / widthOfcontainer * 70;
        let slider = document.querySelector('.follow__slider');
        slider.style.left = percent + '%';
    }
}

let container = document.querySelector('.follow__container');
new Scroll(container);

let position = 0;
let length = Array.from(document.querySelectorAll('.follow__video-container')).length - 3;
let buttons = Array.from(document.querySelectorAll('.follow__button'));
buttons.forEach(button => new Follow(button));