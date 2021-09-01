'use strict';

class Accordion {
    constructor(element) {
        this.element = element;
        console.log(this.element)
        let summaries = Array.from(this.element.querySelectorAll('details summary'));
        summaries.forEach(summary => {
            summary.addEventListener('click', (event) => this.toggle(event, summary))
        })
    }

    toggle(event, summary) {
        let open = this.element.querySelector('.accordion__item details[open]');
        let detail = summary.parentElement;
        if (open === detail) {
            event.preventDefault();
            open.removeAttribute('open');
            return;
        }
        if (open) open.removeAttribute('open');
    }
}

let items = Array.from(document.querySelectorAll('.accordion'));
items.forEach(item => new Accordion(item));