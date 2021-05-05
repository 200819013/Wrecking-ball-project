class Ball{
    constructor(x, y, radius){
    
    
         var options = {
              'friction':1.0,
              'density':1.0
          }
          this.body = Bodies.circle(x, y, radius, options);
          this.radius = radius;
          World.add(world, this.body);
        }
        display(){
          var angle = this.body.angle;
          //this.body.position.x = mouseX;
          //this.body.position.y = mouseY;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
         ellipseMode(RADIUS)
         stroke("brown")
         fill("red")
         strokeWeight(4)
         //We are adding radius twice to get a perfect circle
         ellipse(0,0, this.radius, this.radius)
          pop();
        }
  };
  