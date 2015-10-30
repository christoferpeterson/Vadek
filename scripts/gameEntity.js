define('gameEntity', [], function() {
	var GameEntity = function() {
		this.y;
		this.x;
		this.z;
		this.height;
		this.width;
		this.color;
	}

	GameEntity.prototype.update = function(width, height) {

	}

	GameEntity.prototype.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	return GameEntity;
});
