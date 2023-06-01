import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

const getSavedTime = () => {
  return localStorage.getItem('videoplayer-current-time');
};

player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(time => {
      savedTime(time);
    });
  }, 1000)
);

const storedTime = getSavedTime();
if (storedTime !== null) {
  player.setCurrentTime(storedTime);
}
