class PointParticle{

    constructor(velocityFunction){
        this.locationVector = createVector(0, 0, 0);
        this.VelocityFunction = velocityFunction;
    }

    update(){
        this.locationVector = this.locationVector.add(this.VelocityFunction(this.locationVector).mult(4/frameRate()));

        
    }

    show(){
        push();
        translate(this.locationVector);
        noStroke();
        fill(255, 255, 255, 200);
        sphere(height/50.0);
        pop();
    }


}