function Block(type) { // 1:Player;2:Wall;3:Menu;
    this.width = 10;
    this.height = 10;
    this.x = game.screenWidth / 2 - this.width;
    this.y = game.screenHeight / 2 - this.height;
    this.isVisible = false;
    this.boundingBox = new boundingBox(this.x,this.y,this.width,this.height);
    this.type = type;
    this.img = new Image();
    this.img.src = "assets/gfx/block"+type+".png"
}

Block.prototype.Update = function() {
    
}

Block.prototype.Draw = function() {
    console.log("Block Draw");
    game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}

Block.prototype.Move = function() {

}

Block.prototype.getX = function() {
    return this.x;
}

Block.prototype.getY = function() {
    return this.y;
}

Block.prototype.setX = function(x) {
    this.x = x;
}

Block.prototype.setY = function(y) {
    this.y = y;
}
