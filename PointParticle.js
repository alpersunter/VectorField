class PointParticle{


    constructor(electricFieldFunction){
        this.locationVector = createVector(0, 0, 0);
        //this.VelocityFunction = velocityFunction;
        this.ElectricalField = electricFieldFunction;
        this.Velocity = createVector(0, 0, 0);
        this.Charge = +1.0;
        this.Mass = +1.0;
        this.free = false;
        this.timeScale = 1.0;
    }

    // force is a vector
    Force(){
        return this.ElectricalField(this.locationVector).mult(this.Charge);
    }

    // acceleraton is force scaled down by mass
    Acceleration(){
        return (this.Force()).mult(1/this.Mass);
    }

    update(){
        //if(!this.free) this.locationVector = this.locationVector.add(this.VelocityFunction(this.locationVector).mult(4/frameRate()));
        if(!this.free){
            this.Velocity = this.Velocity.add(this.Acceleration().mult(this.timeScale));
            this.locationVector = this.locationVector.add(this.Velocity.mult(this.timeScale));
        }
    }

    show(){
        push();
        translate(this.locationVector);
        noStroke();
        fill(0,255,0,200);
        arrow3D(this.Velocity.normalize().mult(50));
        fill(255, 255, 255, 200);
        sphere(height/50.0);
        pop();
    }

    Up(){
        if(this.free) this.locationVector.y -= 20;
    }
    Down(){
        if(this.free) this.locationVector.y += 20;
    }
    Forward(){
        if(this.free) this.locationVector.z += 20;
    }
    Backward(){
        if(this.free) this.locationVector.z -= 20;
    }
    Left(){
        if(this.free) this.locationVector.x -= 20;
    }
    Right(){
        if(this.free) this.locationVector.x += 20;
    }
    Reset(){
        this.locationVector = createVector(0, 0, 0);
        this.Velocity = createVector(0, 0, 0);
    }

}