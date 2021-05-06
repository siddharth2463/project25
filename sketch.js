
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
var paper,ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,450,20)
ground=new Ground(width/2,670,width,20)
dustbin=new Dustbin(600,650)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display()
dustbin.display();
paper.display();
 
}
function keyPressed(){
	if((keyCode===UP_ARROW)){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:30, y:-25});
		
	}	
}



