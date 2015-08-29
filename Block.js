function Block(x,y,w,h,type) { 
    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.bBox;
    this.btype = type;
    this.img = new Image();
    this.img.src = "assets/gfx/block"+type+".png";
}

Block.prototype.Update = function() {
    bBox = new BoundingBox(this.x,this.y,this.width,this.height)
}

Block.prototype.Draw = function() {
    game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}

Block.prototype.setType = function(type) {
    this.img.src = "assets/gfx/block"+this.btype+".png"
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

Block.prototype.setPos = function(x,y) {
    this.x = x;
    this.y = y;
}

Block.prototype.setDimensions = function(w,h) {
    this.width = w;
    this.height = h;
}

