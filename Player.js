function Player(x,y,w,h) {
	this.x = x;
	this.y = y;
    this.initialx = x;
    this.initialy = y;
	this.width = w;
	this.height = h;
	this.img = new Image();
	this.img.src = "assets/gfx/playerMint.png";
    this.speed = 5;
    this.i = 50;
}

Player.prototype = new Block() 
{

}

Player.prototype.Update = function() {
    this.i --;
    if ( this.i == 0)
        this.i = 50;
}

Player.prototype.Move = function(dir) {
    if (dir == 1) 	// UP
	   this.y -= this.speed;
    else if (dir == 2)	// DOWN
	   this.y += this.speed;
    if (dir == 3)	// LEFT
	   this.x -= this.speed;
    else if (dir ==4)	// RIGHT
	   this.x += this.speed;
}

Player.prototype.Kill = function() {
    this.x = this.initialx;
    this.y = this.initialy;
}

Player.prototype.Stop = function() {
    if(this.stop)
        this.speed = 0;
    else if(this.stop == false)
        this.speed = 5;
}

Player.prototype.Draw = function() {
    game.ctx.drawImage(this.img,1 * this.i, 0, 1, 1, this.x, this.y, this.width, this.height);

}