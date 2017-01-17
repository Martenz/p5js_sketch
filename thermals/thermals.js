function Thermal(pos_x){
 //this.pos = createVector(random(0,width), height);
 this.img = loadImage("img/therm_up.png");
 this.pos = createVector(pos_x, height);
 this.vel = new p5.Vector(random(-0.25,0.25),random(-0.05,-0.5)*5);//p5.Vector.random2D();
 this.maxvel = new p5.Vector(0.1,-0.5*5);
 this.total = 6;//floor(random(5,15));
 this.thermaltop = random(height*0.01,height*0.8);
 this.r = 5*ceil(1/(this.thermaltop/height));
 this.fillcolor = floor(this.vel.mag()/this.maxvel.mag()*255);

 //console.log(this.fillcolor);

 this.hits = function(theship) {
   if (theship.pos.x + theship.img.width > this.pos.x-this.r && theship.pos.x + theship.img.width < this.pos.x+this.r) {
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
   //fill(this.fillcolor,this.fillcolor,255-this.fillcolor);
   noFill();
   stroke('white');
   translate(this.pos.x, this.pos.y);
   //ellipse(0,0,this.r*2);
   image(this.img, -this.r, -this.r, this.r*2, this.r*2);
   pop();
  }

  this.edges = function() {
    if (this.pos.y <  this.thermaltop) {
      this.pos.y = height;
    }
  }

}
