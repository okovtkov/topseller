'use strict';

class TariffsForm {
    constructor(form) {
        this.form = form;
        this.container = this.form.closest('.tariffs__item').querySelector('.tariffs__item-wrapper');
        this.button = this.container.querySelector('.tariffs__button');
        this.formContainer = this.form.closest('section');
        this.close = this.formContainer.querySelector('.tariffs-form__close');
        this.send = this.formContainer.querySelector('.tariffs-form__button-send');
        this.complete = this.formContainer.querySelector('.tariffs-form__button-complete');

        this.button.addEventListener('click', () => this.openForm());
        this.close.addEventListener('click', () => this.closeForm());
        this.form.addEventListener('submit', (event) => this.openCompleteWindow(event));
        this.complete.addEventListener('click', () => this.closeCompleteWindow());
    }

    openForm() {
        this.container.style.display = 'none';
        this.formContainer.classList.add('tariffs-form_open-send');
    }

    closeForm() {
        this.container.style.display = 'flex';
        this.formContainer.classList.remove('tariffs-form_open-send');
    }

    openCompleteWindow(event) {
        event.preventDefault();
        this.formContainer.classList.remove('tariffs-form_open-send');
        this.formContainer.classList.add('tariffs-form_open-complete');
    }

    closeCompleteWindow() {
        this.container.style.display = 'flex';
        this.formContainer.classList.remove('tariffs-form_open-complete');
    }
}

let forms = Array.from(document.querySelectorAll('.tariffs-form__form'));
forms.forEach(form => new TariffsForm(form));