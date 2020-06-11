const soundPlayer = {
    audio: new Audio(),
    audioMute: false,
    play(sound) {
        this.audio.src = sound;
        if (!this.audioMute) {
            this.audio.play();
        }
    },
};

export default soundPlayer;
