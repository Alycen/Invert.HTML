function boundingBox(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.width=w;
    this.height=h;
}

boundingBox.prototype.getX = function() {
    return this.x;
}

boundingBox.prototype.getY = function() {
    return this.y;
}

boundingBox.prototype.setX = function(x) {
    this.x = x;
}

boundingBox.prototype.setY = function(y) {
    this.y = y;
}

boundingBox.prototype.checkCollision = function(x,y,w,h) {
    /* is (box1.bottom < box2.top)
       is (box1.top > box2.bottom)
       is (box1.left > box2.right) //  is (box1.left to the right of box2.right)
       is (box1.right < box2.left) //  is (box1.right to the left of box2.left)
    */
}
