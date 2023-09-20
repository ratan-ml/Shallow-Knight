import Player from "./player";
import Boss from "./boss";
import Game from "./game";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const audio = document.getElementById("audio")
const audioIcon = document.getElementById("audio-icon")

canvas.width = Game.DIM_X; // Game.DIM_X;
canvas.height = Game.DIM_Y; // Game.DIM_Y;

// set background color
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// for testing purposes, will be put into game.js
const game = new Game(ctx)
game.play()

const muteAudio = (e) => {
    e.preventDefault()

    if (!audio.muted) {
        audio.muted = true
        audioIcon.src = "assets/icon/mute-speaker.png"
    } else {
        audio.muted = false
        audioIcon.src = "assets/icon/speaker-filled-audio-tool.png"
    }
}

document.addEventListener("click", muteAudio)