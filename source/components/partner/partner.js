'use sctrict';

class Partner {
    constructor(element) {
        this.element = element;
        this.background = this.element.nextElementSibling;
        this.closeButton = this.element.querySelector('.partner__close');

        this.closeButton.addEventListener('click', () => this.close());
        this.background.addEventListener('click', () => this.close());
    }

    close() {
        this.element.classList.remove('partner_open');
        this.background.classList.remove('partner-background_open');
    }
}

let elements = Array.from(document.querySelectorAll('.partner'));
elements.forEach(element => new Partner(element));