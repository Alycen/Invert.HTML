function BoundingBox(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.width=w;
    this.height=h;
}

BoundingBox.prototype.Update = function() {
    /*this.t = [this.x, this.y, this.x + this.width, this.y];     // Top
    this.b = [this.x, this.y + this.height, this.x + this.width, this.y + this.height]; // Bottom
    this.l = [this.x, this.y, this.x, this.y + this.height];    // Left
    this.r - [this.x + this.width, this.y, this.x + this.width, this.y + this.height];  // Right */
}

BoundingBox.prototype.CollidesWith = function(t,b,l,r) {
    /*if (this.b > t || this.t < b || this.l > r || this.r < l)   
        return true;
    else
        return false;*/
}
   
/* * * * * * * * * * * * * * * * * * * */

BoundingBox.prototype.getX = function() {
    return this.x;
}

BoundingBox.prototype.getY = function() {
    return this.y;
}

BoundingBox.prototype.getW = function() {
    return this.width;
}

BoundingBox.prototype.getH = function() {
    return this.height;
}

/* * * * * * * * * * * * * * * * * * * */

BoundingBox.prototype.setX = function(x) {
    this.x = x;
}

BoundingBox.prototype.setY = function(y) {
    this.y = y;
}

BoundingBox.prototype.setW = function(w) {
    this.width = w;
}

BoundingBox.prototype.setH = function(h) {
    this.height = h;
}

/* * * * * * * * * * * * * * * * * * * */

// BoundingBox.prototype.getT = function() {
//     return this.t;
// }

// BoundingBox.prototype.getB = function() {
//     return this.b;
// }

// BoundingBox.prototype.getL = function() {
//     return this.l;
// }

// BoundingBox.prototype.getR = function() {
//     return this.r;
// }

