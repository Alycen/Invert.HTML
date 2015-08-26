var game;

var requestAnimFrame = (function() {
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function GameActivity() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.touch = new TouchHandler();
}

function main() {
    game = new GameActivity();
    //game.level = new Level(0);
    game.scene = new MainMenuScene();
    game.player = new Player(((game.screenWidth/2)-(game.screenWidth/14)),((game.screenHeight/2)-(game.screenHeight/14)),40,40);
    //game.SceneManager = new SceneManager();
    game.initCanvas();
    game.touch.main();
    game.gameLoop();
}

GameActivity.prototype.initCanvas = function() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.canvas.width = this.screenWidth;
    this.canvas.height  = this.screenHeight;
}

GameActivity.prototype.gameLoop = function() { 
    game.Draw();
    game.touch.getX();
    game.touch.getY();
    game.scene.Update();
    game.player.Update();
    window.requestAnimFrame(game.gameLoop);
}

GameActivity.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    //game.level.Draw();
    game.scene.Draw();
    game.player.Draw();
    game.touch.Draw();
}

GameActivity.prototype.setScene = function(scene) {
    if(scene==0)
        game.SceneManager.setScene("splash");
    //else if(scene==1)
    //    game.SceneManager.setScene("mainMenu");
    //else if(scene==2)
    //    game.SceneManager.setScene("loading");
    //else if(scene==3)
    //    game.SceneManager.setScene("game");
}

/*GameActivity.prototype.checkScene = function() {
    if(game.level.getLevel()==0)
        MENU_SCENE;
    //else if(game.level.getLevel()==1)

}*/

//******************************//

function onTouchStart(e) {
    e.preventDefault();
    game.touch.touches = e.touches;
}

function onTouchMove(e) {
    e.preventDefault();
    game.touch.touches = e.touches;
}

function onTouchEnd(e) {
    e.preventDefault();
    game.touch.touches = e.touches;
    //put an end check in here
}
