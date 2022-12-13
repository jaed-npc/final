/*###########################
        Air Hockey
    Created by Jaed, and Ryan
        In URI CSC 106
############################*/

/*
Starter Code obtained from Khan Academy Pong Challenge:

https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/side-scroller/pc/challenge-pong
*/

/****************************
       Global Variables
****************************/
var Score = 0;
var currentScene = 1;
var stillplaying = true;
var Clock = 0;

var mouseY = height/2;
var mouseX = height/2;
var player2Y = height/2;
var player2X = width/2;
var player1Score = 0;
var player2Score = 0;
var puck;
var gameStarted = false;
var t = 0;

//Constants
var PAUSE_TIME = 60;
var playerMoveSpeed = 4;
var puckSpeed = 9;
var paddleHeight = 49;
var paddleWidth = 47;
/****************************
     Global Variables End
****************************/


/***************************************
    Paste in Khan Button class, 
    including mouseClicked function.
***************************************/ 
var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 40;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(181, 181, 181);
    rect(this.x, this.y, this.width, this.height, 13);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+30, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var start = new Button({
    x: 250,
    y: 314,
    width: 100,
    label: "Start",
    onClick: function() {
        currentScene = 2;
    }
});
var resetPuckPosition = new Button({
    x: 25,
    y: 600,
    width: 100,
    label: "Start",
    onClick: function() {
            this.position = new PVector(width/2, height/2);
            this.resetVelocity();
    }
});
/***************************************
             Button End
***************************************/


/******************************************************
                    Ryan Bitmoji
*******************************************************/

var drawBitmojiHeadRyan = function(x, y, bitMojiHeight)
{
    noStroke();
    fill(255, 220, 171);
    ellipse(x, y, bitMojiHeight/150*83, bitMojiHeight/150*100);
    ellipse(x, y+6*bitMojiHeight/150, bitMojiHeight/150*60, bitMojiHeight/150*100);
    ellipse(x-34*bitMojiHeight/150, y, bitMojiHeight/150*31, bitMojiHeight/150*37);
    ellipse(x+33*bitMojiHeight/150, y, bitMojiHeight/150*31, bitMojiHeight/150*37);
    fill(255, 0, 0);
    ellipse(x, y-56*bitMojiHeight/150, bitMojiHeight/150*10, bitMojiHeight/150*10);
    noStroke();
    fill(0, 0, 0);  
    arc(x, y-12*bitMojiHeight/150, bitMojiHeight/150*90, bitMojiHeight/150*-91, 0, 180);
    noStroke();
    fill(255, 220, 171);
    arc(x, y-11*bitMojiHeight/150, bitMojiHeight/150*80, bitMojiHeight/150*-24, 0, 180);
    noFill();
    stroke(255, 0, 0);
    strokeWeight(5);
    arc(x, y+17*bitMojiHeight/150, bitMojiHeight/150*115, bitMojiHeight/150*-85, 45, 137);
    noStroke();
    fill(64, 36, 18);
    ellipse(x-14*bitMojiHeight/150, y, bitMojiHeight/150*10, bitMojiHeight/150*9);
    ellipse(x+12*bitMojiHeight/150, y, bitMojiHeight/150*10, bitMojiHeight/150*9);
    noFill();
    strokeWeight(1);
    stroke(0, 0, 0);
    bezier(x, y, x+8*bitMojiHeight/150, y+22*bitMojiHeight/150, x-8*bitMojiHeight/150, y+20*bitMojiHeight/150, x-4*bitMojiHeight/150, y+15*bitMojiHeight/150);
    fill(255, 255, 255);
    arc(x, y+30*bitMojiHeight/150, bitMojiHeight/150*30, bitMojiHeight/150*10, 0, 180);
    line(x-14*bitMojiHeight/150, y+30*bitMojiHeight/150, x+14*bitMojiHeight/150, y+30*bitMojiHeight/150);

};
var drawBitmojiBodyRyan = function(x, y, bitMojiHeight)
{
    fill(30, 78, 115);
    noStroke();
    quad(x, y+60*bitMojiHeight/150, x-40*bitMojiHeight/150, y+45*bitMojiHeight/150, x-30*bitMojiHeight/150, y+100*bitMojiHeight/150, x, y+100*bitMojiHeight/150);
    quad(x+45*bitMojiHeight/150, y+40*bitMojiHeight/150, x, y+60*bitMojiHeight/150, x, y+100*bitMojiHeight/150, x+30*bitMojiHeight/150, y+100*bitMojiHeight/150);
    quad(x-75*bitMojiHeight/150, y+80*bitMojiHeight/150, x-40*bitMojiHeight/150, y+45*bitMojiHeight/150, x-30*bitMojiHeight/150, y+100*bitMojiHeight/150, x, y+100*bitMojiHeight/150);
    quad(x+45*bitMojiHeight/150, y+40*bitMojiHeight/150, x, y+60*bitMojiHeight/150, x, y+100*bitMojiHeight/150, x+80*bitMojiHeight/150, y+80*bitMojiHeight/150);
    fill(0, 0, 0);
    rect(x-27*bitMojiHeight/150, y+58*bitMojiHeight/150, bitMojiHeight/150*5, bitMojiHeight/150*38);
    noFill();
    stroke(0, 0, 0);
    strokeWeight(2);
    ellipse(x-15*bitMojiHeight/150, y+68*bitMojiHeight/150, bitMojiHeight/150*21, bitMojiHeight/150*21);
    line(x-7*bitMojiHeight/150, y+94*bitMojiHeight/150, x-24*bitMojiHeight/150, y+74*bitMojiHeight/150);
    arc(x+18*bitMojiHeight/150, y+77*bitMojiHeight/150, bitMojiHeight/150*30, bitMojiHeight/150*30, 60, 300);
};
var drawBitmojiRyan = function(x, y, bitMojiHeight)
{
    drawBitmojiHeadRyan(x, y, bitMojiHeight);
    drawBitmojiBodyRyan(x, y, bitMojiHeight);
    
};  
/******************************************************
                    Ryan Bitmoji End
*******************************************************/


