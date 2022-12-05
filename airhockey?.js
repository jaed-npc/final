/*###########################
        Air Hockey
    Created by Jaed, and Ryan
        In URI CSC 106
############################*/


/****************************
       Global Variables
****************************/
var Score = 0;
var currentScene = 1;
var stillplaying = true;
var Clock = 0;
/****************************
     Global Variables End
****************************/


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
    strokeWeight(5);
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


/************************************
            Draw Paddle
*************************************/
var drawPaddle = function(x,y) {
    fill(166, 166, 166);
    strokeWeight(2.5);
    ellipse(x, y, 35, 37);
    stroke(255, 0, 0);
    strokeWeight(20);
    point(x,y);
    stroke(125, 0, 0);
    strokeWeight(10);
    point(x,y);
};

var drawPaddleOpponent = function(x,y) {
    fill(166, 166, 166);
    strokeWeight(2.5);
    ellipse(x, y, 35, 37);
    stroke(0, 128, 255);
    strokeWeight(20);
    point(x,y);
    stroke(0, 80, 217);
    strokeWeight(10);
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
        rect(0, 0, 399, 399, 50);
//Goalie zones
    for (var g=0; g<=1; g++)
        {
        //Goal
            noStroke();
            fill(105, 225, 255);
            rect(145, -50+410*g, 110, 90, 50);
        //Blue Lines
            fill(0, 128, 255);
            rect(-1, 100+200*g, 401, 5);
    }
//Center Ice
    noStroke();
    fill(255, 0, 0);
    rect(-1, 203, 401, 5);
//Circle
    fill(105, 225, 255);
    ellipse(200, 205, 50, 50);
//Net
    stroke(255, 0, 0);
    strokeWeight(5);
    arc(200, 390, 90, 50, 0, 180); //Top
    arc(200, 10, 90, -50, 0, 180); //Bottom
//URI Text Center Ice
    textSize(14);
    fill(255, 255, 255);
    text("URI", 188, 210);
//Air Holes
        for (var v=1; v < 20; v++)
                {
            for (var h=1; h < 20; h++)
            {
                strokeWeight(3);
                stroke(222, 222, 222);
                point(2+20*h,20*v);
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
    ellipse(x,y,22,22);
    fill(0, 0, 0);
    ellipse(x,y,16,16);  
};
/************************
      Draw Puck End
************************/


/*************************
        Draw Function
**************************/
var draw = function() {
    drawRink();
        drawPuck(200,205);
        stroke(112, 112, 112);
        drawPaddleOpponent(200,20);
        drawPaddle(mouseX,mouseY);
            if (mouseY < 200) 
                                {
                    mouseX = mouseX;
                    mouseY = 200;
        }
};
/*************************
    Draw Function End
**************************/





 
var m=createFont("monospace");
var player1Y = height/2;
var player2Y = height/2;
var player1Score = 0;
var player2Score = 0;
var ball;
var gameStarted = false;
var t = 0;
var currentScene=1;

//Constants
var PAUSE_TIME = 60;
var PLAYER_MOVE_SPEED = 4;
var BALL_SPEED = 5;
var PADDLE_HEIGHT = 49;
var PADDLE_WIDTH = 47;

angleMode = "degrees";

var Ball = function(position, speed) {
    this.position = position;
    this.speed = speed || BALL_SPEED;
    
    this.radius = 12;
    
    this.resetVelocity = function() {
        this.theta = random(0, 360);
        this.velocity = new PVector(
        this.speed*cos(this.theta), -this.speed*sin(this.theta));
        player2Y = height/2;
    };
    this.resetVelocity();
    
    this.draw = function() {
    noStroke();
    fill(59, 38, 59);
    ellipse(this.position.x,this.position.y,22,22);
    fill(28, 6, 28);
    ellipse(this.position.x,this.position.y,16,16);
    };
    
    this.collideWithPaddle = function(x, y) {
        if (this.position.x - this.radius < x + PADDLE_WIDTH/2 &&
        this.position.x + this.radius > x - PADDLE_WIDTH/2) {
            if (dist(0, this.position.y, 0, y) <
            PADDLE_HEIGHT/2 + this.radius) {
                if (this.position.x > x) {
                    this.position.x = x +
                    this.radius + PADDLE_WIDTH/2;
                }
                else if (this.position.x < x) {
                    this.position.x = x - 
                    this.radius - PADDLE_WIDTH/2;
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
        else if (this.position.x > width && this.position.y>140 && this.position.y<280) {
            player1Score++;
            this.position = new PVector(width/2, height/2);
            gameStarted = false;
            this.resetVelocity();
        }
       
       else if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.mult(new PVector(1, -1));
        }
        else if (this.position.y > height) {
            this.position.y = height;
            this.velocity.mult(new PVector(1, -1));
        }
        else if (this.position.x>width){
            this.position.x=390;
            this.velocity.mult(new PVector(-1, 1));
        }
        else if(this.position.x<5){
            this.position.x=10;
            this.velocity.mult(new PVector(-1, 1));
        }
        
        
        //Handle paddle collisions
        this.collideWithPaddle(20, player1Y);
        this.collideWithPaddle(width-20, player2Y);
        
        this.position.add(this.velocity);
    };
};

ball = new Ball(new PVector(width/2, height/2));

var drawScores = function() {
    fill(3, 0, 0);
    stroke(150, 142, 150);
    rect(99,6,208,24,29);
    rect(202,12,0,20);
    var s;
    textFont(m);
    fill(255, 0, 0);
    
    textSize(15);
    //textFont(m);
    
    s = "Player 1:"+player1Score;
    text(s, width*0.37-textWidth(s)/2, 11);
    s = "Player 2:"+player2Score;
    text(s, width*0.64-textWidth(s)/2, 11);
};

var updatePlayer2 = function() {
    if (abs(player2Y-ball.position.y) < PLAYER_MOVE_SPEED){
        player2Y = ball.position.y;
    }
    else if (player2Y-ball.position.y >= PLAYER_MOVE_SPEED) {
        player2Y -= PLAYER_MOVE_SPEED;
    }
    else if (player2Y-ball.position.y <= PLAYER_MOVE_SPEED) {
        player2Y += PLAYER_MOVE_SPEED;
    }
    
};

//Move the player up
var movePlayerUp = function() {
    player1Y -= PLAYER_MOVE_SPEED;
};

//Move the player down
var movePlayerDown = function() {
    player1Y += PLAYER_MOVE_SPEED;
};


var drawPlayers = function() {
    //Constrain the player movement
   player1Y = constrain(player1Y, 0, 400);
   player2Y=constrain(player2Y,0,400);
    
    fill(204, 0, 0);
    strokeWeight(2.5);
    ellipse(18,player1Y , PADDLE_WIDTH, PADDLE_HEIGHT);
    stroke(255, 0, 0);
    strokeWeight(20);
    point(18,player1Y);
    stroke(135, 23, 23);
    strokeWeight(10);
    point(18,player1Y);
    
    fill(37, 0, 245);
    stroke(0, 30, 255);
    ellipse(width-20, player2Y, PADDLE_WIDTH-5, PADDLE_HEIGHT-9);
     
     stroke(25, 86, 135);
    strokeWeight(20);
    point(width-20,player2Y);
    stroke(0, 8, 125);
    strokeWeight(10);
    point(width-20,player2Y);
};
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
    x: 148,
    y: 315,
    width: 100,
    label: "Start",
    onClick: function() {
        currentScene = 2;
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
    strokeWeight(5);
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
var x=184; //bitx
var y=161; // bit y
var bh=109; 
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


drawbody(x,y,bh);
drawface(x,y,bh);

var drawBitmojiJaed = function(x, y, bitMojiHeight)
{
    drawbody(x,y,bh);
    drawface(x,y,bh);
    
};  

/******************************************************
                    Jaed Bitmoji
*******************************************************/


var intro=function(){
currentScene=1;
background (80, 201, 159);
    textSize(48);
    fill(105, 99, 99);
    text ("Untitled Game", 36, 65);
    fill(0, 242, 255);
    text ("Untitled Game", 34, 63);
    fill(255, 255, 255);
    textSize(26);
    fill(105, 99, 99);
    text ("By Ryan & Jaed", 104, 140);
    fill(255, 255, 255);
    text ("By Ryan & Jaed", 102, 138);
    strokeWeight(1);
    start.draw();
    drawBitmojiRyan(75,155,50);
    drawBitmojiJaed(326,155,50);

};

var playscreen=function(){
    currentScene=2;
    
    background(0, 145, 19);
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(255, 255, 255);
    rect(0, 0, 399, 399, 50);
    
    
     for (var g=0; g<=1; g++)
        {
        //Goal
            noStroke();
            fill(136, 219, 240);
            rect(-50+392*g,120, 106, 167, 50);
        //Blue Lines
            fill(0, 132, 255);
            rect(313*g,-9*g,3*g,413*g);
            rect(88*g,-9*g,3*g,413*g);
            
        }
        
        //Center Ice
    noStroke();
    fill(245, 8, 8);
    rect(200.5, 9, 3, 405);
//Circle
    fill(105, 225, 255);
    ellipse(201, 199, 50, 50);
//Net
    stroke(255, 0, 0);
    strokeWeight(5);
    arc(381, 205, 136, 145, -88, 88); //Top
    arc(17, 205, 136, -145, 93, 271); //Bottom
    
     for (var v=1; v < 20; v++)
                {
            for (var h=1; h < 20; h++)
            {
                strokeWeight(3);
                stroke(189, 189, 189);
                
                point(2+20*h,20*v);
        }
    }

    
    updatePlayer2();
    drawPlayers();
    drawScores();
  
    
    //Draw the ball
    ball.draw();
    
    if (!gameStarted) {
        t++;
        if (t >= PAUSE_TIME) {
            t = 0;
            gameStarted = true;
        }
        return;
    }
    if (keyIsPressed) {
        if (keyCode === UP){
            movePlayerUp();
        }
        else if (keyCode === DOWN){
            movePlayerDown();
        }
    }
    ball.update();

};

mouseClicked = function() {
    if(currentScene===1){
    start.handleMouseClick();}
 };

draw = function() {
    
    if (currentScene === 1)
    {  intro();  }
    else if (currentScene===2){
    playscreen();
    }        
    
};

