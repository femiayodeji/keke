import Game from '/src/game';

let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
canvas.width = 350;
canvas.height = 500;

document.body.appendChild(canvas);

let game = new Game(canvas);

let lastTime = 0;

function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    context.clearRect(0, 0, canvas.width, canvas.height);

    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
