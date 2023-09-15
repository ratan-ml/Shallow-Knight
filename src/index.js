import Player from "./player";
import Boss from "./boss";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024; // Game.DIM_X;
canvas.height = 576; // Game.DIM_Y;

// set background color
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// for testing purposes, will be put into game.js
const player = new Player({
    pos: {
        x: 0,
        y: 0
    },
    vel: {
        x: 0,
        y: 0
    }
})
player.draw(ctx)

const boss = new Boss({
    pos: {
        x: 250,
        y: 0
    },
    vel: {
        x: 0,
        y: 0
    }
})
boss.draw(ctx)

function animate() {
    window.requestAnimationFrame(animate)
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.move()
    boss.move()
}
animate()