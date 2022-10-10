
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;

let engine;
let world;

var plane;
var block1;
var block2;
var block3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options = {isStatic:true}
    plane =  Bodies.rectangle(400, 400, 400, 10, plane_options);
    World.add(world, plane);

    var block1_options = {restiturion: 0.95, frictionAir: 0.01}
	block1 = Bodies.cicrcle(220,10,10,block1_options);
    World.add(world, block1);

    var block2_options = {restiturion: 0.95, frictionAir: 0.01}
	block2 = Bodies.rectangle(110,50,10,10,block2_options);
    World.add(world, block2);

    var block3_options = {restiturion: 0.95, frictionAir: 0.01}
	block3 = Bodies.rectangle(350,50,10,10,block3_options);
    World.add(world, block3);

	Engine.run(engine);
    Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



