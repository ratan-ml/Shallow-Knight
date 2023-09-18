import Player from "./player";
import Boss from "./boss";
import Game from "./game";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1500; // Game.DIM_X;
canvas.height = 700; // Game.DIM_Y;

// set background color
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// for testing purposes, will be put into game.js
const game = new Game(ctx)
game.play()



// const running = true

// function animate() {
//     game.draw(ctx)
//     requestAnimationFrame(() => {if (running) return animate()})
// }

// function play() {
    
//     animate()
// }

// play()
