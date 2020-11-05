const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rope 







function preload() {
    
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1500,790,3000,20);

    block1 = new Box(400,200,70,70)
    block2 = new Box(470,200,70,70)
    block3 = new Box(540,200,70,70)
    block4 = new Box(610,200,70,70)
    block5 = new Box(400,335,70,70)
    block6 = new Box(470,335,70,70)
    block7 = new Box(540,335,70,70)
    block8 = new Box(610,295,70,70)
    block9 = new Box(400,295,70,70)
    block10 = new Box(470,295,70,70)
    block11 = new Box(540,295,70,70)
    block12 = new Box(610,295,70,70)
    block13 = new Box(400,295,70,70)
    block14 = new Box(470,255,70,70)
    block15 = new Box(540,255,70,70)
    block16 = new Box(610,255,70,70)
    block17 = new Box(400,255,70,70)
    block18 = new Box(470,255,70,70) 
    block19 = new Box(540,215,70,70)
    block20 = new Box(610,215,70,70)

    ball = new Ball(200,500,50,50)

    rope = new Rope(ball.body,{x:200,y:500})
    



    
}

function draw(){
    
        background("white");
    
       
        
    
    Engine.update(engine);
    
  ground.display();
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()

  ball.display()

  rope.display()


}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseRealeased(){
rope.fly()
}
