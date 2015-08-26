function Level(lvl) {
    this.lvl = lvl;
}

/*Level.prototype.getLevel = function() {
        return this.lvl;
}*/

Level.prototype.Update = function() {

}

Level.prototype.setLevel = function(lvl) {
    this.lvl = lvl;
    this.bg.src = "assets/gfx/Background/lvl"+lvl+".png";
}

Level.prototype.getLevel = function() {
    return this.lvl;
}

Level.prototype.Draw = function() {
    game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
}

Level.prototype.StartMenu = function() {
    game.level.setLevel(0);    // 0:Start
    w = game.screenWidth / 12;
    h = game.screenHeight / 4;
    x = 0;
    y = (game.screenHeight/2)-(h/2);
    start = new Block(x,y,w,h,2);
    start.Draw();
    x = game.screenWidth-w
    settings = new Block(x,y,w,h,2);
    settings.Draw();
    w = h;
    h = game.screenWidth / 12;
    x = (game.screenWidth/2)-(w/2);
    y = 0;
    quit = new Block(x,y,w,h,2);
    quit.Draw();
    
}
