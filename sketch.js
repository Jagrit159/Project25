const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;	

function preload()
{
  	
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;
	 
	dustbin = new Dustbin(800,590,20,150);
	dustbin2 = new Dustbin(1000,590,20,150);
	dustbin3 = new Dustbin(900,650,220,20);
	dustbin4 = new Dustbin2(900,500,20,0.2);
	ground = new Ground(600,660,1200,30);
	paper = new Paper(100,100);


	Engine.run(engine);
  
}


function draw() {
  background(255,255,255);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



