define('projectile', ['gameEntity'], function(gameEntity) {
	var projectile = function(settings) {
		this.height = settings.height;
		this.width = settings.width;
		this.x = settings.startX;
		this.y = settings.startY;
		this.z = settings.z;
		this.color = settings.color;
		this.speed = settings.speed || 10;
		this.direction = settings.direction;
		this.damage = settings.damage;
	}

	projectile.prototype = new gameEntity();

	projectile.prototype.update = function(engine) {
		var pixelChange = this.speed * engine.secondsPerFrame;

		var dX = pixelChange * Math.cos(this.direction);
		var dY = pixelChange * -Math.sin(this.direction);

		this.x += dX;
		this.y += dY;

		if(this.x > engine.canvas.width || this.x < 0) {
			return true;
		}

		if(this.y > engine.canvas.height || this.y < 0) {
			return true;
		}
	}

	return projectile;
});