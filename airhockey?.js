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


