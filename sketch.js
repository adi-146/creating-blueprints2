const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var ball;
var ground;
var box1,box2;
var pig1;
var log1;
function setup() {
  createCanvas(1200,400);
 // create an engine
 engine = Engine.create();

  // create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options:{
    width:1200,
  height:400,
  wireframes:false
  }
  
});
ground=new Ground(600,390,1200,20);
box1 =new Box(700,320,70,70);
box2=new Box(920,320,70,70);
pig1 = new Pig(810,350);
log1=new Log(800,260,400,PI/4);
// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
}
function draw() {
  background(255,255,200);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
}