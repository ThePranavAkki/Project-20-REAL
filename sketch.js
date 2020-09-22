var car1,wall1;

var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(1600,400);

  car1 = createSprite(50,150,70,40);
  car1.velocityX = speed;

  wall1 = createSprite(1500,150,60,200);
  wall1.shapeColor = rgb(80,80,80);
}

function draw() {
  background(0,0,0);  

  if (wall1.x - car1.x < (car1.width/2 + wall1.width/2)) 
  {
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if (deformation > 180)
    {
      car1.shapeColor = color(255,0,0);
    }
    
    if (deformation < 180 && deformation > 100)
    {
      car1.shapeColor = color(230,230,0);
    }
    
    if (deformation<100)
    {
      car1.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}