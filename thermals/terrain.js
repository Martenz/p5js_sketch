function Terrain (x,y,delta){

  this.pos = createVector(x, y);

  this.update = function (){
    //this.pos.add(this.vel);
  }

  this.render = function() {
    push();
    fill('brown');
    //noFill();
    //stroke('white');
    //strokeWeight(5);
    noStroke();
    translate(this.pos.x, this.pos.y);
    //triangle(-delta/1.5,height-y,0,0,delta/1.5,height-y);
    rect(-delta*1.2/2,0,delta*1.2,(height-y)*2,delta);
    pop();
   }

}
