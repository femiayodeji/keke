export default class Rider{
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = { x: this.gameWidth/2, y: 0 };   
        this.dy = 0;

        this.image = document.getElementById("img-rider");        
        this.size = 30;
    }

    update(deltaTime){
        let topography = this.game.topography;
        let point = this.gameHeight - topography.slope(this.position.x + topography.dx) * 0.25;
        
        if(this.position.y < point - 36){
            this.dy += 0.2;
        }
        else{
            this.dy -= this.position.y - (point - 36);
            this.position.y = point - 36;
        }
        this.position.y += this.dy;

    }

    draw(context){
        context.save();
        context.translate(this.position.x, this.position.y);
        context.drawImage(this.image, -15, 10, this.size + 4, this.size);
        context.restore();
    }
}