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
