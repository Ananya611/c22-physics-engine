const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var object 
var c1



function setup() {
  createCanvas(800,400);
  engine = Engine.create()
world = engine.world
var options = {
  isStatic: true
}

object = Bodies.rectangle(400,350,800,50,options)
World.add(world,object)

var ball = {
  restitution : 1.0,
  density : 0.4
  
}

c1 = Bodies.circle(100,150,30,ball)
World.add(world,c1)

}



function draw() {
  background(0);  
 Engine.update(engine)
rectMode(CENTER)
rect(object.position.x,object.position.y,800,50)
ellipseMode(RADIUS)
ellipse(c1.position.x,c1.position.y,30,30)

}