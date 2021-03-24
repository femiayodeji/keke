export default class Sun{
    constructor(game){
        this.game = game;

        this.position = { x: 100, y: 100 };   
        this.radius = 0;
        this.color = "#fceea7";
    }
    
    update(deltaTime){
        let rough = deltaTime.toString().split('.')[1];
        this.radius = rough % 2 == 0 ? 30 : 29.5;
    }

    draw(context){
        context.beginPath();
        context.arc(
            this.position.x,
            this.position.y,
            this.radius,
            Math.PI * 2,
            false
        );
        context.fillStyle = this.color;
        context.fill();
    }
}