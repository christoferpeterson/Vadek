define('ship', ['gameEntity', 'userInteraction', 'weapon'], function(gameEntity, actions, weapon) {
	/*
		The player's space ship
		parameters: 
			width -	int, width of the ship in pixels
			height -int, height of the ship in pixels
			startX -int, starting X location of the ship in 
					pixels relative to upper left corner
			startY -int, starting Y location of the sihp in
						pixels relative to upper left corner
			z - int, location of the ship for determining drawing order
			color - string, hex representation of the ship's color
			fireRate - number of attacks per second
	*/
	var Ship = function(width, height, startX, startY, z, color, speed, primaryWeapon) {
		this.height = height;
		this.width = width;
		this.x = startX;
		this.y = startY;
		this.z = z;
		this.color = color;
		this.speed = speed || 10;
		this.primaryWeapon = primaryWeapon || new weapon.basic();
	}

	Ship.prototype = new gameEntity();

	Ship.prototype.update = function(engine) {
		var pixelChange = this.speed * engine.secondsPerFrame;
		var interaction = engine.actions.allActions;

		if(interaction.moveRight.active) {
			this.x += pixelChange;
		}

		if(interaction.moveLeft.active) {
			this.x += -pixelChange;
		}

		if(interaction.moveUp.active) {
			this.y += -pixelChange;
		}

		if(interaction.moveDown.active) {
			this.y += pixelChange
		}

		if(interaction.firePrimary.active) {
			console.info(this.primaryWeapon);
			this.primaryWeapon.fire(this, engine);
		}

		if(this.x <= 0) {
			this.x = 0;
		}

		if((this.x + this.width) >= engine.canvas.width) {
			this.x = engine.canvas.width - this.width;
		}

		if(this.y <= 0) {
			this.y = 0;
		}

		if((this.y + this.height) >= engine.canvas.height) {
			this.y = engine.canvas.height - this.height;
		}
	}

	Ship.prototype

	return Ship;
});


