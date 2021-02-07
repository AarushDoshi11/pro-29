const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,box4,box5,box6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = createSprite(100,200,30,10);
    box1.shapeColor  = "black";

	box2 = createSprite(200,250,30,10);
    box2.shapeColor  = "green";

	box3 = createSprite(300,300,30,10);
    box3.shapeColor  = "green";

	box4 = createSprite(400,350,30,10);
    box4.shapeColor  = "red";

	box5 = createSprite(500,400,30,10);
    box5.shapeColor  = "red";

	box6 = createSprite(600,450,30,10);
    box6.shapeColor  = "red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
  
 
}



