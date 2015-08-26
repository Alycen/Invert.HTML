function BaseScene() {
	this.bg = new Image();
	this.bBox;
}

BaseScene.prototype.checkBounds = function() {

}

BaseScene.prototype.Update = function() {
	this.bBox = new BoundingBox(0,0,game.screenWidth,game.screenHeight);
}

BaseScene.prototype.Draw = function() {
	game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
}