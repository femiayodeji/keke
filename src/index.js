import Game from "/src/game";

let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.8;
});

document.body.appendChild(canvas);
let game = new Game(canvas);

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
    game.start();
    startBtn.textContent = 'Restart';
});

document.addEventListener('touchstart', (e) => {
    if(e.target !== startBtn && e.target.id !== 'start-btn') {
        e.preventDefault();
    }
    if(game.gameState === 2) {
        const touch = e.touches[0];
        const screenMiddle = window.innerWidth / 2;
        
        if(touch.clientX < screenMiddle) {
            game.keys.ArrowLeft = 1;
        } else {
            game.keys.ArrowRight = 1;
        }
    }
});

document.addEventListener('touchend', (e) => {
    if(e.target !== startBtn && e.target.id !== 'start-btn') {
        e.preventDefault();
    }
    game.keys.ArrowLeft = 0;
    game.keys.ArrowRight = 0;
});

let lastTime = 0;

function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    context.clearRect(0, 0, canvas.width, canvas.height);

    game.update(deltaTime);
    game.draw(context);

    if(game.gameState === 2) {
        startBtn.style.display = 'none';
    } else {
        startBtn.style.display = 'block';
    }

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
