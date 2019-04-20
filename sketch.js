
let vf;
let ball;

let myCanvas;
function setup() {
  myCanvas = createCanvas(windowWidth*0.9, windowHeight, WEBGL);
  myCanvas.parent("myCanvas");
  vf = new VectorField(E, 5.0);
  vf.Lenght *= 0.1;
  vf.scaleSpace(0.25);
  vf.ArrowDensity= 8;
  ball = new PointParticle(E);
  ball.timeScale *= 0.5;
}

function draw() {
  orbitControl();
  background(20);
  axes(false);
  fill(255, 0, 255,50);
  push();
  scale(4);
  vf.show();
  pop();
  noFill();
  ball.update();
  ball.show();
}

function E(P) {
  let Vx = P.y+1;
  let Vy = -P.x;
  let Vz = P.z;

  return createVector(Vx, Vy, Vz);
}

function keyPressed(){
  if(key === 'f'){
    ball.free = true;
  }
  if(key === 'F'){
    ball.free = false;
  }

  
  if(keyCode === UP_ARROW) ball.Up();
  if(keyCode === DOWN_ARROW) ball.Down();
  if(keyCode === LEFT_ARROW) ball.Left();
  if(keyCode === RIGHT_ARROW) ball.Right();
  if(key === '+') ball.Forward();
  if(key === '-') ball.Backward();
  if(key === 'r') ball.Reset();
  if(key ==='a') ball.timeScale *= 0.5;
  if(key ==='q') ball.timeScale *= 2.0;
}