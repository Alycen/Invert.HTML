function BaseScene() {
	this.bg = new Image();
	this.bBox;
	this.player;
	this.playerVisible = false;
}

BaseScene.prototype.checkBounds = function() {

}

BaseScene.prototype.Update = function() {
	this.bBox = new BoundingBox(0,0,game.screenWidth,game.screenHeight);
	this.checkBounds();
}

BaseScene.prototype.Draw = function() {
	game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
	if(this.playerVisible){
		this.player.Draw();
	}
	else {
		//Do nothing
	}
}
