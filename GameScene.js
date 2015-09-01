function GameScene() {
	this.bg.src = "assets/gfx/Background/bg02.png";
	this.player = new Player(game.screenWidth - 40,(((game.screenHeight/2)-(game.screenHeight/14)) + (game.screenHeight/16)),game.screenWidth/10,game.screenHeight/17);
	this.playerVisible = true;
	this.level = new Level(1);
	this.hud = new HUD();
	this.timer = 350;
}

GameScene.prototype = new BaseScene() 
{

}

GameScene.prototype.checkBounds = function() {
	/*if(this.player.y < 0 || this.player.y > game.screenHeight) {
	}
	if(this.player.x < 0 || this.player.x > game.screenWidth) {
	}*/
} 

GameScene.prototype.Update = function() {
	this.checkBounds();
	this.level.Update();
	this.player.Update();
	this.hud.Update();
	if (this.timer == 0) {
		this.hud.deduct();
		this.timer = 250;
	}
	this.timer --;
}

//GameScene.prototype.onBackButtonPressed = function() {}

GameScene.prototype.Draw = function() {
	game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
	this.player.Draw();
	this.level.Draw();
	this.hud.Draw();
}

GameScene.prototype.getLevel = function() {
	return this.level.lvl;
}
