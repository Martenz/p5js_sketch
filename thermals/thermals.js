function Thermal(){
 this.pos = createVector(random(0,width), height);
 this.vel = new p5.Vector(random(0.01,0.1),random(-0.05,-0.5)*10);//p5.Vector.random2D();
 this.maxvel = new p5.Vector(0.1,-0.5*10);
 this.r = random(2,5);
 this.total = 6;//floor(random(5,15));
 this.offset = [];
 this.thermaltop = random(0,height*1.5);
 this.fillcolor = floor(this.thermaltop/height*1.5 * this.vel.mag()/this.maxvel.mag()*255);
 console.log(this.fillcolor);

 for (var i = 0; i < this.total; i++){
   this.offset[i] = random(-0,0);
 }

 this.update = function (){
   this.pos.add(this.vel);
 }

 this.render = function() {
   push();
   fill(this.fillcolor,this.fillcolor,255-this.fillcolor);
   translate(this.pos.x, this.pos.y);
   ellipse(0,0,this.r*2);
   pop();
  }

  this.edges = function() {
    if (this.pos.y <  this.thermaltop) {
      this.pos.y = height*1.1;
    }
  }

}
