function Button(x,y,w,h,name) {
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.img = new Image();
	this.img.src = "assets/gfx/buttons/"+name+".png";
}

Button.prototype.Update = function() {
	//might have to change these
}

Button.prototype.isPressed = function() {
	if( yes ) {
		return true;
	}
	else 
		return false;
}

Button.prototype.isSelected = function {
	if( yes ) {
		return true;
	}
	else 
		return false;
}

Button.prototype.Draw = function() {
	game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
}