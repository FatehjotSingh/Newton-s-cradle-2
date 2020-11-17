class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 100
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    
        }

    display(){
        push();
        stroke("lightblue")
        fill("lightblue")
        line(this.bodyA.x,this.bodyA.y,this.pointB.x,this.pointB.y)              
        pop();
        }
    }
    
