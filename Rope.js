class Rope{
    constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 250
    }
    this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world, this.sling);

    }
    display(){
    if(this.sling.bodyA){
var pointA = this.sling.bodyA.position;
var pointB = this.pointB
    push()
    strokeWeight(4)
    stroke("black")
    line(pointA.x, pointA.y, pointB.x, pointB.y)
    pop()
    }
    }
    fly(){
    this.sling.bodyA = null
    }
}
