define('userInteraction', [], function() {
	var actions = function() {
		this.allActions = {
			firePrimary:  { mapping: 32, active: false },
			moveRight: { mapping: 39, active: false },
			moveLeft: { mapping: 37, active: false },
			moveUp: { mapping: 38, active: false },
			moveDown: { mapping: 40, active: false }
		}

		var self = this;
		document.addEventListener('keydown', function(e) { self.keyDown(e) }, false);
		document.addEventListener('keyup', function(e) { self.keyUp(e) }, false);
	}


	actions.prototype.keyDown = function(e) {
		var actionsTriggered = this.findKeys(e.keyCode);

		for (var i = 0; i < actionsTriggered.length; i++) {
			actionsTriggered[i].active = true;
		};
	}

	actions.prototype.keyUp = function(e) {
		var actionsTriggered = this.findKeys(e.keyCode);

		for (var i = 0; i < actionsTriggered.length; i++) { 
			actionsTriggered[i].active = false;
		};
	}

	actions.prototype.findKeys = function(code) {
		var output = [];
		for(var key in this.allActions) {
			if(this.allActions[key] && this.allActions[key].mapping == code) {
				output.push(this.allActions[key])
			}
		}
		return output;
	}

	return actions;
});