function SplashScene() {
	this.bg.src = "assets/gfx/Background/bg00.png";
	this.playerVisible = false;
}

SplashScene.prototype = new BaseScene()
{

}

SplashScene.prototype.Wait = function() {
	setTimeout(function(){
		game.scene = new MainMenuScene();
	}, 3000);
}

SplashScene.prototype.Update = function() {
	this.Wait();
}