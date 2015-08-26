function SceneManager() {
	this.scene;
}

SceneManager.prototype.setScene = function(scene) {
	this.scene = scene;
}

SceneManager.prototype.getScene = function() {
	return this.scene;
}