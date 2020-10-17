var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sword,background,fruit,monster,fruit1,fruit2,fruit3,frui4,fruitGroup,enemyGroup;
var sword_Image,background_Image,fruit1_Image,fruit2_Image,fruit3_Image,fruit4_Image,sword_Image;
 var score;
var cuttingSound;
var gameOverSound;
function preload(){
sword_Image = loadImage("sword.png");
 fruit1_Image = loadImage("fruit1.png");
  fruit2_Image = loadImage("fruit2.png");
  fruit3_Image = loadImage("fruit3.png");
  fruit4_Image = loadImage("fruit4.png");
  monster_Image = loadImage("alien1.png","alien2.png");
  cuttingSound = loadSound("knifeSwooshSound.mp3");
  gameOverSound = loadSound("gameover.mp3");
  }

function setup() { 
  createCanvas(600, 600);
  
  
  sword = createSprite(400,200,20,20);
  sword.addImage(sword_Image);
  sword.scale=0.7;
  
  fruitGroup= new Group();
  enemyGroup= new Group();
  score = 0  
}

function draw(){
  fruits();
  Enemy();
  
  
  background("pink");
  gameState = PLAY;
  sword.x=World.mouseX;
  sword.y=World.mouseY;
  
  
if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  score=score+2;
  cuttingSound.play();
}
  gameState = END;
  if(sword.isTouching(enemyGroup)){
  fruitGroup.destroyEach();
  enemyGroup.destroyEach();
  fruitGroup.velocityX=0;
  enemyGroup.velocityX=0;
  gameOverSound.play();
  }
  drawSprites();
}

function fruits(){
  if(World.frameCount%80===0){
  fruit = createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if(r===1){
      fruit.addImage(fruit1_Image);
    }else if(r===2){
      fruit.addImage(fruit2_Image);
    }else if(r===3){
      fruit.addImage(fruit3_Image);
    }else if(r===4){
      fruit.addImage(fruit4_Image);
    }
    fruit.y=Math.round(random(50,340));
  fruit.velocityX=-(7+(score/4));
  fruit.setLifetime=100;
    fruitGroup.add(fruit);
  }}
function Enemy(){
  if(World.frameCount%200===0){
    monster = createSprite(400,200,20,20);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-(8+(score/10));
  monster.setLifetime=50;
    monster.addImage(monster_Image);
    enemyGroup.add(monster); 
    
}
}
      

  



