var bomb, coin, energyDrink, path, power, Runner
var Jaxon

function preload(){
 
  Runner=loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png");
  bomb=loadImage("bomb.png");
  coin=loadImage("coin.png");
  energyDrink=loadImage("energyDrink.png");
  power=loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;

  Jaxon=createSprite(180, 340, 30, 30);
  Jaxon.addAnimation("JaxonRunning",Runner);
  Jaxon.scale=0.08
}

function draw(){
  background("black");
  if (path.y > 400){
    path.y = height/2
  }
  Jaxon.x = mouseX
  drawSprites();
}
