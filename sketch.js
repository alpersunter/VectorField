let roboto;
let vf;

function preload() {
  roboto = loadFont("assets/roboto.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  textFont(roboto);
  textSize(width / 20.0);
  textAlign(CENTER, CENTER);
  vf = new VectorField(V, 5.0);
  
  vf.Lenght *= 0.1;
  vf.scaleSpace(0.25);
  vf.ArrowDensity= 8;
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
}

function V(P) {
  let Vx = P.y;
  let Vy = -P.x;
  let Vz = P.z;

  return createVector(Vx, Vy, Vz);
}
