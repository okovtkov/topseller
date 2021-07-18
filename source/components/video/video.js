'use strict';

class Video {
    constructor(element) {
        this.element = element;
        this.play = this.element.querySelector('.video__play');
        this.player = this.element.querySelector('.video__player');

        this.play.addEventListener('click', () => this.onPlay());
        this.player.addEventListener('pause', () => this.pause());
    }

    onPlay() {
        console.log(this.element)
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

let element = document.querySelector('.video');
new Video(element);