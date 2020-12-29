class Circle {
    constructor(x, y) {
      var options = {
        'density':1.2,
        'friction': 0.5,
        'restitution':0.3
      };
      this.body = Bodies.circle(x, y,  10, options);
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('pink')
      fill('pink')
      ellipseMode(RADIUS)
      ellipse(0, 0, this.r, this.r);
      pop();
    };
  };
  