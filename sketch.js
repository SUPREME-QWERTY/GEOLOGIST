const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron_ob;
var stone_ob;
var rubber_ob;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron_ob = new iron(300,300,50,30);

    rubber_ob = new Rubber(900,450,60); 

    stone_ob = new stone(700,600,100,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron_ob.display();
    rubber_ob.display();
    stone_ob.display();

    
 
}