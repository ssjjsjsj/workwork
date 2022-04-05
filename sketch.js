//수업실습

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
 let r = map(mouseX, 0 ,windowWidth, 0, 255);
  let b = map(mouseY, 0 ,windowWidth, 0, 255);
  fill(r,0,b,50);
  stroke(r/2,0,b/2,30);
  ellipse(mouseX,mouseY,150,150);
}

function windowResized (){
  resizeCanvas(windowWidth, windowHeight);
}