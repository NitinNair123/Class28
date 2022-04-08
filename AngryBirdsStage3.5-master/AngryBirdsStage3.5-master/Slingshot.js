class Slingshot{
    constructor(bodyA, ptb){
        var options = {
            bodyA: bodyA,
            pointB:ptb,
            stiffness: 0.04,
            length: 10
        }
        this.abc=ptb
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){

        
        var pointA = this.sling.bodyA.position;
        var pointB = this.abc;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
    
    fly(){
        this.sling.bodyA=null
    }
}