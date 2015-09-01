function EndScene() {
	this.bg.src = "asstes/gfx/Background/bg03.png";
	this.img = new Image();
	this.img.src = "asstes/gfx/coin.png";
	this.x = 40;
	this.y = game.screenHeight / 2;
	this.width = 30;
	this.height = 50;
}

EndScene.prototype.Draw = function() {
	game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
	for (i = 0; i < game.scene.hud.total; i ++)
		game.ctx.drawImage(this.img,this.x+(i*this.width),this.y, this.width, this.height);
}