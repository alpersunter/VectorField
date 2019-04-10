class VectorField{

  constructor(vecFunc, arrDens) {
    this.MAX_X = height / 2;
    this.MIN_X = -height / 2;
    this.MAX_Y = height / 2;
    this.MIN_Y = -height / 2;
    this.MAX_Z = height / 4;
    this.MIN_Z = -height / 4;
    this.Lenght = width / 10.0;
    this.VectorFunction = vecFunc;
    this.ArrowDensity = arrDens;
  }

  scaleSpace(scl) {
    this.MAX_X *= scl;
    this.MIN_X *= scl;
    this.MAX_Y *= scl;
    this.MIN_Y *= scl;
    this.MAX_Z *= scl;
    this.MIN_Z *= scl;
  }
 
  show() {
    // ekrana ilgili ok yoğunluğuna sahip bir biçimde vector field'ı çizdir
  
    for (let i_x = this.MIN_X; i_x <= this.MAX_X; i_x += (this.MAX_X - this.MIN_X) / this.ArrowDensity) {
      for (let i_y = this.MIN_Y; i_y <= this.MAX_Y; i_y += (this.MAX_Y - this.MIN_Y) / this.ArrowDensity) {
        for (let i_z = this.MIN_Z; i_z <= this.MAX_Z; i_z += (this.MAX_Z - this.MIN_Z) / this.ArrowDensity) {
          push();
          translate(i_x, i_y, i_z);
          this.VectorFunction(createVector(i_x, i_y, i_z)).normalize().mult(this.Lenght).show();
          pop();
        }
      }
    }
  }


}