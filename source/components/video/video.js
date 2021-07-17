'use strict';

class Player {
    constructor() {
        this.play = document.querySelector('.video__play');
        this.play.addEventListener('click', () => this.start());
    }

    start() {
        let container = document.querySelector('.video');
        let information = document.querySelector('.video__information');
        let player = document.querySelector('.video__player');

        player.setAttribute('controls', true);
        information.style.display = 'none';
        this.play.style.display = 'none';
        container.style.background = 'none';
        container.style.minHeight = 'auto';
    }
}

new Player();