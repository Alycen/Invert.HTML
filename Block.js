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
    this.isColliding();
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

Block.prototype.isColliding = function() {
    var player = game.scene.player;

    rect1 = {x: player.getX(), y: player.getY(), width: player.width, height: player.height};
    rect2 = {x: this.x, y: this.y, width: this.width, height: this.height};

    if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
        if (this.btype == 1)
            console.log("Barrier");
        else if(this.btype == 2)
            game.scene.player.Kill();
        else if(this.btype == 3)
            //game.scene.level = game.scene.level +1;
    }
}

