define('level', [], function() {
	var level = function(engine, settings) {
		this.engine = engine;
		this.name = settings.name;
		level.entities = [];
	}

	level.prototype.init = function() {
		var self = this;
	}

	level.prototype.end = function() {
		this.engine.removeListener(this.destroyedListener);
	}

	level.prototype.handle_enemyDestroyed = function() {
		var workingEntities = this.engine.entities.filter(function(obj) {
			return !obj.destroyed;
		})

		// if only the player remains, end the level
		if(workingEntities.length == 1) {
			this.engine.endLevel(this);
		}
	}

	return level;
});