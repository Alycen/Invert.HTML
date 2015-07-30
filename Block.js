var PLAYER = 0, WALL = 1, BOULDER = 2, PICKUP = 3;

function Block(type) {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 10;
    this.isVisible = false;
    this.boundingBox = new boundingBox(this.x,this.y.this.width,this.height);
    this.type = type;
}

Block.prototype.Update = function() {
    
}

Block.prototype.Move() {

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
