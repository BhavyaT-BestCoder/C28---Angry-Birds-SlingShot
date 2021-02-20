class SlingShot {
    constructor(body1,point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 20,
            stiffness: 0.2

        }
        this.SlingShot = Matter.Constraint.create(options)
        World.add(world,this.SlingShot);
        this.pointB= point2;
   
   

    }
    display() {
        strokeWeight(5)
        if(this.SlingShot.bodyA){
            var pointA = this.SlingShot.bodyA.position
            var pointB = this.pointB
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    fly () {
        this.SlingShot.bodyA=null;
    }
}