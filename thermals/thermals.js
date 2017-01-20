function Thermal(pos_x,pos_y,wind){
 //this.pos = createVector(random(0,width), height);
 this.img = loadImage("img/therm_up.png");
 this.pos = createVector(pos_x, pos_y);
 this.r = random(0.01*width,0.1*width);
 this.vel = new p5.Vector(wind,random(-0.25,-2.0));//p5.Vector.random2D();
 this.thermaltop = random(height*0.025,height*0.8);

 this.hits = function(theship) {
   if (theship.pos.x + theship.img.width/2 > this.pos.x-this.r && theship.pos.x + theship.img.width/2 < this.pos.x+this.r) {
      //if (theship.pos.y + theship.img.height > this.pos.y*0.95 && theship.pos.y + theship.img.height < this.pos.y*1.05 ){
      if (theship.pos.y + theship.img.height > this.thermaltop){
       return true;
     }else{
       return false;
     }
   }
   return false;
 }

 this.update = function (){
   this.pos.add(this.vel);
 }

 this.render = function() {
   push();
   noFill();
   stroke('white');
   translate(this.pos.x, this.pos.y);
   //ellipse(0,0,this.r*2);
   image(this.img, -this.r, -this.r, this.r*2, this.r*2);
   pop();
  }

  this.edges = function() {
    if (this.pos.y <  this.thermaltop) {
      this.pos.y = pos_y;
      this.pos.x = pos_x;
    }
  }

}
