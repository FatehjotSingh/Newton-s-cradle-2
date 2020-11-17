class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.5,
          friction:0.7,
          density:1.2
      }
      this.body = Bodies.circle(x,y,20,options);
      this.radius=20
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      fill(0);
      stroke("lightblue")
      ellipse(this.body.position.x,this.body.position.y, this.radius);
    }
  };