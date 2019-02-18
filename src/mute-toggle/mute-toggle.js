function muteToggle(audio) {
    if(audio.muted === false) {
        audio.muted = true;
    } else {
        audio.muted = false;
    }
}

export default muteToggle;