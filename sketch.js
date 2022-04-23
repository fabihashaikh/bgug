var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("bg.png");
  //shipImg1=loadAnimation("sea.png")
//Choose the correct option by uncommenting the right line to load the animation for ship.
 shipImg1=loadAnimation("shark.png")
  //shipImg1 = loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1 = loadAnimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(1000,300);
  background("blue");

  // Moving background
  sea=createSprite(500,200);
  sea.addImage(seaImg);
  sea.scale=2

  
  ship = createSprite(130,235,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.15;
  
}

function draw() {
  background(0);
  if(sea.x<0){
    sea.x=sea.width/2
  }
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.velocityY = -3;
  //sea.x = -3;
  sea.velocityX = -3;
  //sea.velocityX = 3;
  

  
    
  drawSprites();
}
