class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        this.image = loadImage("sprites/paper.png")
        }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            imageMode(CENTER);
            image(this.image, 0, 0);
            pop();
        }

    }
