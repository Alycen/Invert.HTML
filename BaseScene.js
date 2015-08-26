function BaseScene() {
	this.bg = new Image();
}

BaseScene.prototype.Update = function() {

}

BaseScene.prototype.Draw = function() {
	game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
}