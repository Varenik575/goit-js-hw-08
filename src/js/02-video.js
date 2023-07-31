import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function({seconds}) {
    localStorage.setItem("video-current-time", seconds);
};

const currentTime = localStorage.getItem("video-current-time");

if (currentTime) {
player.setCurrentTime(parseInt(currentTime));
};


player.on('timeupdate', throttle(onPlay, 1000));