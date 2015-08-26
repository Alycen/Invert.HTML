function MainMenuScene() {
	this.bg.src = "assets/gfx/Background/bg01.png";
	this.player = new Player(((game.screenWidth/2)-(game.screenWidth/14)),((game.screenHeight/2)-(game.screenHeight/14)),40,40);
	this.playerVisible = true;
}

MainMenuScene.prototype = new BaseScene() 
{

}

MainMenuScene.prototype.checkBounds = function() {
	if(this.player.y < 0) {
		console.log("EXIT");
		//window.history.back(-1);
	}
	if(this.player.x + this.player.width < 0) {
		game.scene = new GameScene();
	}
	else if (this.player.x > game.screenWidth) {
		game.scene = new SettingsScene();
		console.log("Settings");
	}
} 

MainMenuScene.prototype.Update = function() {
	this.checkBounds();
	this.player.Update();
} 

