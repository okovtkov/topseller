'use strict';

class QuestionForm {
    constructor(button) {
        this.close = document.querySelector('.question-form__close');
        this.send = document.querySelector('.question-form__button-send');
        this.complete = document.querySelector('.question-form__button-complete');
        this.form = document.querySelector('.question-form__form-wrapper');
        this.completeWrapper = document.querySelector('.question-form__complete-wrapper');

        button.addEventListener('click', () => this.openForm());
        this.close.addEventListener('click', () => this.closeForm());
        this.send.addEventListener('click', () => this.openCompleteWindow());
        this.complete.addEventListener('click', () => this.closeCompleteWindow());
    }

    openForm() {
        this.form.classList.add('question-form__form-wrapper_open');
    }

    closeForm() {
        this.form.classList.remove('question-form__form-wrapper_open');
    }

    openCompleteWindow() {
        this.completeWrapper.classList.add('question-form__complete-wrapper_open');
    }

    closeCompleteWindow() {
        this.completeWrapper.classList.remove('question-form__complete-wrapper_open');
        this.closeForm();
    }
}

let buttons = Array.from(document.querySelectorAll('.question-button'));
buttons.forEach(button => new QuestionForm(button));