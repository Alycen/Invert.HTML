function touchHandler() {
    this.touches = [];
    this.touchable;
    this.prevX = 0;
    this.prevY = 0;
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
        touch = this.touches[i];
        if(touch.clientX > this.prevX && touch.clientX != this.prevX)  
            console.log("move left -1"); 	// game.player.Move(1);
        else if(touch.clientX < this.prevX && touch.clientX != this.prevX)
            console.log("move right +1");	// game.player.Move(2);
        this.prevX = touch.clientX;
        return touch.clientX;
    }
    
}

touchHandler.prototype.getY = function() {
    for(var i=0; i<this.touches.length; i++) {
        if(touch.clientY > this.prevY && touch.clientY != this.prevY)
            console.log("move up -1");		// game.player.Move(3);
        else if(touch.clientY < this.prevY && touch.clientY != this.prevY)
            console.log("move down +1");	// game.player.Move(4);
        this.prevY = touch.clientY;
        return touch.clientY;
    }
   
}

touchHandler.prototype.invertVector = function() {

}   
