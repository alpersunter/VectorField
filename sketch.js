
let vf;
let ball;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  vf = new VectorField(V, 5.0);
  vf.Lenght *= 0.1;
  vf.scaleSpace(0.25);
  vf.ArrowDensity= 8;
  ball = new PointParticle(V);
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

function V(P) {
  let Vx = P.y+1;
  let Vy = -P.x;
  let Vz = P.z;

  return createVector(Vx, Vy, Vz);
}
