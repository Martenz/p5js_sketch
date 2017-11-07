
function Cow() {
  //this.pos = createVector(width/2, height/2);
  this.pos = createVector(-width/2, height/2);
  this.r = floor(width/50);
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0,0);
  this.isBoosting = false;
  this.solution = "";
  this.weigths = "";
  this.label = "42";

  this.img = loadImage("./img/cow.png");

  this.boosting = function(b){
   this.isBoosting = b;
  }

  this.update = function(){
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }

  this.boost = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }

  this.render = function() {
    push();
    translate(this.pos.x,this.pos.y);
    //rotate(this.heading + PI /2);
    noFill();
    stroke(255);
    //triangle(-this.r,this.r,this.r, this.r,0,-this.r);
    image(this.img, -this.img.width/2, -this.img.height/2);
    textSize(32);
    text(this.label, -this.img.width/2, this.img.height);
    text(this.solution, this.img.width/2, 0);
    text(this.weigths, -this.img.width/2, -this.img.height);
    fill(0, 102, 153);
    pop();
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  this.setRotation = function(a) {
    this.rotation = a;
  }

  this.turn = function(){
    this.heading += this.rotation;
  }
}
