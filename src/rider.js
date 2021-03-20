export default class Rider{
    constructor(game){
        this.position = { x: game.gameWidth/2, y: 0 };        
        this.image = document.getElementById("img-rider");        
        this.size = 32;
    }

    update(deltaTime){

    }

    draw(context){
        context.drawImage(this.image, 10, 10, this.size, this.size);
    }
}