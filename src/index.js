import Player from "./player";
import Boss from "./boss";
import Game from "./game";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024; // Game.DIM_X;
canvas.height = 576; // Game.DIM_Y;

// set background color
ctx.fillStyle = 'grey';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// for testing purposes, will be put into game.js
const game = new Game()

const player = new Player({
    pos: {
        x: 0,
        y: 576-250
    },
    vel: {
        x: 0,
        y: 0
    },
    game: game
})
player.draw(ctx)

const boss = new Boss({
    pos: {
        x: (800/2)+(100/2),
        y: 0
    },
    vel: {
        x: 0,
        y: 0
    },
    game: game

})
boss.draw(ctx)



const running = true

function animate() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.animate(ctx)
    boss.animate(ctx)
    requestAnimationFrame(() => {if (running) return animate()})
}

function play() {
    
    animate()
}

play()
