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

//Constants
var PAUSE_TIME = 60;
var PLAYER_MOVE_SPEED = 2;
var BALL_SPEED = 6.4;
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
        if (this.position.x < 10 && this.position.y>130 && this.position.y<280) {
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
    stroke(117, 117, 117);
    rect(99,6,208,24,39);
    rect(202,12,0,20);
    var s;
    textFont(m);
    fill(255, 0, 0);
    
    textSize(15);
    //textFont(m);
    
    s = "Player 1:"+player1Score;
    text(s, width*0.37-textWidth(s)/2, 25);
    s = "Player 2:"+player2Score;
    text(s, width*0.64-textWidth(s)/2, 25);
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

draw = function() {
    //Control Player 1

    //Draw the environment
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
                stroke(222, 222, 222);
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

