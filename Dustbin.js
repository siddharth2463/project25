class Dustbin{
    constructor(x,y){
this.x=x;
this.y=y;
this.angle=0;
this.width=100;
this.heightt=100;
this.thickness=10;
this.bBODY=Bodies.rectangle(this.x,this.y,this.width,this.thickness,{isStatic:true})
this.leftBODY=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
Matter.Body.setAngle(this.leftBODY,this.angle)
this.rightBODY=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})
Matter.Body.setAngle(this.rightBODY,this.angle)
World.add(world,this.bBODY)
World.add(world,this.leftBODY)
World.add(world,this.rightBODY)
    }
    display(){
        var bottomPosition = this.bBODY.position;
        var leftPosition = this.leftBODY.position;
        var rightPosition = this.rightBODY.position;
        var angle=this.angle

        push();
        translate(bottomPosition.x,bottomPosition.y);
        angleMode(RADIANS)
        rectMode(CENTER);
        rect(0,0,this.width,this.thickness);
        pop(); 
        push();
        translate(leftPosition.x,leftPosition.y);
        angleMode(RADIANS)
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.thickness,this.height);
        pop();
        push();
        translate(rightPosition.x,rightPosition.y);
        angleMode(RADIANS)
        rotate(-1*angle);
        rectMode(CENTER);
        rect(0,0,this.thickness,this.height);
        pop();  
    }
}