/******************************************************
                    Jaed Bitmoji
*******************************************************/
var bh=100; 
var drawface=function(x,y,bh){
    noStroke();
    fill(224,172,105);
    ellipse(x+(bh/150*1),y+(bh/150*1),bh/150*80,bh/150*88);//face
    
    fill(30, 92, 23);
    arc(x-(bh/150*40),y+(bh/150*37),bh/150*28,bh/150*55,bh/150*0,bh/150*361); //left jawline
    arc(x+(bh/150*40),y+(bh/150*37),bh/150*28,bh/150*55,bh/15*0,bh/150*361);// right jawline
    
    
    
    fill(8, 6, 6);
    ellipse(x-(bh/150*36),y-(bh/150*20),bh/150*10,bh/150*15);//hair
    ellipse(x-(bh/150*37),y-(bh/150*30),bh/150*15,bh/150*15);//hair
    ellipse(x-(bh/150*20),y-(bh/150*35),bh/150*17,bh/150*17);//hair
    ellipse(x-(bh/150*30),y-(bh/150*41),bh/150*17,bh/150*17);//hair
    ellipse(x-(bh/150*5),y-(bh/150*45),bh/150*17,bh/150*17);//hair
    ellipse(x+(bh/150*3),y-(bh/150*45),bh/150*17,bh/150*17);//hair
    ellipse(x+(bh/150*15),y-(bh/150*45),bh/150*17,bh/150*17);//hair
    ellipse(x+(bh/150*27),y-(bh/150*41),bh/150*17,bh/150*17);//hair
    ellipse(x+(bh/150*30),y-(bh/150*35),bh/150*17,bh/150*17);//hair
    ellipse(x+(bh/150*38),y-(bh/150*30),bh/150*10,bh/150*15);//hair
    ellipse(x+(bh/150*34),y-(bh/150*20),bh/150*10,bh/150*15);//hair
    
    
    rect(x-(bh/150*25),y-(bh/150*20),bh/150*15,bh/150*3); //left eyebrow
    rect(x+(bh/150*10),y-(bh/150*20),bh/150*15,bh/150*3); //right eyebrow
    
    fill(255, 255, 255);
    ellipse(x-(bh/150*18),y-(bh/150*10),bh/150*15,bh/150*7); //left white eye
    
    fill(79, 12, 79);
    ellipse(x-(bh/150*18),y-(bh/150*10),bh/150*6,bh/150*6); //left pupil
    
    fill(255, 255, 255);
    ellipse(x+(bh/150*17),y-(bh/150*10),bh/150*15,bh/150*7); //right white eye
    
    fill(79, 12, 79);
    ellipse(x+(bh/150*17),y-(bh/150*10),bh/150*6,bh/150*6); //right pupil
    
    fill(214, 146, 64);
    bezier(x-(bh/150*11),y+(bh/150*1),x+(bh/150*22),y+(bh/150*26),x-(bh/150*5),y-(bh/150*44       ),x-(bh/150*4),y+(bh/150*7));//nose
    
    fill(148, 74, 74);
    ellipse(x-(bh/150*1),y+(bh/150*5),bh/150*3,bh/150*3); //left nostril
    ellipse(x+5,y+5,3,3); //right nostril
    
    stroke(168, 34, 34);
    fill(148, 7, 74);
    ellipse(x+(bh/150*1),y+(bh/150*22),bh/150*20,bh/150*25); //mouth
    
    fill(255, 255, 255);
    rect(x-(bh/150*5),y+(bh/150*10),bh/150*10,bh/150*5); //top teeth
    rect(x-(bh/150*5),y+(bh/150*28),bh/150*10,bh/150*5); //bottom teeth
};
var drawbody=function(x,y,bh){
textSize(16);
fill(237, 237, 237);
text("J.F",x-(bh/150*10),y+(bh/150*70));

 fill(45, 25, 224); //color 
quad(x-(bh/150*67),y+(bh/150*100),x-(bh/150*42),y+(bh/150*45),x+(bh/150*37),y+(bh/150*45),x+(bh/150*87),y+(bh/150*90));
};
var drawBitmojiJaed = function(x, y, bitMojiHeight){
    drawbody(x,y,bh);
    drawface(x,y,bh);
    
};  

