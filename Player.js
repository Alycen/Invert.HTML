function Player(x,y,w,h) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.img = new Image();
	this.img.src = "assets/gfx/playerMint.png";
}

Player.prototype = new Block() 
{

}

/*var img = new Image();
var index = 0;

Player.prototype.Draw = function() {
	x=0;
	y=0;
	this.img = new Image();
	this.img.src = "assets/gfx/playerMint.png";
	img = this.img;
    this.img.onload = function() {
        width = img.width;
        height = img.height;
        
        frameSize = 1;

        setInterval(function () {
            game.ctx.drawImage(img, x, 0, frameSize, frameSize, this.x, this.x, 100, 100);
            x += frameSize;
            index += 1;
            if(index >= 10) {
                x = 0;
                index = 0;
            }
            else if(x + frameSize > 10) {
                x = 0;
            }
        }, 1000/30);
    };
}*/

Player.prototype.Move = function(dir) {
    if (dir == 1) 	// UP
	   this.y -= 5;
    else if (dir == 2)	// DOWN
	   this.y += 5;
    if (dir == 3)	// LEFT
	   this.x -= 5;
    else if (dir ==4)	// RIGHT
	   this.x += 5;
}

Player.prototype.Kill = function() {
    
}