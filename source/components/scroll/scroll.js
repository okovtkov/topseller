class Scroll {
    constructor(scroll) {
        this.scroll = scroll;
        this.block = scroll.closest('section');
        this.class = this.block.classList[0];
        this.list = this.block.querySelector(`.${this.class}__list`);
        if (!this.list) this.list = this.block.querySelector(`.${this.class}__container`);
        this.list.addEventListener('scroll', () => this.move());
    }

    move() {
        let scroll = this.list.scrollLeft;
        let width = window.screen.width;
        let widthOfList = this.list.scrollWidth - width;
        let percent = scroll / widthOfList * 70;
        let slider = this.scroll.querySelector('.scroll__slider');
        slider.style.left = percent + '%';
    }
}

let scrolls = Array.from(document.querySelectorAll('.scroll'));
scrolls.forEach(scroll => new Scroll(scroll));