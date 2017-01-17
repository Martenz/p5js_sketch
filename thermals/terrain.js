function Terrain (x,y,delta){

  this.pos = createVector(x, y);

  this.update = function (){
    //this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    fill('silver');
    //noFill();
    stroke('black');
    strokeWeight(5);
    translate(this.pos.x, this.pos.y);
    triangle(-delta/1.5,height-y,0,0,delta/1.5,height-y);
    pop();
   }

}
