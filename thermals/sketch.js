// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var ship;
var thermals = [];
var maxthermals = 1000;

function setup() {
  createCanvas(windowWidth,windowHeight);
  ship = new Paraglide();
  for (var i = 0; i < maxthermals; i++){
    thermals.push(new Thermal());
  }
}

function draw() {
  background(0);
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();

  for (var i = 0; i < thermals.length; i++) {
   thermals[i].render();
   thermals[i].update();
   thermals[i].edges();
  }
}

function keyReleased(){
  ship.setRotation(0);
  ship.boosting(false);
}

function keyPressed() {
  if (key == ' ') {
    //console.log("SPACE");
  }else
  if (keyCode == RIGHT_ARROW){
    ship.setRotation(0.1);
  }else
  if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  }else
  if (keyCode == UP_ARROW){
    ship.boosting(true);
  }

}
