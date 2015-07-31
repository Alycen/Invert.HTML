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
    this.screenHeight = window.innerHeight;
    this.touch = new touchHandler();
}

function main() {
    game = new Game();
    game.level = new Level(0);
    game.player = new Block(((game.screenWidth/2)-(game.screenWidth/14)),((game.screenHeight/2)-(game.screenHeight/14)),40,40,0);
    game.initCanvas();
    game.touch.main();
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
    game.checkLevel();
    //game.getLevel();
    game.touch.getX();
    game.touch.getY();
    window.requestAnimFrame(game.gameLoop);
}

Game.prototype.Draw = function() {
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    game.level.Draw();
    game.player.Draw();
    game.touch.Draw();
}

Game.prototype.setLevel = function(lvl) {
    if(lvl==0)
        game.level.setLevel(0);
    //else if(lvl==1)
    //    game.level.setLevel(1);
    //else if(lvl==2)
    //    game.level.setLevel(2);
    //else if(lvl==3)
    //    game.level.setLevel(3);
    //else if(lvl==4)
    //    game.level.setLevel(4);
}

Game.prototype.checkLevel = function() {
    if(game.level.getLevel()==0)
        game.level.StartMenu();
    //else if(game.level.getLevel()==1)

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
