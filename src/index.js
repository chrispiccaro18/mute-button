const speakerIcon = document.getElementById('speaker-icon');
const playIcon = document.getElementById('play-icon');
const audio = new Audio('./assets/audio/judy.mp3');
audio.muted = false;

playIcon.addEventListener('click', function() {
    audio.play();
    speakerIcon.src = './assets/images/mute.png';
    speakerIcon.alt = 'Mute button';
    speakerIcon.addEventListener('click', function() {
        audio.muted = true;
        speakerIcon.src = './assets/images/speaker.png';
        speakerIcon.alt = 'Un-mute button';
    });
});