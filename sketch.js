const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var Circle;

var box1, box2;

var ground

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,50,50)
  box2 = new Box(240,100,50,100)

  ground = new Ground()

//JSON
 /* var ground_option = {
    isStatic: true
  }

  object =Bodies.rectangle(200,350,400,20,ground_option)
  World.add(world,object);

    var circle_option = {
    restitution: 1
  }
  Circle  = Bodies.circle(200,100,15,circle_option)
  World.add(world,Circle); */
}

function draw() {
  background(0);
  Engine.update(engine)
  
  box1.display();
  box2.display();

  ground.display();
  /*rectMode(CENTER) 
  rect(object.position.x,object.position.y,400,20) 

  ellipseMode(RADIUS);
  ellipse(Circle.position.x,Circle.position.y,15,15) */
  
}