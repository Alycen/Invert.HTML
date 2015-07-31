function Level(lvl) {
//    this.scale = 1;
//    this.isVisible = false;
    this.bg = new Image();
    this.bg.src = "assets/gfx/Background/lvl"+lvl+".png";
    this.lvl = lvl;
}

/*Level.prototype.getLevel = function() {
        return this.lvl;
}*/

Level.prototype.setLevel = function(lvl) {
    this.lvl = lvl;
    this.bg.src = "assets/gfx/Background/lvl"+lvl+".png";
}

Level.prototype.getLevel = function() {
    return this.lvl
}

Level.prototype.Draw = function() {
    game.ctx.drawImage(this.bg,0,0,game.screenWidth,game.screenHeight);
}


