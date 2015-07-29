function touchHandler() {
    this.touches = [];
    this.touchable;
    this.prevX;
    this.prevY;
}

touchHandler.prototype.main = function() {
    this.touchable = 'createTouch' in document;
    if(this.touchable) {
        game.canvas.addEventListener("touchstart",onTouchStart,false);
        game.canvas.addEventListener("touchmove",onTouchMove,false);
        game.canvas.addEventListener("touchend",onTouchEnd,false);
    }
}

touchHandler.prototype.Draw = function() {
    for(var i=0; i<this.touches.length; i++) {
        var touch = this.touches[i];
        game.ctx.beginPath();
        game.ctx.strokeStyle = "blue";
        game.ctx.lineWidth = "5";
        game.ctx.arc(touch.clientX, touch.clientY, 20, 0, Math.PI*2, true);
        game.ctx.stroke();
    }
}

touchHandler.prototype.getX = function() {
    for(var i=0; i<this.touches.length; i++) {
        var touch = this.touches[i];i
        if(i != 0)
            this.prevX = this.touches[i-1].clientX;
        return touch.clientX;
    }
}

touchHandler.prototype.getY = function() {
    for(var i=0; i<this.touches.length; i++) {
        var touch = this.touches[i];
        if(i != 0)
            this.prevY = this.touches[i-1].clientY;
        return touch.clientY;
    }
}

touchHandler.prototype.invertVector = function() {
//    if(getX() > this.prevX)  
        // move left -1
//    else if(getX() < this.prevX)
        // move right +1
//    if(getY() > this.prevY)
        // move up -1 
//    else if(getY() < this.prevY)
        // move down +1
}   
