const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box11 = new Box(600, 100, 70, 70);
  box111 = new Box(600, 100, 70, 70);
  box1111 = new Box(600, 100, 70, 70);
  box11111 = new Box(600, 100, 70, 70);

  box2 = new Box(750, 100, 70, 70);
  box22 = new Box(750, 100, 70, 70);
  box222 = new Box(750, 100, 70, 70);
  box2222 = new Box(750, 100, 70, 70);
  box22222 = new Box(750, 100, 70, 70);

  box4 = new Box(900, 100, 70, 70);
  box44 = new Box(900, 100, 70, 70);
  box444 = new Box(900, 100, 70, 70);
  box4444 = new Box(900, 100, 70, 70);
  box44444 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  box1.display();
  box11.display();
  box111.display();
  box1111.display();
  box11111.display();

  box2.display();
  box22.display();
  box222.display();
  box2222.display();
  box22222.display();


  box4.display();
  box44.display();
  box444.display();
  box4444.display();
  box44444.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}

