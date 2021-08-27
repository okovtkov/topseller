'use strict';

class Questions {
    constructor(button) {
        this.close = document.querySelector('.questions__close');
        this.send = document.querySelector('.questions__button-send');
        this.complete = document.querySelector('.questions__button-complete');
        this.form = document.querySelector('.questions__form-wrapper');
        this.completeWrapper = document.querySelector('.questions__complete-wrapper');

        button.addEventListener('click', () => this.openForm());
        this.close.addEventListener('click', () => this.closeForm());
        this.send.addEventListener('click', () => this.openCompleteWindow());
        this.complete.addEventListener('click', () => this.closeCompleteWindow());
    }

    openForm() {
        this.form.classList.add('questions__form-wrapper_open');
    }

    closeForm() {
        this.form.classList.remove('questions__form-wrapper_open');
    }

    openCompleteWindow() {
        this.completeWrapper.classList.add('questions__complete-wrapper_open');
    }

    closeCompleteWindow() {
        this.completeWrapper.classList.remove('questions__complete-wrapper_open');
        this.closeForm();
    }
}

let button = document.querySelector('.questions__button');
new Questions(button);