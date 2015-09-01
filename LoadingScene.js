function LoadingScene() {
	this.bg.src = "assets/gfx/loading.png";
	this.playerVisible  = false;
	this.player = new Player(-100,-100,1,1);
	this.i = 10;
}

LoadingScene.prototype = new BaseScene() 
{

}

LoadingScene.prototype.Wait = function() {
	setTimeout(function(){game.scene = new GameScene();}, 3000);
}

LoadingScene.prototype.Update = function() {
	this.i --;
	if(this.i == 0)
		this.i = 10;
	this.Wait();
}

LoadingScene.prototype.Draw = function() {
	game.ctx.drawImage(this.bg,100 * this.i, 0, 100, 100, (game.screenWidth / 2) - 100, (game.screenHeight / 2) - 100, 200, 200);
}