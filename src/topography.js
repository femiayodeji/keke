export default class Topography{
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.hills = [];
        this.loadHills();

        this.dx = 0;
    }
    
    loadHills(){
        while(this.hills.length < 255){
            let hill = Math.floor(Math.random() * 255);
            this.hills.push(hill);
        }
    }

    update(deltaTime){
        this.dx += 10 * this.game.rider.speed;
    }
    
    draw(context){
        context.fillStyle = "#19f";
        context.fillRect(0, 0, this.gameWidth, this.gameHeight);
    
        context.fillStyle = "#000";
        context.beginPath();
        context.moveTo(0, this.gameHeight)
    
        for(let i = 0; i < this.gameWidth; i++){
            context.lineTo(i, this.gameHeight - this.slope(i + this.dx) * 0.25);
        }
        context.lineTo(this.gameWidth, this.gameHeight);
        context.fill();    
        
    }

    lerp(a, b, t){
        return a + (b - a) * (1 - Math.cos(t * Math.PI))/2;
    }

    slope(x){
        x = x * 0.01 % 255;
        return this.lerp(this.hills[Math.floor(x)], this.hills[Math.ceil(x)], x - Math.floor(x));
    }
}