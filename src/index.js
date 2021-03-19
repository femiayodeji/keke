const canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
canvas.width = 350;
canvas.height = 500;

document.body.appendChild(canvas);

function gameLoop(){
    context.fillStyle = "#19f";
    context.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
