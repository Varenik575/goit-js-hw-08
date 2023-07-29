import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function({seconds}) {
    localStorage.setItem("video-current-time", JSON.stringify({seconds}));
};

const currentTime = localStorage.getItem("video-current-time");


player.on('timeupdate', onPlay);

player.setCurrentTime(parseInt(currentTime)).then(function (seconds) {}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        
        default:
            break;
    }
});
