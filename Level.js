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

