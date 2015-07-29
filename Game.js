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
}

function main() {
    game = new Game();
    
}

Game.prototype.initCanvas = function() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
    this.canvas.width = this.screenWidth;
    this.canvas.height  = this.screenHeight;
}

Game.prototype.gameLoop = function() { 

}

Game.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
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
