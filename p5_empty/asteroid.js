function Asteroid(){
 this.pos = createVector(random(width), random(height));
 this.r = 50; 
  this.render = function() {
   trranslate(this.pos.x, this.pos.y);
    ellipse(0,0, this.r*2 );
  }
}
