const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,shelf1,shelf2,slingShot;
var box = [];
var ball;

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,height,500,30);
    shelf1 = new Ground(75,330,150,15);
    shelf2 = new Ground(425,200,150,15);
    
    box1 = new Box(75,300,30,30);
    box2 = new Box(105,300,30,30);
    box3 = new Box(45,300,30,30);
    box4 = new Box(90,270,30,30);
    box5 = new Box(60,270,30,30);
    box6 = new Box(75,240,30,30);
    
    box7 = new Box(425,170,30,30);
    box8 = new Box(455,170,30,30);
    box9 = new Box(395,170,30,30);
    box10 = new Box(440,140,30,30);
    box11 = new Box(410,140,30,30);
    box12 = new Box(425,110,30,30);
    
    box13 = new Box(365,470,30,30);
    box14 = new Box(425,470,30,30);
    box15 = new Box(455,470,30,30);
    box16 = new Box(395,470,30,30);
    box17 = new Box(335,470,30,30);
    box18 = new Box(305,470,30,30);
    
    box19 = new Box(440,455,30,30);
    box20 = new Box(410,455,30,30);
    box21 = new Box(380,455,30,30);
    box22 = new Box(350,455,30,30);
    box23 = new Box(320,455,30,30);
    
    box24 = new Box(425,440,30,30);
    box25 = new Box(395,440,30,30);
    box26 = new Box(365,440,30,30);
    box27 = new Box(335,440,30,30);
    
    box28 = new Box(410,400,30,30);
    box29 = new Box(380,400,30,30);
    box30 = new Box(350,400,30,30);
    
    box31 = new Box(395,370,30,30);
    box32 = new Box(365,370,30,30);
    
    box33 = new Box(380,340,30,30);
    ball = new Ball(200,200,30,30);
    slingShot = new SlingShot( ball.body,{x:250 ,y:150 });
    
}

function draw(){
    background("black");
    Engine.update(engine);

    text("Drag the Ball.Release to throw it on the boxes",10,30);
    text("Press SPACE for another try! ",10,45);

    ground.display();
    shelf1.display();
    shelf2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    
    ball.display();
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed() {
    if(keyCode === 32) {
        slingShot.attach(ball.body);
    }
}