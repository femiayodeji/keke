var canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
canvas.width = 350;
canvas.height = 500;

document.body.appendChild(canvas);

var perm = [];

while(perm.length < 255){
    // while(perm.includes(val = Math.floor(Math.random() * 255)));
    let val = Math.floor(Math.random() * 255);
    perm.push(val);
}
console.log(perm)
var lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI))/2;
var noise = x => {
    x = x * 0.01 % 255;
    return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}

let t = 0;
function gameLoop(){
    t++;
    context.fillStyle = "#19f";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#000";
    context.beginPath();
    context.moveTo(0, canvas.height)

    for(let i = 0; i < canvas.width; i++){
        context.lineTo(i, canvas.height - noise(i + t) * 0.25);
    }
    context.lineTo(canvas.width, canvas.height);
    context.fill();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
