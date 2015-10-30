define('gameEngine', ['canvas', 'userInteraction'], function(canvas, actions) {
	'use strict';

	var MAX_FPS = 60;
	var MIN_FPS = 10;

	var gameEngine = function(id, width, height, targetFPS) {
		this.entites = [];
		this.canvas = new canvas(id, width, height);
		this.actions = new actions();

		targetFPS = targetFPS || 30;

		// restrict the fps
		targetFPS = Math.min(Math.max(targetFPS, MIN_FPS), MAX_FPS);
		this.refreshRate = 1000 / (targetFPS || 40);
		this.secondsPerFrame = 1 / this.refreshRate;

		this.currentLevel;
		this.points = 0;

		this.entities = [];

		this.events = {};
	};

	gameEngine.prototype.run = function() {
		var self = this;
		setInterval(function() { self.loop(); }, this.refreshRate);
	};

	gameEngine.prototype.update = function() {
		var entity;
		var destroyed;
		for(var i = 0; i < this.entities.length; i++) {
			try {
				entity = this.entities[i];

				destroyed = entity.update(this);

				// remove the entity if it has been destroyed
				if(destroyed) {
					delete this.entities[i];
					this.entities.splice(i, 1);
				}
			}
			catch(err) {
				console.info(this.entities[i], err);
			}
			
		}
	};

	gameEngine.prototype.draw = function() {
		this.entities = this.entities.sort(function(a, b) {
			if(a.z < b.z) {
				return 1;
			}

			if(a.z > b.z) {
				return -1;
			}

			return 0;
		});

		var entity;

		for(var i = 0; i < this.entities.length; i++) {
			this.entities[i].draw(this.canvas.context);
		}
	};

	gameEngine.prototype.awardPoints = function(points) {
		this.points += points;
	}

	gameEngine.prototype.loadLevel = function(level) {
		this.currentLevel = level;

		console.info(level);
		this.entities = level.entities || [];

		for(var i = 0; i < this.entities.length; i++) {
			this.entities[i].draw(this.canvas.context);
		}
	};

	gameEngine.prototype.endLevel = function(level) {
		this.entities = [];

		for(var i = 0; level.listeners.length; i++) {
			this.removeListener('enemydestroyed', level.destroyListener);
		}

		alert('Congratulations, you have completed ' + level.name + '.');
	}

	gameEngine.prototype.loop = function() {
		this.update();
		this.canvas.clear();
		this.draw();
	};

	return gameEngine;
})