var cat, rat;
var catimg, ratimg;
var garden, gardenimg;
var catw, ratw;
var catE, ratE

function preload() {
    //load the images here
    catimg = loadImage ("images/cat1.png")
    ratimg = loadImage ("images/mouse2.png")
    gardenimg = loadImage ("images/garden.png")
    catw = loadAnimation ("images/cat2.png", "images/cat3.png")
    catE = loadImage ("images/cat4.png")
    ratw = loadAnimation ("images/mouse2.png", "images/mouse3.png")
    ratE = loadImage ("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite (800, 650, 80, 30)
    cat.addImage (catimg)
    cat.addAnimation (catw)
    cat.addImage (catE)
    cat.scale = 0.2
    rat = createSprite (250, 650, 50, 80)
    rat.addImage (ratimg)
    rat.addAnimation (ratw)
    rat.addImage (ratE)
    rat.scale = 0.2

}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
  
    if (cat.x - rat.x < (cat.width - rat.width) / 2){
        cat.velocityX=0;
        cat.addAnimation("gatinho", catE);
        cat.changeAnimation("gatinho");
        cat.x = 300;
        rat.addAnimation("ratinho", ratE);
        rat.changeAnimation("ratinho");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW){
        mouse.addAnimation("rato", ratw);
        mouse.changeAnimation("rato");
        mouse.frameDelay = 25

        cat.velocityX = - 5

        cat.addAnimation("gato", catw);
        cat.changeAnimation("gato");
        cat.frameDelay = 25
     }

}
