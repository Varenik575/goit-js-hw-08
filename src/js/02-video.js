import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'video-current-time';

const onPlay = function({seconds}) {
    localStorage.setItem(KEY, seconds);
};

const currentTime = localStorage.getItem(KEY);

if (currentTime) {
player.setCurrentTime(parseInt(currentTime));
};

player.on('timeupdate', throttle(onPlay, 1000));