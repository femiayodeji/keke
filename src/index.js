var canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
canvas.width = 350;
canvas.height = 500;

document.body.appendChild(canvas);

var perm = [];

while(perm.length < 255){
    let val = Math.floor(Math.random() * 255);
    perm.push(val);
}
console.log(perm)
var lerp = (a, b, t) => a + (b - a) * t;
var noise = x => {
    return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}

function gameLoop(){
    context.fillStyle = "#19f";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#000";
    context.beginPath();

    for(let i = 0; i < canvas.width; i++){
        context.lineTo(i, noise(i));
    }
    context.fill();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
