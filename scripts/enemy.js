define('enemy', ['gameEntity'], function(gameEntity) {
	/*
		width: width of enemy
		height: height of enemy
		startX: starting x location of enemy
		startY: starting Y location of enemy
		z: z-index of enemy for drawing overlaps
		color: color of enemy,
		speed: speed of enemy in pixels per second defaults to 100,
		value: value of the enemy in points defaults to 100
	*/

	var enemy = function(settings) {
		this.height = settings.height;
		this.width = settings.width;
		this.x = settings.startX;
		this.y = settings.startY;
		this.z = settings.z;
		this.color = settings.color;
		this.speed = Math.max(Math.min(settings.speed || 100, 1000), 0);
		this.value =  Math.max(settings.value || 100, 0);
		this.life = Math.max(Math.min(settings.life, 100), 1)
	}

	enemy.prototype = new gameEntity();

	enemy.prototype.update = function(engine) {
		var pixelChange = this.speed * engine.secondsPerFrame;
		this.y += pixelChange;

		if(this.x > engine.canvas.height + 1) {
			engine.awardPoints(0);
			return true;
		}
	}

	enemy.basic = new enemy({
		width: 20,
		height: 20,
		z: 50,
		color: '#f00',
		speed: 100,
		life: 1
	});

	return enemy;
});