/******************************************************
                    Jaed Bitmoji
*******************************************************/


/************************************
            Draw Paddle
*************************************/
var drawPaddle = function(x,y,paddleWidth, paddleHeight) {
    fill(166, 166, 166);
    strokeWeight(2.5);
    ellipse(x, y, 45, 45);
    stroke(255, 0, 0);
    strokeWeight(35);
    point(x,y);
    stroke(125, 0, 0);
    strokeWeight(15);
    point(x,y);
};

var drawPaddleOpponent = function(x,y,paddleWidth, paddleHeight) {
    noStroke();
    fill(166, 166, 166);
    strokeWeight(2.5);
    ellipse(x, y, 45, 45);
    stroke(0, 89, 255);
    strokeWeight(35);
    point(x,y);
    stroke(47, 0, 255);
    strokeWeight(15);
    point(x,y);
};

/************************************
            Paddle End
*************************************/


/************************
    Creating the Rink
************************/
var drawRink = function()
{
    background(196, 196, 196);
        //boards
        stroke(0, 0, 0);
        strokeWeight(2);
        fill(245, 255, 255);
        rect(0, 0, 599, 399);
//Goalie zones
    for (var g=0; g<=1; g++)
        {
        //Goal
            noStroke();
            fill(105, 225, 255);
            rect(-72+630*g, 155, 110, 90, 50);
        //Blue Lines
            fill(0, 128, 255);
            rect(155+280*g, 0, 5, 400);
    }
//Center Ice
    noStroke();
    fill(255, 0, 0);
    rect(297, 0, 5, 400);
//Circle
    fill(105, 225, 255);
    ellipse(300, 200, 50, 50);
//Net
    stroke(255, 0, 0);
    strokeWeight(5);
    arc(10, 200, 100, 85, 90, 270); // left
    arc(591, 200, 100, 85, -89, 90); // right
//URI Text Center Ice
    textSize(14);
    fill(255, 255, 255);
    text("URI", 289, 192);
//Air Holes
        for (var v=1; v < 20; v++)
                {
            for (var h=1; h < 20; h++)
            {
                strokeWeight(3);
                stroke(222, 222, 222);
                point(2+29.5*h,20*v);
        }
    }
};
/************************
        Rink End
************************/


/************************
        Draw Puck
************************/
var drawPuck = function(x,y) 
    {
    noStroke();
    fill(94, 94, 94);
    ellipse(x,y,30,29);
    fill(0, 0, 0);
    ellipse(x,y,16,16);  
};
/************************
      Draw Puck End
************************/


