const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    createCanvas(1200,750);
    engine = Engine.create();
    world = engine.world;

    
    ball1=new Ball(520,300)
    ball2=new Ball(580,300)
    ball3=new Ball(640,300)
    ball4=new Ball(700,300)
    ball5=new Ball(760,300)


    chain1=new Chain(ball1.body,{x:520,y:100})
    chain2=new Chain(ball2.body,{x:580,y:100})
    chain3=new Chain(ball3.body,{x:640,y:100})
    chain4=new Chain(ball4.body,{x:700,y:100})
    chain5=new Chain(ball5.body,{x:760,y:100})

    Engine.run(engine);

}

function draw(){
    background(0);
    Engine.update(engine);


    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}
function keyPressed(){
    if (keyCode===UP_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-85,y:-85})
    }
}