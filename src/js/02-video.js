import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getCurrentTime, 1000));

readCurrentTime();

function readCurrentTime() {
  const time = localStorage.getItem('videoPlayerTime');
  if (time) {
    setCurrentTime(time);
  }
}

function setCurrentTime(time) {
  player.setCurrentTime(time);
}

function getCurrentTime() {
  player.getCurrentTime().then(saveCurrentTime);
}

function saveCurrentTime(time) {
  localStorage.setItem('videoPlayerTime', time);
}
