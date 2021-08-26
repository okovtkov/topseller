'use strict';

class Video {
    constructor(element) {
        this.element = element;
        let play = this.element.querySelector('.video__play');
        this.player = this.element.querySelector('.video__player');

        play.addEventListener('click', () => this.onPlay());
        this.player.addEventListener('pause', () => this.pause());
    }

    onPlay() {
        if (this.element.classList.contains('video_active')) {
            this.player.pause();
        } else {
            this.element.classList.add('video_active');
            this.player.setAttribute('controls', true);
            this.player.play();
        }
    }

    pause() {
        this.element.classList.remove('video_active');
    }
}

let elements = Array.from(document.querySelectorAll('.video'));
elements.forEach(element => new Video(element));