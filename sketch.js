const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles =[];
var plinkos = [];




function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  Ground1 = new Ground(240,790,480,20)
  Division1 = new Division(480,650,10,300)
  Division2 = new Division(400,650,10,300)
  Division3 = new Division(320,650,10,300)
  Division4 = new Division(240,650,10,300)
  Division5 = new Division(160,650,10,300)
  Division6 = new Division(80,650,10,300)
  Division7 = new Division(0,650,10,300)
  
  for(var j=40; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75,10))
  }

  for(var e=70; e <= width; e=e+50 ){
    plinkos.push(new Plinko(e,125,10))
  }

  for(var a = 40; a <=width; a=a+50){
    plinkos.push(new Plinko(a,185,10))
  }

  for(var b=70; b <= width; b=b+50 ){
    plinkos.push(new Plinko(b,250,10))
  }

  for(var c = 40; c <=width; c=c+50){
    plinkos.push(new Plinko(c,315,10))
  }

  for(var d=70; d <= width; d=d+50 ){
    plinkos.push(new Plinko(d,370,10))
  }



}

function draw() {
  background(0,0,0); 

  Engine.update(engine);
  
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(50,430),0,10))
  }


  Ground1.display();
  Division1.display();
  Division2.display();
  Division3.display();
  Division4.display();
  Division5.display();
  Division6.display();
  Division7.display();
  for( var i =0;i<plinkos.length;i=i+1){
    plinkos[i].display();
  }
  
  for(var r=0;r<particles.length;r=r+1){
    particles[r].display();
  }
  


  


  drawSprites();
}