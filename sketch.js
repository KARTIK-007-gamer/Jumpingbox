var canvas;
var music;
var wall1,wall2,wall3,wall4;
var ball;
var a,b,c,d;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   wall1=createSprite(150,550,120,20);
   wall1.shapeColor="red";
  
   wall2=createSprite(310,550,120,20);
   wall2.shapeColor="green";

   wall3=createSprite(470,550,120,20);
   wall3.shapeColor="blue";

   wall4=createSprite(620,550,120,20);
   wall4.shapeColor="black";

   a=createSprite(30,60,3000,10);
   a.shapeColor="hotpink";

   b=createSprite(770,200,10,3000);
   b.shapeColor="hotpink";

   c=createSprite(30,570,3000,10);
   c.shapeColor="hotpink";

   d=createSprite(30,570,10,3000);
   d.shapeColor="hotpink";






    //create box sprite and give velocity

    ball=createSprite(400,150,30,30);
    ball.shapeColor="white";
         
    ball.velocityX=1;
    ball.velocityY=5;
                
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
   
    

   
    if(a.isTouching(ball) && ball.bounceOOff(a)){
        //change color
    }

    if(b.isTouching(ball) && ball.bounceOOff(b)){
        //change color
    }
   

    if(c.isTouching(ball) && ball.bounceOOff(c)){
        //change color
    }
   

    if(d.isTouching(ball) && ball.bounceOOff(d)){
        //change color
    }
   
   
    drawSprites();
    //add condition to check if box touching surface and make it box

    if(wall3.isTouching(ball)){
        ball.shapeColor=rgb(255,128,0);
        ball.velocityX=0;
        music.stop();
    }



}
