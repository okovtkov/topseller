'use strict';

class QuestionForm {
    constructor(form) {
        this.form = form;
        this.wrapper = form.closest('section');
        this.button = form.closest('section').closest('.positioner').querySelector('.button');
        this.close = this.wrapper.querySelector('.question-form__close');
        this.send = this.wrapper.querySelector('.question-form__button-send');
        this.formWrapper = this.wrapper.querySelector('.question-form__form-wrapper');
        this.completeWrapper = this.wrapper.querySelector('.question-form__complete-wrapper');
        this.container = this.wrapper.closest('section').closest('.positioner').firstElementChild;
        this.complete = this.completeWrapper.querySelector('.question-form__button-complete');

        this.button.addEventListener('click', () => this.openForm());
        this.close.addEventListener('click', () => this.closeForm());
        this.form.addEventListener('submit', (event) => this.openCompleteWindow(event));
        this.complete.addEventListener('click', () => this.closeCompleteWindow());
    }

    openForm() {
        this.container.style.display = 'none';
        this.formWrapper.classList.add('question-form__form-wrapper_open');
    }

    closeForm() {
        this.formWrapper.classList.remove('question-form__form-wrapper_open');
        this.container.style.display = 'flex';
    }

    openCompleteWindow(event) {
        event.preventDefault();
        this.formWrapper.classList.remove('question-form__form-wrapper_open');
        this.completeWrapper.classList.add('question-form__complete-wrapper_open');
    }

    closeCompleteWindow() {
        this.completeWrapper.classList.remove('question-form__complete-wrapper_open');
        this.container.style.display = 'flex';
    }
}

let forms = Array.from(document.querySelectorAll('.question-form__form'));
forms.forEach(form => new QuestionForm(form));