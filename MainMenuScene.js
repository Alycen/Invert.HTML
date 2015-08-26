function MainMenuScene() {
	this.bg.src = "assets/gfx/Background/bg01.png";
	// mainMenu should have its own player not game activity
}

MainMenuScene.prototype = new BaseScene() 
{

}

MainMenuScene.prototype.checkBounds = function() {
	if(game.player.y < 0) {
		console.log("EXIT");
		//window.history.back(-1);
	}
}

MainMenuScene.prototype.Update = function() {
	this.checkBounds();
} 