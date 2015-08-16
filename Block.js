function Block(x,y,w,h,type) { // 0:Player;1:Wall;2:Menu;
    this.width = w;
    this.height = h;
    this.x = x;//game.screenWidth / 2 - (this.width / 2);
    this.y = y;//game.screenHeight / 2 - (this.height / 2);
    this.isVisible = false;
    this.boundingBox = new boundingBox(this.x,this.y,this.width,this.height);
    this.btype = type;
    this.img = new Image();
    this.img.src = "assets/gfx/block"+type+".png";
}

Block.prototype.Update = function() {
    this.img.src = "assets/gfx/block"+this.btype+".png";
}

Block.prototype.Draw = function() {
    game.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
}

// Move has a set speed right now. so the users input will not effect the block speed at all which could make confusing controls
// might re think the logic once I can tesst it
Block.prototype.Move = function(dir) {
    if (dir == 1) 	// UP
	this.y -= 3;
    else if (dir == 2)	// DOWN
	this.y += 3;
    if (dir == 3)	// LEFT
	this.x -= 3;
    else if (dir ==4)	// RIGHT
	this.x += 3;
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

Block.prototype.PlayerInput = function() {
}
