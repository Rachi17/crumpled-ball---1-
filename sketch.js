
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var  paper1,bin1,bin2,bin3;	
var world;


function setup() {
	createCanvas(1440, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paper1=new paper(200,450,40);
	
	bin1=new Dustbin(1200,540,20,200)
	bin2=new Dustbin(1120,630,150,20)
	bin3=new Dustbin(1050,540,20,200)
	ground1 =new Ground(700,650, width,10);
	

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();

 }

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  	}
}
