function Tree(x,y){

  this.pos = createVector(x, y);
  this.img = loadImage("img/tree.png");
  this.rx = width/10;
  this.ry = height/10;

  this.update = function (){
    //this.pos.add(this.vel);
  }

  this.hits = function(theship) {
    if (theship.pos.x  > this.pos.x - this.rx && theship.pos.x < this.pos.x + this.rx) {
       //if (theship.pos.y + theship.img.height > this.pos.y*0.95 && theship.pos.y + theship.img.height < this.pos.y*1.05 ){
       if (theship.pos.y + theship.img.height/2 > this.pos.y){
        return true;
      }else{
        return false;
      }
    }
    return false;
  }

  this.render = function() {
    push();
    translate(this.pos.x,this.pos.y);
    image(this.img, -this.rx/2, -this.ry, this.rx, this.ry);
    pop();
  }

}
