function Asteroid(){
 this.pos = createVector(random(width), random(height));
 this.r = random(floor(width/10),floor(width/3)); 
 this.total = floor(random(5,15));
 
 this.render = function() {
   push();
   translate(this.pos.x, this.pos.y);
   //ellipse(0,0, this.r*2 );
   beginShape();
   for (var i = 0; i < this.total; i++ ) {
     var angle = map(i, 0, this.total, 0, TWO_PI);
     var x = this.r * cos(angle);
     var y = this.r * sin(angle);
     vertex(x,y);
   }
   endShape(CLOSE);
   
   pop();
  }
}
