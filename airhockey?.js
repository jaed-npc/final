/*###########################
        Air Hockey
    Created by Jaed, and Ryan
        In URI CSC 106
############################*/

/****************************
       Global Variables
****************************/
var currentScene = 1; //changes the scenes in the game
var stillplaying = true; //If the game is still going on
var Clock = 0; //Clock

var mouseY = height/2;
var mouseX = height/2;
var player2Y = height/2;
var player2X = width/2;
var player1Score = 0; //Score for player one
var player2Score = 0; //Score for player two
var puck;
var gameStarted = false;
var t = 0;
var PLAYER_MOVE_SPEED=7;
//Constants
var pauseTime = 60;
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
    this.height = config.height || 35;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(89, 135, 121, 100);
    rect(this.x, this.y, this.width, this.height, 13);
    fill(255, 255, 255);
    textSize(15);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
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
var back = new Button({
    x: 15,
    y: 358,
    width: 100,
    height: 35,
    label: "back",
    onClick: function() {
        currentScene = 1;
    }
});
var start = new Button({
    x: 15,
    y: 350,
    width: 100,
    height: 35,
    label: "Start",
    onClick: function() {
        currentScene = 2;
    }
});
var howtoPlay = new Button({
    x: 15,
    y: 300,
    width: 100,
    height: 35,
    label: "How to Play",
    onClick: function() {
        currentScene = 5;
    }
});
var Soccer = new Button({
    x: 13,
    y: 250,
    width: 105,
    height: 35,
    label: "Soccer Mode",
    onClick: function() {
        currentScene = 3;
    }
});
var multi = new Button({
    x: 15,
    y: 200,
    width: 100,
    height: 35,
    label: "  P1 vs. P2",
    onClick: function() {
        currentScene = 6;
    }
});
var multihockey = new Button({
    x: 152,
    y: 200,
    width: 100,
    height: 35,
    label: "  Hockey",
    onClick: function() {
        currentScene = 4;
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
    strokeWeight(3);
    ellipse(x-15*bitMojiHeight/150, y+68*bitMojiHeight/150, bitMojiHeight/150*21, bitMojiHeight/150*21);
    line(x-7*bitMojiHeight/150, y+94*bitMojiHeight/150, x-24*bitMojiHeight/150, y+74*bitMojiHeight/150);
    arc(x+18*bitMojiHeight/150, y+77*bitMojiHeight/150, bitMojiHeight/150*30, bitMojiHeight/150*30, 60, 300);
    strokeWeight(1);
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
var bh=68; 
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
 fill(45, 25, 224); //color 
quad(x-(bh/150*67),y+(bh/150*100),x-(bh/150*42),y+(bh/150*45),x+(bh/150*37),y+(bh/150*45),x+(bh/150*87),y+(bh/150*90));
textSize(16);
fill(237, 237, 237);
text("J.F",x-(bh/150*10),y+(bh/150*70));
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
    fill(166, 166, 166); //base color
    strokeWeight(2.5); //fills out the shape
    ellipse(x, y, 45, 45); //Base
    stroke(255, 0, 0); //color of the cup
    strokeWeight(35); //fills out the shape
    point(x,y); //point used for the cup part of the paddle.
    stroke(125, 0, 0);  // color of the Handle
    strokeWeight(15); //fills out the shape
    point(x,y); //point used for the handle.
};

var drawPaddleOpponent = function(x,y,paddleWidth, paddleHeight) {
    noStroke(); //removing past strokes.
    fill(166, 166, 166); //base color
    strokeWeight(2.5); //fills out the shape
    ellipse(x, y, 45, 45); //Base
    stroke(0, 89, 255); //color of the cup
    strokeWeight(35); //fills out the shape
    point(x,y); //point used for the cup part of the paddle.
    stroke(47, 0, 255); // color of the Handle
    strokeWeight(15); //fills out the shape
    point(x,y); //point used for the handle.
};
/************************************
            Paddle End
*************************************/


/************************
    Creating the Rink
************************/
var drawRink = function()
{
    background(196, 196, 196); //background
        //boards
        stroke(0, 0, 0); //board color
        strokeWeight(2); //board size
        fill(245, 255, 255);
        rect(0, 0, 600, 400); //boards shape
//Goalie zones
//for loop to remake the crease and blue lines
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
    rect(297, 0, 5, 400); //Red line
//Circle
    fill(105, 225, 255); //color of center ice
    ellipse(300, 200, 50, 50); //center ice
//Net
    stroke(255, 0, 0); //pipe color
    strokeWeight(5); //net size
    arc(10, 200, 100, 85, 90, 270); // left net
    arc(591, 200, 100, 85, -89, 90); // right net
//URI Text Center Ice
    textSize(14);
    fill(255, 255, 255);
    text("URI", 289, 192); //URI text in center ice
//Air Holes
//nested for loop used to constantly repeat the circles in a grid to give a feeling of actually playing Air hockey.
        for (var v=1; v < 20; v++) //creates a 20x20 grid of holes
                {
            for (var h=1; h < 20; h++)
            {
                strokeWeight(3); // "hole" size
                stroke(222, 222, 222); // "hole" color
                point(2+29.5*h,20*v); //"hole"
        }
    }
};
/************************
        Rink End
************************/


/************************
        Field 
************************/
var drawsoccerField = function() 
{ 
    //grass
    strokeWeight(5);
    stroke(255, 255, 255); //white border
    fill(3, 150, 0); 
    rect(1,0,598,399); //rectangle to give the field shape.
    //center
    strokeWeight(2);
    stroke(255, 255, 255); // white
    fill(3, 150, 0);
    ellipse(300,200,100,100); //center circle
    line(300,0,300,400); //center line
    strokeWeight(10);
    point(300,200); //center dot

    //Nets
    //left
    strokeWeight(2);
    rect(3,100,86,200); //goal boxes
    rect(3,155,30,90);
    arc(91,200,30,55,-90,90); //left side goal arc
    //right
    rect(512,100,86,200); //goal boxes
    rect(568,155,30,90);
    arc(510,200,30,55,-270,-90); //right side goal arc
};
/************************
        Field End
************************/


/****************************
        Draw Puck & Ball
*****************************/
var drawPuck = function(x,y) 
    {
    noStroke(); //remove previous strokes
    fill(94, 94, 94); //border color
    ellipse(x,y,25,25); //border
    fill(0, 0, 0); //actual puck color
    ellipse(x,y,16,16);  //actual puck shape
};

var drawBall = function(x,y)
    {
    stroke(0, 0, 0); //black outline of the ball
    strokeWeight(1); //outline thickness = 1
    fill(255, 255, 255); //white soccer ball color
    ellipse(x,y,20,20); // ball
};
/****************************
      Draw Puck End
*****************************/


/*******************************
     Main Game  
********************************/
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
        player2X=400;
    };
    this.resetVelocity();

    this.draw = function() {
if (currentScene === 2 || currentScene === 4) {    
    drawPuck(this.position.x,this.position.y);
    }
else if (currentScene === 3) {
    drawBall(this.position.x,this.position.y);
    }
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
                this.velocity.mult(new PVector(-1, 1,1));
            }
        }
    };
    this.update = function() {
        //Handle wall collisions
        if (this.position.x < 10 && this.position.y>150 && this.position.y<280) {
            player2Score++;
            this.position = new PVector(width/2, height/2);
            gameStarted = false;
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
            this.position.x=width;
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


var reset = new Button({  //Reset Puck Button
    x: 249,
    y: 361,
    width: 105,
    height: 35,
    label: "Reset Puck",
    onClick: function() {
           gameStarted=false;
           puck = new Puck(new PVector(width/2,height/2));
    }
});
/*******************************
     Main Game End  
********************************/


/*******************************
     ScoreBoard Function  
********************************/
var drawScore = function() {
//scoreboard
    strokeWeight(3); //thickness
    fill(3, 0, 0); //color of the screen
    stroke(150, 142, 150); //border color
    rect(174,0,246,24,29); //scoreboard
    fill(255, 0, 0); //scoreboard text color
    textSize(16); //size of the text
    
var Player1Score = "Player 1:"+player1Score; //finding the player1score then adding it to the score so that the scoreboard reflects their points
    text(Player1Score, 185,5);
var Player2Score = "Player 2:"+player2Score;
    text(Player2Score, 328,5);
};
/*******************************
     ScoreBoard Function End  
********************************/


/***************************
       Player Update   
****************************/
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
/***************************
       Player Update End  
****************************/


/***************************
       Player Movement  
****************************/
var drawPlayers = function() {
//prevents the player from moving past the red line and the computer from moving past the blue line.
//by doing this it prevents them from having an advantage.
//When the current scene is set to 2 it is drawing the paddles
//Player1 can use the mouse while Player2, the computer has to follow a randomized path from the line (vector) of the ball or puck for its movement.
if (currentScene === 2) {
    mouseX = constrain(mouseX, 0, 300);
    player2Y = constrain(player2Y, 0, 600);
    player2X = constrain(player2X,450,600);
    drawPaddle(mouseX, mouseY, paddleWidth, paddleHeight);
drawPaddleOpponent(player2X, player2Y, paddleWidth, paddleHeight);
}
//When the current scene is set to 3 it is drawing the bitmojis
//Player1 can use the mouse while Player2, the computer has to follow a randomized path of the line (vector) ball or puck for its movement.
else if (currentScene === 3) {
    mouseX = constrain(mouseX, 0, 300);
    player2Y = constrain(player2Y, 0, 600);
    player2X = constrain(player2X,450,600);
    drawBitmojiRyan(mouseX, mouseY,50);
    drawBitmojiJaed(player2X, player2Y);
    }
else if (currentScene === 4) {
    mouseX = constrain(mouseX, 0, 300);
    player2Y = constrain(player2Y, 0, 400);
    player2X = constrain(player2X,300, 600);
    drawPaddle(mouseX, mouseY, paddleWidth, paddleHeight);
drawPaddleOpponent(player2X, player2Y, paddleWidth, paddleHeight);
    }
};
/***************************
       Player Movement End 
****************************/


/***************************
       Home Draw
****************************/
var drawhomeScreen = function() {
    background (80, 199, 153); //background color
    noStroke(); //no outlines
    fill(35, 36, 26, 99); //forms the cool bar on the side.
    rect(0,0,126,400);
    fill(35, 36, 26, 80); //translucent gray, cool overlay.
    rect(126,0,10,400);
    textSize(26); //text size
    fill(105, 99, 99); //text shadow color
    text ("By Ryan & Jaed", 330, 362);
    fill(255, 255, 255); // white text color
    text ("By Ryan & Jaed", 332, 360); //author
    strokeWeight(1); //resetting the strokeweight
    noStroke();
    //Shadow - first blue quad
    fill(59, 58, 59, 50);
    quad(60,90,28,25,120,25,155,90);
//Weirdly cool shapes//
    //First Blue Quad
    fill(25, 156, 250);
    quad(65,85,35,25,120,25,155,85);
    //Shadow - Second Blue Quad
    fill(59, 58, 59, 50);
    quad(445,90,406,25,500,25,540,90);
    //Transparent long Quad
    fill(0, 0, 0,100);
    quad(180,80,145,30,545,30,580,80);
    //Second Blue Quad
    fill(25, 156, 250);
    quad(450,85,415,25,500,25,540,85);
    //Red Quad
    fill(217, 13, 13);
    quad(175,85,140,25,155,25,190,85);
    //TITLE
    textSize(40); 
    fill(54, 54, 54);
    text ("Air Hockey", 192, 31);
    fill(0, 242, 255);
    text ("Air Hockey", 194, 29);
    fill(255, 255, 255);
    stroke(0, 0, 0);
};
/***************************
       Home Draw End
****************************/


/***************************
       Splash Screen 
****************************/
var Splash = function() {
currentScene=1;
    drawhomeScreen();
    //buttons
    multi.draw();
    Soccer.draw();
    howtoPlay.draw();
    start.draw();
    drawBitmojiRyan(308,357,50); //bitmojis
    drawBitmojiJaed(551,342,50);
};
/***************************
      Splash Screen End 
****************************/


/***************************
       Play Screen 
****************************/
var playScreen=function(){
//When the user selects the start button it will select the Hockey mode, which says the current scene is 2 and then draws the hockey rink.
if (currentScene === 2) {
    drawRink();
    reset.draw();
    updatePlayer2();
    drawPlayers();
    puck.draw();
}
//does the same thing but for the soccer button and draws the soccer field.
else if (currentScene === 3) {
    drawsoccerField();
    updatePlayer2();
    drawPlayers();
}
//now moves the computer player, draws both the User and computer so you can see yourself interacting and playing the game.
else if (currentScene === 4) {
    drawRink();
    reset.draw();
    puck.draw(); //puts the Puck/ball on screen to be hit into the net
drawPlayers();
var movePlayerUp = function() {
    player2Y -= PLAYER_MOVE_SPEED;
};
var movePlayerDown = function() {
    player2Y += PLAYER_MOVE_SPEED;
};
var movePlayerRight=function(){
    player2X+=PLAYER_MOVE_SPEED;
};
var movePlayerLeft=function(){
    player2X-=PLAYER_MOVE_SPEED;
};
if (keyIsPressed) {
        if (keyCode === UP){
            movePlayerUp();
        }
        else if (keyCode === DOWN){
            movePlayerDown();
        }
     else if (keyCode===RIGHT){
            movePlayerRight();
        }
        else if(keyCode===LEFT){
            movePlayerLeft();
        }
    }
}

    drawScore(); //puts the scoreboard on the screen
    puck.draw();

//if the game is not started the clock starts, and when the time is 
    if (!gameStarted) {
        t++;
        if (t >= pauseTime) {
            t = 0;
            gameStarted = true;
        }
        return;
    }
puck.update();

if (currentScene === 6) {
   multihockey.draw();
    }  
};
/***************************
       Play Screen End 
****************************/


/***********************************
       Instructions Screen 
********'***************************/
var instructions = function(){
    currentScene = 5; //tells the game it is set to the 5th sceen and lays out the instructions on how to play the game.
    background (100, 232, 208); //background color
    noStroke();
    fill(35, 36, 26, 99);
    rect(0,0,600,80);
    fill(35, 36, 26, 80);
    rect(0,80,600,8);
    fill(255, 255, 255);
    rect(1,75,598,4,20);
    textSize(48);
    fill(105, 99, 99);
    text ("How to play", 172, 18);
    fill(0, 242, 255);
    text ("How to play", 170, 16);
    fill(35, 36, 26, 99);
    rect(0,350,600,50);
    fill(35, 36, 26, 80);
    rect(0,342,600,8);
    fill(255, 255, 255);
    rect(1,350,598,4,20);
    strokeWeight(1);
    textSize(14);
    fill(8, 8, 8);
    text ("Move your mouse to move the paddle.", 15, 113);
    text ("The direction you move your mouse is the direction the paddle moves.", 15, 130);
    stroke(0, 0, 0);
    back.draw();
};
/***********************************
       Instructions Screen  End 
********'***************************/


var twoversion=function(){
currentScene=6;
    drawhomeScreen();
    //buttons
    multihockey.draw();
    drawBitmojiRyan(308,357,50); //bitmojis
    drawBitmojiJaed(551,342,50);
};


/****************************
    MouseClicked Function 
*****************************/
mouseClicked = function() {
    //You can only click the buttons when the scene is set to 1 as to not interfere with the game
    if (currentScene === 1)
    {
        multi.handleMouseClick();
        Soccer.handleMouseClick();
        start.handleMouseClick();
        howtoPlay.handleMouseClick();
    }
    if (currentScene === 2 || currentScene === 4)
    {
        reset.handleMouseClick();
    }
    //You can only click the back button when the scene is set to 5 as to not interfere with the splash screen
    else if (currentScene === 5)
    {
        back.handleMouseClick();
    }
    else if (currentScene === 6)
    {
        multihockey.handleMouseClick();
    }
};
/****************************
    MouseClicked Function End
*****************************/


/*************************
       Draw Function
**************************/
draw = function() {
    if (currentScene === 1) //Scene 1 is the "Splash Screen"
    {  
        Splash();  
    }
    else if (currentScene === 2 || currentScene === 3 || currentScene === 4) //Scene 2 allows for the game to start in the default mode, "Hockey"
    {
        playScreen();
    }
    else if (currentScene === 5) // Scene 5 shows the player the instructions on how to play the game.
    {
        instructions();
    }
    else if (currentScene === 6){
        twoversion();
    }
};
/*************************
    Draw Function End
**************************/
