import Topography from "/src/topography";
import Rider from "/src/rider";
import InputHandler from '/src/input';
import { GAMESTATE } from '/src/state';

export default class Game{
    constructor(canvas){
        this.gameWidth = canvas.width;
        this.gameHeight = canvas.height;
        this.gameState = GAMESTATE.MENU;
        this.gameObjects = [];

        this.score = 0;

        this.keys = {};
        new InputHandler(this);       
        
        this.start();
    }
    
    start(){
        this.score = 0;
        this.gameState = GAMESTATE.RACING;
        this.topography = new Topography(this);
        this.rider = new Rider(this);

        this.gameObjects = [this.topography, this.rider];

        this.keys = { ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0,};
    }

    update(deltaTime){
        if(this.gameState !== GAMESTATE.RACING) return;

        this.gameObjects.forEach((object) => {
            object.update(deltaTime);
        });
    }

    draw(context){        
        this.gameObjects.forEach((object) => {
            object.draw(context);
        });

        if(this.gameState === GAMESTATE.STOP){
            this.gameOverScreen(context);
        }
        else if(this.gameState === GAMESTATE.MENU){
            this.menuScreen(context);
        }

        this.scorePanel(context);

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

        context.font = "15px Arial";
        context.fillText(
            "Press ENTER to Restart", 
            this.gameWidth / 2, 
            this.gameHeight / 2 + 40
        );
    }

    menuScreen(context){
        context.rect(0, 0, this.gameWidth, this.gameHeight);
        context.fillStyle = "rgba(0, 0, 0, 1)";
        context.fill();

        context.font = "30px Arial";
        context.fillStyle = "#ffffff";
        context.textAlign = "center";
        context.fillText(
            "Press ENTER to Start", 
            this.gameWidth / 2, 
            this.gameHeight / 2
        );
    }

    scorePanel(context){
        context.font = "15px Arial";
        context.fillStyle = "#ffffff";
        context.textAlign = "left";
        context.fillText(
            `Score: ${this.score}`, 
            10,
            20,
        );
    }

}