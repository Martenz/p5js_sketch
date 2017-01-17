// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var ship;
var thermals = [];
var maxthermals = 5;
var delta_w = 0;
var bg;
var terrain = [];
var trees = [];
var random_y = 0;

console.log(delta_w);
function setup() {
  bg = loadImage("img/bg.png");
  createCanvas(windowWidth,windowHeight);
  ship = new Paraglide();
  delta_w = (width/maxthermals);
  for (var i = 0; i < maxthermals; i++){
    thermals.push(new Thermal(delta_w*i));
    random_y = random(height*0.75,height);
    trees.push(new Tree(delta_w*i,random_y));
    terrain.push(new Terrain(delta_w*i,random_y,delta_w));

  }
}

function draw() {

  background(bg);
  //background(0);
  //fill('rgba(150, 150, 150, 0.9)');
  //rect(0,height-ship.img.height,width,ship.img.height,0,0,0,0);
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

  for (var i = 0; i < trees.length; i++){
    terrain[i].render();
    trees[i].render();

    if (trees[i].hits(ship)){
      ship.landed = true;
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
    ship.setRotation(0.01);
  }else
  if (keyCode == LEFT_ARROW){
    ship.setRotation(-0.01);
  }else
  if (keyCode == UP_ARROW){
    ship.boosting(true);
  }else
  if (keyCode == DOWN_ARROW){
    ship.braking(true);
  }

}