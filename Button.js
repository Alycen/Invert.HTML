function Button(x,y,w,h,name) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.img = new Image();
	this.type = name;
	this.img.src = "assets/gfx/buttons/"+name+".png";
}

Button.prototype.Update = function() {
	//might have to change these
	this.checkMulti();
	this.checkAudio();
}

Button.prototype.isPressed = function() {
	if( yes ) {
		return true;
	}
	else 
		return false;
}

Button.prototype.isSelected = function() {
	if( yes ) {
		return true;
	}
	else 
		return false;
}

Button.prototype.checkMulti = function() {
	if( game.touch.getX() > this.x && game.touch.getX() < this.x + this.width && game.touch.getY() > this.y && game.touch.getY() < this.y + this.height && game.multiOn == false && this.type == 'multi')
		game.multiOn = true;
	else if( game.touch.getX() > this.x && game.touch.getX() < this.x + this.width && game.touch.getY() > this.y && game.touch.getY() < this.y + this.height && game.multiOn == true && this.type == 'multi')
		game.multiOn = false;
}

Button.prototype.checkAudio = function() {
	if( game.touch.getX() > this.x && game.touch.getX() < this.x + this.width && game.touch.getY() > this.y && game.touch.getY() < this.y + this.height && game.audioOn == false && this.type == 'music')
		game.audioOn = true;
	else if( game.touch.getX() > this.x && game.touch.getX() < this.x + this.width && game.touch.getY() > this.y && game.touch.getY() < this.y + this.height && game.audioOn == true && this.type == 'music')
		game.audioOn = false;
}

Button.prototype.Draw = function() {
	if (game.audioOn == true && this.type == "music")
		game.ctx.drawImage(this.img,0, 0, 80, 30, this.x, this.y, this.width, this.height);
	else if (game.audioOn == false && this.type == "music")
		game.ctx.drawImage(this.img,80, 0, 80, 30, this.x, this.y, this.width, this.height);

	if (game.multiOn == true && this.type == "multi")
		game.ctx.drawImage(this.img,0, 0, 80, 30, this.x, this.y, this.width, this.height);
	else if (game.multiOn == false && this.type == "multi")
		game.ctx.drawImage(this.img,80, 0, 80, 30, this.x, this.y, this.width, this.height);
}