class Paper{
    constructor(x, y, radius ) {
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.radius = 20;
        World.add(world, this.body);
      }
      display(){
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("purple")
        ellipse(0,0, this.radius,this.radius);
        pop();
      }
}