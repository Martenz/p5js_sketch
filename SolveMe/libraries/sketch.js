// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var ship;

function setup() {

  var element = document.getElementById('p5example');
  var positionInfo = element.getBoundingClientRect();
  var height = positionInfo.height;
  var width = positionInfo.width;

  var myCanvas = createCanvas(width,height);
  ship = new Cow();
  myCanvas.parent('p5example');
}

function draw() {
  background('#18bc9c');
  ship.render();
  ship.turn();
  ship.update();
  ship.edges();
  $('canvas').css('width','100%');
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
