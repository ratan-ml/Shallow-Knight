import Game from "./game";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const audio = document.getElementById("audio")
const audioIcon = document.getElementById("audio-icon")

canvas.width = Game.DIM_X; 
canvas.height = Game.DIM_Y; 

const muteAudio = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // if (!audio.muted) {
    if (!audio.paused) {
        audio.pause()
        // audio.muted = true
        audioIcon.classList.add('muted')
        audioIcon.src = "assets/icon/mute-speaker.png"
    } else {
        audio.play()
        // audio.muted = false
        audioIcon.classList.remove('muted')
        audioIcon.src = "assets/icon/speaker-filled-audio-tool.png"
    }
}

audioIcon.addEventListener("click", muteAudio)


const game = new Game(ctx)
game.play()





