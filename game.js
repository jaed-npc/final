var currentScene = 0;

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


/***************************************
            SPLASH SCREEN
***************************************/
var splash = function ()
{
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
/***************************************
             SPLASH END
***************************************/



mouseClicked = function() {
    start.handleMouseClick();
};




draw = function() {
    if (currentScene === 0)
    { 
        splash(); 
        }
            else
    {background(0, 0, 0);}
};
