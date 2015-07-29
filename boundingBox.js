function boundingBox(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.width=w;
    this.height=h;
}

boundingBox.prototype.Update = function() {
    this.t = [this.x, this.y, this.x + this.width, this.y];     // Top
    this.b = [this.x, this.y + this.height, this.x + this.width, this.y + this.height]; // Bottom
    this.l = [this.x, this.y, this.x, this.y + this.height];    // Left
    this.r - [this.x + this.width, this.y, this.x + this.width, this.y + this.height];  // Right
}

boundingBox.prototype.getX = function() {
    return this.x;
}

boundingBox.prototype.getY = function() {
    return this.y;
}

boundingBox.prototype.getW = function() {
    return this.width;
}

boundingBox.prototype.getH = function() {
    return this.height;
}

boundingBox.prototype.setX = function(x) {
    this.x = x;
}

boundingBox.prototype.setY = function(y) {
    this.y = y;
}

boundingBox.prototype.setW = function(w) {
    this.width = w;
}

boundingBox.prototype.setH = function(h) {
    this.height = h;
}

boundingBox.prototype.getT = function() {
    return this.t;
}

boundingBox.prototype.getB = function() {
    return this.b;
}

boundingBox.prototype.getL = function() {
    return this.l;
}

boundingBox.prototype.getR = function() {
    return this.r;
}

boundingBox.prototype.checkCollision = function(t,b,l,r) {
    if (this.b > t || this.t < b || this.l > r || this.r < l)   
        return true;
    else
        return false;
}   
