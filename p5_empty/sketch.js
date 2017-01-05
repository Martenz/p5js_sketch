// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var ship;

function setup() {
  createCanvas(windowWidth,windowHeight);
  ship = new Ship();
}

function draw() {
  background(0);


}

function Ship() {
  this.pos = createVector(widt/2, height/2);
  this.r = 10;
  this.render = function() {
    triangle(-this.r,this.r,this.r, this.r,0,-this.r);
  }
}

function keyPressed() {
  if (key == ' ') {
    //console.log("SPACE");
  }
  
}
