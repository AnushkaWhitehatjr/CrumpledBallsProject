var rect1, rect2, rect3, paper1, ground1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1=new dustbin(width-280,height-90,20,100);
	rect2=new dustbin(width-200,height-50,140,20);
	rect3=new dustbin(width-120,height-90,20,100);
	paper1=new paper(125,height-150,25);
  ground1=new ground(width/2,height-25,width,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect1.display();
  rect2.display();
  rect3.display();
  paper1.display();
  ground1.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:7,y:-7})

  }
}
