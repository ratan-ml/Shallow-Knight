const canvasEl = document.getElementById("game-canvas");
canvasEl.width = 500; // Game.DIM_X;
canvasEl.height = 500; // Game.DIM_Y;

const ctx = canvasEl.getContext("2d");
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 500, 500);
