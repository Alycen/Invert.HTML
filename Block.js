function Block() {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 10;
    this.isVisible = false;
    this.boundingBox = new boundingBox(this.x,this.y.this.width,this.height);
}

Block.prototype.Update = function() {
    
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
