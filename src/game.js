import Topography from "/src/topography";
import Rider from "/src/rider";
import InputHandler from '/src/input';
import { GAMESTATE } from '/src/state';

export default class Game{
    constructor(canvas){
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.gameState = GAMESTATE.RACING;
        this.gameObjects = [];

        this.topography = new Topography(this);
        this.rider = new Rider(this);

        this.keys = { ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0,};
        new InputHandler(this);        

        this.start();
    }
    
    start(){
        this.gameObjects = [this.topography, this.rider];
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

        if(this.gameState == GAMESTATE.STOP){
            this.gameOverScreen(context);
        }

    }

    gameOverScreen(context){
        context.rect(0, 0, this.gameWidth, this.gameHeight);
        context.fillStyle = "rgba(255, 0, 0, 1)";
        context.fill();

        context.font = "30px Arial";
        context.fillStyle = "#ffffff";
        context.textAlign = "center";
        context.fillText(
            "GAME OVER", 
            this.gameWidth / 2, 
            this.gameHeight / 2
        );
    }


}