function SettingsScene() {
	this.bg.src = "assets/gfx/Background/bg03.png";
	this.player = new Player(0,((game.screenHeight/2)-(game.screenHeight/14)),40,40);
	this.playerVisible = true;
	this.music = new Button((game.screenWidth /2) - 60,game.screenHeight/4,120,50,'music');
	this.multi = new Button((game.screenWidth /2) - 60,game.screenHeight/2,120,50,'multi');
}

SettingsScene.prototype = new BaseScene()
{

}

SettingsScene.prototype.checkBounds = function() {
	if(this.player.y > game.screenHeight) {
		game.scene = new MainMenuScene();
	}
}

SettingsScene.prototype.Update = function() {
	this.checkBounds();
	this.multi.Update();
	this.music.Update();
	this.player.Update();
}

SettingsScene.prototype.CheckButtons = function() {

}

SettingsScene.prototype.Draw = function() {
	game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
	this.music.Draw();
	this.multi.Draw();	
	this.player.Draw();
}