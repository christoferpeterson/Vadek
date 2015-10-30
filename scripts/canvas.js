define('canvas', ['gameEngine'], function(gameEngine) {
	var canvas = function(id, width, height) {
		this.element = document.getElementById(id || 'canvas');
		this.context = this.element.getContext('2d');

		this.width = width,
		this.height = height;
	}

	canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	}

	return canvas;
});