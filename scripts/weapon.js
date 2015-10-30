define('weapon', ['projectile'], function(projectile) {
	var weapon = function(settings) {
		this.fireRate = settings.fireRate || 5;
	}

	weapon.prototype.generateProjectiles = function() {

	}

	weapon.prototype.fire = function(ship, engine) {
		var currentTime = new Date().getTime();

		var canFire = !this.lastFire || (currentTime - this.lastFire) >= (1000 / this.fireRate);

		if(canFire)
		{
			this.lastFire = currentTime;

			engine.entities = engine.entities.concat(this.generateProjectiles(ship));
			console.info(engine.entities);
		}
	}

	/* basic weapon */

	weapon.basic = function() {

	}

	weapon.basic.prototype = new weapon({
		fireRate: 1.5
	});

	weapon.basic.prototype.generateProjectiles = function(ship) {
		return [
			new projectile({
				startX: ship.x + ship.width / 2 - 2,
				startY: ship.y,
				width: 4,
				height: 10,
				speed: 500,
				color: '#00f', 
				direction: Math.PI / 2,
				damage: 1,
				z: 301
			}),
			new projectile({
				startX: ship.x + ship.width / 2 - 2,
				startY: ship.y,
				width: 4,
				height: 10,
				speed: 500,
				color: '#00f', 
				direction: Math.PI / 4,
				damage: 1,
				z: 301
			}),
			new projectile({
				startX: ship.x + ship.width / 2 - 2,
				startY: ship.y,
				width: 4,
				height: 10,
				speed: 500,
				color: '#00f', 
				direction: 3 * Math.PI / 4,
				damage: 1,
				z: 301
			})
		]
	}

	return weapon;
});