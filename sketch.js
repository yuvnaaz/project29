
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1000,800);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

    var groundObj;
    var boxObj, blocks;
    var block1,block,block3, block4,block5,block6,block7,block8,block9,block10,block11,block12;
    var slingshot;
            
    ground = new Ground(500,400,100,20);
    block1 = new block(400,350,20,40);
    block2 = new block(400,400,20,40);
    block3 = new block(400,450,20,40);
    block4 = new block(400,500,20,40);
    block5 = new block(400,550,20,40);
    block6 = new block(400,600,20,40);
    block7 = new block(400,650,20,40);
    block8 = new block(400,700,20,40);
    block9 = new block(400,750,20,40);
    block10 = new block(400,800,20,40);
    block11 = new block(400,850,20,40);
    block12 = new block(400,900,20,40);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}