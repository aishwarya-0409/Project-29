
class Block
{
    constructor(x,y,width,height)
    {
        var options=
        {
          'friction':0.2,
          //'density':0.2   
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display()
    {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(pos.x ,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
};