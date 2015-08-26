function SettingsScene() {
	this.bg.src = "assets/gfx/Background/bg03.png";
	this.player = new Player(0,((game.screenHeight/2)-(game.screenHeight/14)),40,40);
	this.playerVisible = true;
}

SettingsScene.prototype = new BaseScene()
{

}

SettingsScene.prototype.checkBounds = function() {
	if(this.player.y > game.screenHeight) {
		console.log("RETURN");
		game.scene = new MainMenuScene();
	}
}

SettingsScene.prototype.Update = function() {
	this.checkBounds();
	this.player.Update();
}