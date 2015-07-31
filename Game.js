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

function Game() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innderHeight;
    this.touch = new touchHandler();
}

function main() {
    game = new Game();
    game.level = new Level(1);
    game.player = new Block(0);
    game.touch.main();
    game.initCanvas();
    game.gameLoop();
}

Game.prototype.initCanvas = function() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.canvas.width = this.screenWidth;
    this.canvas.height  = this.screenHeight;
}

Game.prototype.gameLoop = function() { 
    game.Draw();
    //game.getLevel();
    window.requestAnimFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    game.level.Draw();
    game.player.Draw();
    game.touch.Draw();
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
