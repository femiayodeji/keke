export default class Rider{
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = { x: this.gameWidth/2, y: 0 };   
        this.dy = 0;
        this.rotation = 0;
        this.spinRate = 0;

        this.image = document.getElementById("img-rider");        
        this.size = 30;
    }

    update(deltaTime){
        let topography = this.game.topography;
        let point = this.gameHeight - topography.slope(this.position.x + topography.dx) * 0.25;
        let nextPoint = this.gameHeight - topography.slope(this.position.x + topography.dx + 5) * 0.25;
        let grounded = false;

        if(this.position.y < point - 15){
            this.dy += 0.2;
        }
        else{
            this.dy -= this.position.y - (point - 15);
            this.position.y = point - 15;
            grounded = true;
        }

        let angle = Math.atan2((nextPoint - 15) - this.position.y, (this.position.x + 5) - this.position.x);
        this.position.y += this.dy;

        if(grounded){
            this.rotation -= (this.rotation - angle) * 0.5;
            this.spinRate = this.spinRate - (angle - this.rotation);
        }
        this.rotation -= this.spinRate * 0.5;

    }

    draw(context){
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.rotation);
        context.drawImage(this.image, -15, -15, this.size + 4, this.size);
        context.restore();
    }
}