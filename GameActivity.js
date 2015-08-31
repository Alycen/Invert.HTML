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
    this.audio = new Audio('assets/mfx/bgm.ogg');
    this.audioOn = true;
    this.multiOn = false;
}

function main() {
    game = new GameActivity();
    game.scene = new SplashScene();
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
    if(this.audioOn)
        this.audio.play();
    else if (this.audioOn == false)
        this.audio.pause();

    game.Draw();
    game.touch.getX();
    game.touch.getY();
    game.scene.Update();
    window.requestAnimFrame(game.gameLoop);
}

GameActivity.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    game.scene.Draw();
    game.touch.Draw();
}

GameActivity.prototype.setScene = function(scene) {

}

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
