var blocks = [];
var PLAYER = 1, STOP = 2, KILL = 3, FINISH = 4;
var block_num;
var block_w =  window.innerWidth / 9;
var block_h =  window.innerHeight / 16;
var level_1 = [
	[2,2,2,4,4,4,2,2,2],
	[2,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,2],
	[2,0,0,2,2,2,2,2,2],
	[2,0,0,2,2,2,2,2,2],
	[2,0,0,2,2,2,2,2,2],
	[2,0,0,2,2,2,0,0,0],
	[2,0,0,2,2,2,0,0,1],
	[2,0,0,2,2,2,0,0,0],
	[2,0,0,2,2,2,0,0,2],
	[2,0,0,2,2,2,0,0,2],
	[2,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,2],
	[2,0,0,0,0,0,0,0,2],
	[2,2,2,2,2,2,2,2,2]
];

var level_2 = [
	[3,3,3,3,3,3,3,3,3],
	[3,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,3],
	[3,0,0,0,2,0,0,0,3],
	[3,0,0,0,2,0,0,0,3],
	[3,0,0,3,3,3,0,0,3],
	[4,0,0,0,0,0,0,0,0],
	[4,0,0,2,0,0,0,0,0],
	[4,0,0,2,0,0,0,0,0],
	[3,2,2,2,0,0,2,2,3],
	[3,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,3],
	[3,0,0,0,0,0,0,0,3],
	[3,3,2,0,1,0,2,3,3]
];

var level_3 = [
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,],
	[,,,,,,,,]
];

function Level(lvl) {
    this.lvl = lvl;
}

Level.prototype.Update = function() {
	if (this.lvl == 1) {
		blocks = [];
		for ( y = 0; y < level_1.length; y ++) {
			for ( x = 0; x < level_1[y].length; x ++) {
				if (parseInt(level_1[y][x]) == PLAYER) {
					game.scene.player = new Player(x*block_w,y*block_h,block_w,block_h);
				}
				if (parseInt(level_1[y][x]) == STOP) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,1));
				}
				if (parseInt(level_1[y][x]) == KILL) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,2));
				}
				if (parseInt(level_1[y][x]) == FINISH) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,3));
				}
			}
		}
	}
	else if (this.lvl == 2) {
		blocks = [];
		for ( y = 0; y < level_1.length; y ++) {
			for ( x = 0; x < level_2[y].length; x ++) {
				if (parseInt(level_2[y][x]) == PLAYER) {
					game.scene.player = new Player(x*block_w,y*block_h,block_w,block_h);
				}
				if (parseInt(level_2[y][x]) == STOP) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,1));
				}
				if (parseInt(level_2[y][x]) == KILL) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,2));
				}
				if (parseInt(level_2[y][x]) == FINISH) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,3));
				}
			}
		}
	}
	else if (this.lvl == 3) { 
		blocks = [];
		for ( y = 0; y < level_3.length; y ++) {
			for ( x = 0; x < level_3[y].length; x ++) {
				if (parseInt(level_3[y][x]) == PLAYER) {
					game.scene.player = new Player(x*block_w,y*block_h,block_w,block_h);
				}
				if (parseInt(level_3[y][x]) == STOP) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,1));
				}
				if (parseInt(level_3[y][x]) == KILL) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,2));
				}
				if (parseInt(level_3[y][x]) == FINISH) {
					blocks.push(new Block(x*block_w,y*block_h,block_w,block_h,3));
				}
			}
		}
	}

	for (i = 0; i < blocks.length; i ++) {
		blocks[i].Update();
		// check collision with player
	}
}

Level.prototype.setLevel = function(lvl) {
    this.lvl = lvl;
}

Level.prototype.getLevel = function() {
    return this.lvl;
}

Level.prototype.Draw = function() {
	for (i = 0; i < blocks.length; i ++) {
		blocks[i].Draw();
	}
}


