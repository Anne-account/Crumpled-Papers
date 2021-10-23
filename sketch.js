const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, paperObject,groundObject	
var world;
var dus1,dus2,dus3;

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);
	
	dus1 = new Dustbin(1240,620,20,150);
	dus2 = new Dustbin(1160,670,150,150);
	dus3 = new Dustbin(1100,620,20,150);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}
function draw() {

  background(255);
  rectMode(CENTER);
  paperObject.display();
  groundObject.display();
 // dus1.display();
  dus2.display();
 // dus3.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW)
	   {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  	}
}





