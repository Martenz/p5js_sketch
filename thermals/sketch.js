// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var ship;
var thermals = [];
var maxthermals = 10;


function setup() {
  createCanvas(windowWidth,windowHeight);
  ship = new Paraglide();
  for (var i = 0; i < maxthermals; i++){
    thermals.push(new Thermal());
  }
}

function draw() {
  background(0);
  fill('rgba(150, 150, 150, 0.9)');
  rect(0,height-ship.img.height,width,ship.img.height,0,0,0,0);
  ship.render();
  if (!ship.landed){
    ship.turn();
    ship.update();
    ship.edges();
  }
  for (var i = 0; i < thermals.length; i++) {
   thermals[i].render();
   thermals[i].update();
   thermals[i].edges();

   if (thermals[i].hits(ship)) {
     //console.log("HIT");
     ship.thermalRaising(thermals[i].vel.y);
   }
  }
}

function keyReleased(){
  ship.setRotation(0);
  ship.boosting(false);
  ship.braking(false);
}

function keyPressed() {
  if (key == ' ') {
    //console.log("SPACE");
  }else
  if (keyCode == RIGHT_ARROW){
    //ship.setRotation(0.1);
  }else
  if (keyCode == LEFT_ARROW){
    //ship.setRotation(-0.1);
  }else
  if (keyCode == UP_ARROW){
    ship.boosting(true);
  }else
  if (keyCode == DOWN_ARROW){
    ship.braking(true);
  }

}
