'use strict';

class Arrow {
    constructor(arrow) {
        arrow.addEventListener('click', () => this.scroll(arrow));
    }

    scroll(arrow) {
        let item = document.querySelector('.analytics__list');
        item.scrollTop += arrow.classList.contains('analytics__button-arrow_up') ? -90 : 90;
    }
}

let arrows = Array.from(document.querySelectorAll('.analytics__button-arrow'));
arrows.forEach(arrow => new Arrow(arrow));