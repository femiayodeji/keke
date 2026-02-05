export default class InputHandler{
    constructor(game) {
        document.addEventListener("keydown", (event) => {
            game.keys[event.key] = 1;
        });
        
        document.addEventListener("keyup", (event) => {
            game.keys[event.key] = 0;    
        });
    }
}