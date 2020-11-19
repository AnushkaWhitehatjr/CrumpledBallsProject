class paper 
{
    constructor(x,y,radius)
    {
        var paper_options={
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,paper_options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        fill("lightblue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,25);
    }
}