export default class InputHandler{
    constructor(game) {
        document.addEventListener("keydown", (event) => {
            game.keys[event.key] = 1; 
            switch(event.keyCode){
                case 13:
                    game.start();
                    break;
                }

        });
        
        document.addEventListener("keyup", (event) => {
            game.keys[event.key] = 0;    
        });
    }
     
}