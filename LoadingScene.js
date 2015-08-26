function LoadingScene() {
	this.bg.src = "assets/gfx/loading.png";
	this.playerVisible  = false;
	this.player = new Player(-100,-100,1,1);
}

LoadingScene.prototype = new BaseScene() 
{

}

LoadingScene.prototype.Wait = function() {
	setTimeout(function(){game.scene = new GameScene();}, 3000);
}

LoadingScene.prototype.Update = function() {
	this.Wait();
}