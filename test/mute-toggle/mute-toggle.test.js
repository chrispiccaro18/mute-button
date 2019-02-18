import muteToggle from '../../src/mute-toggle/mute-toggle.js';

const test = QUnit.test;

test('if not muted toggle to muted', function(assert) {
    const audio = new Audio('./assets/audio/judy.mp3');
    audio.muted = false;
    muteToggle(audio);
    assert.equal(audio.muted, true);
});

test('if muted toggle to not muted', function(assert) {
    const audio = new Audio('./assets/audio/judy.mp3');
    audio.muted = true;
    muteToggle(audio);
    assert.equal(audio.muted, false);
});