function HUD() {
	this.img = new Image();
	this.img.src = "assets/gfx/coin.png";
	this.x = (game.screenWidth / 1.5) ;
	this.y = 15;
	this.width = game.screenWidth / 16;
	this.height = game.screenHeight / 16;
	this.curr = 5;
}

HUD.prototype.Update = function() {
	this.Draw();
}

HUD.prototype.Draw = function() {
	for ( i = 0; i < this.curr; i ++) 
		game.ctx.drawImage(this.img,this.x+(i*this.width),this.y, this.width, this.height);
}

HUD.prototype.deduct = function() {
	if (this.curr > 0)
		this.curr -= 1;
}

HUD.prototype.add = function() {
	if(this.curr < 6)
		this.curr += 1;
}

