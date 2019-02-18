import muteToggle from './mute-toggle/mute-toggle.js';

const speakerIcon = document.getElementById('speaker-icon');
const playIcon = document.getElementById('play-icon');
// const pauseIcon = document.getElementById('pause-icon');
const audio = new Audio('./assets/audio/judy.mp3');

playIcon.addEventListener('click', function() {
    audio.play();
    speakerIcon.src = './assets/images/mute.png';
    speakerIcon.alt = 'Mute button';
    // pauseIcon.src = './assets/images/pause.png';
});

speakerIcon.addEventListener('click', function() {
    if(audio.muted === false) {
        speakerIcon.src = './assets/images/speaker.png';
        speakerIcon.alt = 'Un-mute button';
    } else {
        speakerIcon.src = './assets/images/mute.png';
        speakerIcon.alt = 'Mute button';
    }
    muteToggle(audio);
    console.log(audio);
});