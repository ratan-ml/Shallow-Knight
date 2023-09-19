import Player from "./player";
import Boss from "./boss";
import Game from "./game";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = Game.DIM_X; // Game.DIM_X;
canvas.height = Game.DIM_Y; // Game.DIM_Y;

// set background color
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// for testing purposes, will be put into game.js
const game = new Game(ctx)
game.play()


