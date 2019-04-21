# 3D Vector Field Project: Point Charge in Electric Field

My original intention was to create animations about curl and divergence. Then I found myself playing with force fields.

[Live Demo](https://alpersunter.github.io/VectorField/)

  ## PointParticle.js
  Defines a simple point particle.
   - Mass
   - Radius
   - Electrical charge
   - Force field
   - Time scale (1.0 being real time, timeScale > 1 makes physics faster, timeScale < 1 makes physics slower)
    
   ### Example Code
    
    ```
    // ForceField(vector) returns another vector
    let ForceField = (vec) => createVector(vec.x, -vec.y, 0);
    let testParticle = new PointParticle(ForceField);
    
    // slow down time for testParticle
    testParticle.timeScale *= 0.5;
    
    // update acceleration, velocity and location
    testParticle.update();
    
    // draw the ball in its current location with velocity vector
    testParticle.show();
    
    // decide whether the particle is free from physics or not
    // particle stops obeying physics and stops where it was
    testParticle.free = true;
    // particle continues obeying physics (hence updating its acceleration, velocity and location)
    testParticle.free = false;
    
    // If the particle is in "free=true" state, these can change its location in space
    testParticle.Up(); // negative y direction
    testParticle.Down(); // positive y direction
    testParticle.Left(); // negative x
    testParticle.Right(); // positive x
    testParticle.Forward(); // positive z
    testParticle.Backward(); // negative z
    ```

  ## VectorField.js
  For a given vector function V, draws samples of V in some part of the space.
   - Vector function
   - X, Y, Z limits
   - Arrow length
   - Arrow density

  ## SpaceCodes.js
  Useful codes for drawing in space.
   - `PointYTo(vec)` rotates XYZ axes so that new Y axis is now pointing along vector vec (which coordinates are with respect to space prior to rotations).
   - `arrow3D(vec)` draws an arrow for a given vector.
   - `axes(planesVisible)` draws X, Y and Z axes with the option to show XY YZ XZ planes (axes(true) or axes(false))
    
