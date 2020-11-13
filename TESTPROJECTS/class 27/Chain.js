class Chain{
    constructor(bodyA,bodyB){
        this.chain = Constraint.create({
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.75,
            length : 10
        })

        World.add(world,this.chain);

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

       strokeWeight(3);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}
