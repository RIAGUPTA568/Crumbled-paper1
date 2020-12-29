
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
   World.add(world, ground);
   
var circle;
var Redbox1;
var Redbox2;
var Redbox3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
  world = engine.world;
  
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	//Create the Bodies Here.
	circle = new Circle(400,400,35,23);
 Redbox1= new Redbox(124,330,10,70);
  Redbox2= new Redbox(190,355,150,10);
  Redbox3= new Redbox(270,330,10,70);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  circle.display();
  Redbox1.display();
  Redbox2.display();
  Redbox3.display();
  
  drawSprites();
 
}



