function Player() {
    this.x = 0;
    this.y = 0;
    this.width = 10;
    this.height = 10;
    this.isVisible = false;
    this.boundingBox = new boundingBox(this.x,this.y.this.width,this.height);
}

Player.prototype.Update = function() {
    
}

Player.prototype.getX = function() {
    return this.x;
}

Player.prototype.getY = function() {
    return this.y;
}

Player.prototype.setX = function(x) {
    this.x = x;
}

Player.prototype.setY = function(y) {
    this.y = y;
}
