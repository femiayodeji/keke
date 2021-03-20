import Topography from '/src/topography';

export default class Game{
    constructor(canvas){
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.gameObjects = [];

        this.topography = new Topography(this);
        this.start();
    }
    
    start(){
        this.gameObjects = [this.topography];
    }

    update(deltaTime){
        this.gameObjects.forEach((object) => {
            object.update(deltaTime);
        });
    }

    draw(context){        
        this.gameObjects.forEach((object) => {
            object.draw(context);
        });
    }

}