const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var base1,base2;
var ground;
var polygon;
var block;
var blocks;

function preload(){
 polygon = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(450,400,1000,20)
    base1 =new Stand(390,300,250,10);
    //levelone
    block1=new Block(300,275,30,40);
    block2= new Block(330,275,30,40);
    block3= new Block(360,275,30,40);
    block4= new Block(390,275,30,40);
    block5= new Block(420,275,30,40);
    block6= new Block(450,275,30,40);
    block7= new Block(480,275,30,40);
    //leveltwo
    block8= new Block(330,235,30,40);
    block9= new Block(360,235,30,40);
    block10= new Block(390,235,30,40);
    block11= new Block(420,235,30,40);
    block12= new Block(450,235,30,40);
    //levelthree
    block13=new Block(360,195,30,40);
    block14=new Block(390,195,30,40);
    block15=new Block(420,195,30,40);
    //top
    block16=new Block(390,155,30,40);

    //base two levelone                           
    base2= new Stand(690,195,180,10);
    blocks1= new Block(630,170,30,40);
    blocks2= new Block(660,170,30,40);
    blocks3= new Block(690,170,30,40);
    blocks4= new Block(720,170,30,40);
    blocks5= new Block(750,170,30,40);
    //base two leveltwo
    blocks6= new Block(660,130,30,40);
    blocks7= new Block(690,130,30,40);
    blocks8= new Block(720,130,30,40);
    //base two top
    blocks9= new Block(690,0,30,40);






}

function draw(){
background(0);
Engine.update(engine);
textSize(25)
text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",50,50);

ground.display();
base1.display();

fill("darkgreen");
block1.display();

fill("darkgreen");
block2.display();

fill("darkgreen");
block3.display();

fill("darkgreen");
block4.display();

fill("darkgreen");
block5.display();

fill("darkgreen");
block6.display();

fill("darkgreen");
block7.display();

fill("lime");
block8.display();

fill("lime");
block9.display();

fill("lime");
block10.display();

fill("lime");
block11.display();

fill("lime");
block12.display();

fill("chartreuse");
block13.display();

fill("chartreuse");
block14.display();

fill("chartreuse");
block15.display();

fill("palegreen");
block16.display();

base2.display();

fill("darkgreen");
blocks1.display();

fill("darkgreen");
blocks2.display();

fill("darkgreen");
blocks3.display();

fill("darkgreen");
blocks4.display();

fill("darkgreen");
blocks5.display();

fill("lime");
blocks6.display();

fill("lime");
blocks7.display();

fill("lime");
blocks8.display();

fill("palegreen");
blocks9.display();
drawSprites();
}