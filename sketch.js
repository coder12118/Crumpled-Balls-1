
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ground;
var paper;

function preload()
{
	//dustbinImg = loadImage("wood1.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 380, 800, 20);
	binBase = new Ground(600, 360, 200, 20);
	binLeft = new Ground(490, 295, 20, 150);
  binRight = new Ground(700, 295, 20, 150);
  paper = new Paper(100, 300, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  binBase.display();
  binLeft.display();
  binRight.display();
  paper.display();
  //image(dustbinImg, 600, 360, 200, 200)
  
  //drawSprites();
}
  function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body, paper.body.position,{x:15, y:-15});
    }
  }
 




