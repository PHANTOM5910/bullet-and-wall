var bullet,wall;
var speed,weight;
var thicness
function setup() {
  createCanvas(1600,400);
 
  speed=random(223,321)
  weight=random(30,52)
  thicness = random(22,83);

  bullet = createSprite(100,50, 75, 50);

  wall = createSprite(1200, 100, thicness, height/2);

bullet.debug = true;
wall.debug = true;
}

function draw() {
  background(255,255,0);  
  
 bullet.shapeColor="gray";

  wall.shapeColor="blue";

  bullet.velocityX = speed;

if(hasCollided(bullet, wall)){
 
  bullet.velocityX=0;

damage = 0.5*weight*speed*speed/(thicness*thicness*thicness);

if(damage <10){
  wall.shapeColor = color(0,255,0)
}

if(damage >10){
  wall.shapeColor = color(255,0,0)
  }
}


  drawSprites();
}
function hasCollided(lbullet , lwall){
 bulletRightEdge = lbullet.x + bullet.width;
 wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge)
  {
    return true;
} 
else {
   return false;
}
}