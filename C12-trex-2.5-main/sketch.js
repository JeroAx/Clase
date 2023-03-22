var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage;
var obstacle;
var obstacle_1,obstacle_2,obstacle_3,obstacle_4,obstacle_5,obstacle_6
var rand 
var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
 
  obstacle_1 = loadImage("obstacle1.png")
  obstacle_2 = loadImage("obstacle2.png")
  obstacle_3 = loadImage("obstacle3.png")
  obstacle_4 = loadImage("obstacle4.png")
  obstacle_5 = loadImage("obstacle5.png")
  obstacle_6 = loadImage("obstacle6.png")
}

function setup() {

  createCanvas(600,200)
  
  //crear sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generar números aleatorios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //establecer color de fondo
  background(180);
  
  console.log(trex.y)
  
  
  
  //hacer que el trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y >= 150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el trex caiga
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds()
  obstacles()
  drawSprites();
}

//función para aparecer las nubes
function spawnClouds(){
 //escribir aquí el código 
 if(frameCount%60===0){
cloud = createSprite(600,100,40,10)
cloud.addImage(cloudImage)
cloud.y = Math.round(random(10,100))
cloud.scale = 0.8
cloud.lifetime = 200;
 cloud.velocityX = -4
 cloud.depth = trex.depth;
 trex.depth = trex.depth+1;
}
 }
 
 function obstacles(){
  rand = Math.round(random(1,6))
if (frameCount%60===0){
 obstacle = createSprite (600,165,10,40);
 obstacle.velocityX = -6; 
}
switch(rand){
  case 1: obstacle.addImage(obstacle_1)
  break
  case 2: obstacle.addImage(obstacle_2)
  break
  case 3: obstacle.addImage(obstacle_3)
  break
  case 4: obstacle.addImage(obstacle_4)
  break
  case 5: obstacle.addImage(obstacle_5)
  break
  case 6: obstacle.addImage(obstacle_6)
  break
  default:break
}
 }



