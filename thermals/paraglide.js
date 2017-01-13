function Paraglide() {
  this.img = loadImage("img/parag.png");
  this.imgLanded = loadImage("img/doh.png");
  this.pos = createVector(width/30, height/20);
  this.imgFact = 1;
  this.r = this.img.height*this.imgFact;
  this.heading = 0;
  this.rotation = 0;
  this.rateoDown = 0.5;
  this.maxVel = 2;
  this.vel = createVector(1,0);
  this.isBoosting = false;
  this.isBraking = false;
  this.isRising = 0;
  this.landed = false;
  this.thermalRaise = 0;

  this.boosting = function(b){
   this.isBoosting = b;
  }
  this.braking = function(b){
   this.isBraking = b;
  }
  this.thermalRaising = function(b){
    this.isRising = b;
  }


  this.update = function(){
    if (this.isBoosting) {
      this.boost();
    }
    if (this.isBraking) {
      this.brake();
    }
    this.pos.add(this.vel);

    if (this.vel.x <=this.rateoDown){
      //stall
      this.vel.y = this.rateoDown + this.vel.y/0.99;
    }else{
      if (this.isRising != 0){
        this.raise(this.isRising);
        this.isRising = 0;
      }else{
        this.vel.y = this.rateoDown;
      }
    }

    console.log(this.vel.x);
  }

  this.boost = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    if (this.vel.x < this.maxVel){
      this.vel.add(force);
    }
  }
  this.brake = function() {
    var force = p5.Vector.fromAngle(PI + this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }
  this.raise = function(v){
    var force = p5.Vector.fromAngle(PI/2 + this.heading);
    force.mult(v*0.025);
    console.log(v);
    this.vel.add(force);
  }


  this.render = function() {
    push();
    translate(this.pos.x,this.pos.y);
    rotate(this.heading);
    //noFill();
    //stroke(255);
    //triangle(-this.r,this.r,this.r, this.r,0,-this.r);
    if (!this.landed){
      image(this.img, this.img.width/2, this.img.height/2, this.img.width*this.imgFact, this.img.height*this.imgFact);
    }else{
      image(this.imgLanded, this.img.width/2, this.img.height/2, this.img.width*this.imgFact, this.img.height*this.imgFact);
    }
    pop();
  }

  this.edges = function() {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height- this.img.height*this.imgFact*2) {
      //this.pos.y = -this.r;
      this.pos.y = height - this.img.height*this.imgFact*2;
      this.landed = true;
    }else if (this.pos.y < -this.r) {
      this.pos.y = -this.r;
    }
  }

  this.setRotation = function(a) {
    this.rotation = a;
  }

  this.turn = function(){
    this.heading += this.rotation;
  }
}
