
let vf;
let ball;

let myCanvas;
function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight*0.9, WEBGL);
  myCanvas.parent("myCanvas");
  vf = new VectorField(E, 5.0);
  vf.Lenght *= 0.1;
  vf.scaleSpace(0.25);
  vf.ArrowDensity= 8;
  ball = new PointParticle(E);
  ball.timeScale *= 0.5;
}

function draw() {
  // P noktasına bırakılan bir top, vekörleri hızı kabul etsin ve ona göre hareket etsin
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
  // if(key === 'x'){
  //   ball.moveX(mouseX - width/2);
  // }
  // if(key === 'y'){
  //   ball.moveY(mouseX - width/2);
  // }
  // if(key === 'z'){
  //   ball.moveZ(mouseX - width/2);
  // }
  
  if(keyCode === UP_ARROW) ball.Up();
  if(keyCode === DOWN_ARROW) ball.Down();
  if(keyCode === LEFT_ARROW) ball.Left();
  if(keyCode === RIGHT_ARROW) ball.Right();
  if(key === '+') ball.Forward();
  if(key === '-') ball.Backward();
  if(key === 'r') ball.Reset();
}