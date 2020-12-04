var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(600,400);
  bullet=createSprite(50,200,50,50);
 speed=random(223,321)
  weight =random(30,52)
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
  speed=random(55,90);
  weight=random(400,1500)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255);
  car.velocityX=speed
  
  bullet.collide(wall);
  hasCollided(bullet,wall)

  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityY=0
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      car.velocityX=0;
    }
   else if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      car.velocityX=0;
    }
   else if(deformation<100){
      car.shapeColor=color(0,255,0);
      car.velocityX=0;
    }
  }

  drawSprites();
}

function hasCollided(buillet,lwall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallleftEdge=lwall.x;
  if(bulletRightEdge>=walllLeftEdge)
  {
    return true
  }
  return false;
  if(hasCollided(bullet,wall))
{

bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)

{wall.shapeColor=color(255,0,0)}
}
if (damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}

