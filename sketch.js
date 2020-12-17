
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin;
var paper; 
var ground;




function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin=new Dustbin(650,620);
	paper=new Paper(100,300,50);
	ground=new Ground(width/2,630,width,10);
	


	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  
  paper.display();
  dustbin.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});

}

}

