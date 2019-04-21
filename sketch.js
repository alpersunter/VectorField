
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

  keyboardControl(ball);

  ball.update();
  ball.show();
}

function E(P) {
  let Vx = P.y+1;
  let Vy = -P.x;
  let Vz = P.z;

  return createVector(Vx, Vy, Vz);
}

function keyboardControl(b){
  if(keyIsDown(UP_ARROW)) b.Up();
  if(keyIsDown(DOWN_ARROW)) b.Down();
  if(keyIsDown(LEFT_ARROW)) b.Left();
  if(keyIsDown(RIGHT_ARROW)) b.Right(); 
  // 70 and 16 are keyCodes for f and Shift
  if(keyIsDown(70)&&!keyIsDown(16)) b.free = true;
  if(keyIsDown(16)&&keyIsDown(70)) b.free = false;
  // 107 and 187 are keyCodes for +
  if(keyIsDown(107) || keyIsDown(187)) b.Forward();
  // 109 and 189 are keyCodes for -
  if(keyIsDown(109) || keyIsDown(189)) b.Backward();
  // 82 r
  if(keyIsDown(82)) b.Reset();
  // 65 a
  if(keyIsDown(65)) b.timeScale *= 0.5;
  // 81 q
  if(keyIsDown(81)) b.timeScale *= 2.0;
}

function keyPressed(){
  // if(key === 'f'){
  //   ball.free = true;
  // }
  // if(key === 'F'){
  //   ball.free = false;
  // }

  
  // if(keyCode === UP_ARROW) ball.Up();
  // if(keyCode === DOWN_ARROW) ball.Down();
  // if(keyCode === LEFT_ARROW) ball.Left();
  // if(keyCode === RIGHT_ARROW) ball.Right(); 
  // if(key === '+') ball.Forward();
  // if(key === '-') ball.Backward();
  // if(key === 'r') ball.Reset();
  // if(key ==='a') ball.timeScale *= 0.5;
  // if(key ==='q') ball.timeScale *= 2.0;
}