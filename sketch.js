
var monkey , monkey_running,ground,ground2,groundImage,ground2Image,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var bananaGroup;
var jumpSound;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  groundImage = loadImage("grass_PNG10860.png");
  ground2Image = loadImage("grass_PNG10860.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  jumpSound = loadSound("_JUMP_Casual_Game_SFX (1).mp3")
 
}



function setup() {
  createCanvas(500, 200);
  bananaGroup = createGroup();
  obstaclesGroup = new Group();
  
  monkey = createSprite(50,150,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,173,600,20);
  ground.addImage(groundImage);
  ground.scale = 0.3;
  ground.velocityX = -3
  
  
  
  ground2 = createSprite(400,173,600,20);
  ground2.addImage(ground2Image);
  ground2.scale = 0.3;
  ground2.velocityX = -3
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  score = 0;
}


function draw() {
  background("lightblue");
  
  text("Score: "+ score, 400,50);
  if(bananaGroup.isTouching(monkey)){
     score = score + 1;
    bananaGroup.destroyEach()
   
     }
   
  

  if (ground.x <50){
      ground.x = ground.width/2;
    }
  monkey.collide(invisibleGround);
   spawnBanana();
       if(keyWentDown("space") && monkey.y >= 150) {
       monkey.velocityY = -12;
         jumpSound.play();
    }
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  
  
  
  
 drawSprites();
  
}
function spawnBanana() {
  //write code here to spawn the banana
  if (frameCount % 200 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,100));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    bananaGroup.add(banana);
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
  }
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(500,165,10,40);
    obstacle.addImage(obstacleImage);
    //obstacle.debug = true;
    obstacle.velocityX = -3
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}




