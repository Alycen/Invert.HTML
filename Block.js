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
    //bBox = new BoundingBox(this.x,this.y,this.width,this.height)

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

Block.prototype.isColliding = function(player) {
    t1 = [this.x,this.y,this.x+this.width,this.y];
    b1 = [this.x,this.y+this.height,this.x+this.width,this.y+this.height];
    l1 = [this.x,this.y,this.x,this.y+this.height];
    r1 = [this.x+this.width,this.y,this.x+this.width,this.y+this.height];

    t2 = [player.x,player.y, player.x+player.width,player.y];
    b2 = [player.x,player.y+player.height, player.x+player.width,player.y+player.height];
    l2 = [player.x,player.y, player.x,player.y+player.height];
    r2 = [player.x+player.width,player.y, player.x+player.width,player.y+player.height];

    
}