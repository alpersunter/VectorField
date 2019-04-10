function pointYTo(vector) {

  if (vector.y == 0 && vector.x == 0) {
    if (vector.z >= 0) {
      rotateX(HALF_PI);
    } else {
      rotateX(-HALF_PI);
    }
    return;
  }

  let XY = createVector(vector.x, vector.y);
  let zAngle = XY.angleBetween(createVector(0, 1));
  if (vector.x >= 0) {
    rotateZ(-zAngle);
  } else {
    rotateZ(zAngle);
  }

  let xAngle = vector.angleBetween(XY);
  if (vector.z >= 0) {
    rotateX(xAngle);
  } else {
    rotateX(-xAngle);
  }

}

p5.Vector.prototype.show = function () {
  arrow3D(this);
}

function arrow3D(vector) {

  push();

  // Eski halinde vektörü line ile çiziyordu. Artık silindir ile çizecek.
  //line(0, 0, 0, vector.x, vector.y, vector.z);
  push();
  translate(p5.Vector.mult(vector, 0.5));
  pointYTo(vector);
  noStroke();
  // silindirin yarıçapı, büyüklüğünün 90'da biri kadar
  cylinder(vector.mag() / 90.0, vector.mag());
  pop();


  translate(vector);

  pointYTo(vector);

  let r = vector.mag() / 25.0;
  noStroke();
  cone(r, r * 1.732);
  pop();

}


function axes(planesVisible) {

  if (planesVisible) {
    // XY PLANE: XYZ = RGB so XY plane will be REDGREEN
    fill(255, 255, 0, 30);
    rect(-width / 2, -height / 2, width, height);
    

    // ZX PLANE: ZX plane will ve REDBLUE
    push();
    rotateX(HALF_PI);
    fill(255, 0, 255, 30);
    rect(-width / 2, -height / 2, width, height);
    pop();


    // YZ PLANE: YZ PLANE WILL BE GREENBLUE
    push();
    rotateY(HALF_PI);
    fill(0, 255, 255, 30);
    rect(-width / 2, -height / 2, width, height);
    
    pop();

  }

  push();


  // Axes
  strokeWeight(2);
  // X axis
  stroke(255, 0, 0, 200);
  fill(255, 0, 0, 200);
  arrow3D(createVector(width / 5, 0));

  // Y axis
  stroke(0, 255, 0, 200);
  fill(0, 255, 0, 200);
  arrow3D(createVector(0, width / 5));
  push();

  // Z axis
  stroke(0, 0, 255, 200);
  fill(0, 0, 255, 200);
  arrow3D(createVector(0, 0, width / 5));
  pop();

  pop();
}