function GameScene() {
	this.bg.src = "assets/gfx/Background/bg02.png";
	this.player = new Player(game.screenWidth - 40,((game.screenHeight/2)-(game.screenHeight/14)),40,40);
	this.playerVisible = true;
	this.level = 1;
}

GameScene.prototype = new BaseScene() 
{

}

GameScene.prototype.checkBounds = function() {
	if(this.player.y < 0 || this.player.y > game.screenHeight) {
		console.log("STOP");
	}
	if(this.player.x < 0 || this.player.x > game.screenWidth) {
		console.log("STOP");
	}
} 

GameScene.prototype.Update = function() {
	this.checkBounds();
	this.player.Update();
}

//GameScene.prototype.onBackButtonPressed = function() {}