function Player(x,y,w,h) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.boundingBox = new BoundingBox(this.x,this.y,this.width,this.height);
	this.img = new Image();
	this.img.src = "assets/gfx/playerMint.png";
}

Player.prototype = new Block() 
{

}

Player.prototype.Move = function(dir) {
    if (dir == 1) 	// UP
	   this.y -= 3;
    else if (dir == 2)	// DOWN
	   this.y += 3;
    if (dir == 3)	// LEFT
	   this.x -= 3;
    else if (dir ==4)	// RIGHT
	   this.x += 3;
}