var Puck = function(position, speed) {
    this.position = position;
    this.speed = speed || puckSpeed;
    
    this.radius = 12;
    
    this.resetVelocity = function() {
        this.theta = random(0, 360);
        this.velocity = new PVector(
        this.speed*cos(this.theta),
        -this.speed*sin(this.theta));
        player2Y = height/2;
    };
    this.resetVelocity();
    
    this.draw = function() {
    drawPuck(this.position.x,this.position.y);
    };
    
    this.collideWithPaddle = function(x, y) {
        if (this.position.x - this.radius < x + paddleWidth/2 &&
        this.position.x + this.radius > x - paddleWidth/2) {
            if (dist(0, this.position.y, 0, y) <
            paddleHeight/2 + this.radius) {
                if (this.position.x > x) {
                    this.position.x = x +
                    this.radius + paddleWidth/2;
                }
                else if (this.position.x < x) {
                    this.position.x = x - 
                    this.radius - paddleWidth/2;
                }
                this.velocity.mult(new PVector(-1, 1));
            }
        }
    };
    
    this.update = function() {
        //Handle wall collisions
        if (this.position.x < 10 && this.position.y>150 && this.position.y<280) {
            player2Score++;
            this.position = new PVector(width/2, height/2);
            gameStarted = false;
            this.resetVelocity();
        }
        else if (this.position.x > width && this.position.y>140 && this.position.y<290) {
            player1Score++;
            this.position = new PVector(width/2, height/2);
            gameStarted = false;
        }
       
       else if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.mult(new PVector(1.0, -1));
        }
        else if (this.position.y > height) {
            this.position.y = height;
            this.velocity.mult(new PVector(1.0, -1));
        }
        else if (this.position.x>width){
            this.position.x=390;
            this.velocity.mult(new PVector(-1, 1.0));
        }
        else if(this.position.x<5){
            this.position.x=10;
            this.velocity.mult(new PVector(-1, 1.0));
        }
        
        
        //Handle paddle collisions
        this.collideWithPaddle(mouseX, mouseY);
        this.collideWithPaddle(player2X, player2Y);
        
        this.position.add(this.velocity);
    };
};

puck = new Puck(new PVector(width/2,height/2));

var drawScore = function() {
    strokeWeight(3);
    fill(3, 0, 0);
    stroke(150, 142, 150);
    rect(174,0,246,24,29);
    
    
    fill(255, 0, 0);
    textSize(16);
    var Player1Score = "Player 1:"+player1Score;
    text(Player1Score, 185,5);
    var Player2Score = "Player 2:"+player2Score;
    text(Player2Score, 328,5);
};

var updatePlayer2 = function() {
    if (abs(player2Y-puck.position.y) < playerMoveSpeed){
        player2Y = puck.position.y;
    }
    else if (player2Y-puck.position.y >= playerMoveSpeed) {
        player2Y -= playerMoveSpeed;
    }
    else if (player2Y-puck.position.y <= playerMoveSpeed) {
        player2Y += playerMoveSpeed;
    }
    if (abs(player2X-puck.position.x) < playerMoveSpeed){
        player2X = puck.position.x;
    }
    else if (player2X-puck.position.x >= playerMoveSpeed) {
        player2X -= playerMoveSpeed;
    }
    else if (player2X-puck.position.x <= playerMoveSpeed) {
        player2X += playerMoveSpeed;
    }
};




var drawPlayers = function() {

//Constrain the player movement
   mouseX = constrain(mouseX, 0, 270);
   player2Y = constrain(player2Y, 0, 600);
   player2X = constrain(player2X, 450, 600);

drawPaddle(mouseX,mouseY, paddleWidth, paddleHeight);
drawPaddleOpponent(player2X, player2Y, paddleWidth, paddleHeight);

};


/***************************
       Splash Screen 
****************************/
var Splash = function() {
currentScene=1;
background (80, 201, 159);
    textSize(48);
    fill(105, 99, 99);
    text ("Air Hockey", 192, 65);
    fill(0, 242, 255);
    text ("Air Hockey", 194, 63);
    fill(255, 255, 255);
    textSize(26);
    fill(105, 99, 99);
    text ("By Ryan & Jaed", 228, 140);
    fill(255, 255, 255);
    text ("By Ryan & Jaed", 230, 138);
    strokeWeight(1);
    start.draw();
    drawBitmojiRyan(190,155,50);
    drawBitmojiJaed(473,155,50);
};
/***************************
      Splash Screen End 
****************************/


/***************************
       Play Screen 
****************************/
var playScreen=function(){
    currentScene=2;
    
    drawRink();
    updatePlayer2();
    drawPlayers();
    drawScore();
    puck.draw();
    
    if (!gameStarted) {
        t++;
        if (t >= PAUSE_TIME) {
            t = 0;
            gameStarted = true;
        }
        return;
    }
    puck.update();
};
/***************************
       Play Screen End 
********'********************/


/****************************
    MouseClicked Function 
*****************************/
mouseClicked = function() {
    if(currentScene===1)
    {
    start.handleMouseClick();
    }
};
/****************************
    MouseClicked Function End
*****************************/


/*************************
       Draw Function
**************************/
draw = function() {
    if (currentScene === 1)
        {  
        Splash();  
    }
    else if (currentScene===2)
        {
        playScreen();
    }        
};
/*************************
    Draw Function End
**************************/
