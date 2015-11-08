require.config({
	baseUrl: 'scripts/'
});

require(['gameEngine', 'level', 'enemy', 'ship'], function(Game, Level, Enemy, Ship) {
	var game = new Game('canvas', 600, 600, 30);
	var levels = [];
	var player = new Ship(20, 20, 290, 570, 100, '#0f0', 300);
	var level1 = new Level(game, { name: 'Level 1' });

	level1.entities = [
		player
	];

	var level1Enemies = function() {
		var enemies = [];

		for(i = 5; i > 0; i--) {
			enemies.push(
				new Enemy({
					width: 20,
					height: 20,
					startX: 50 * i + 30,
					startY: -50,
					z: 50,
					color: '#f00',
					speed: 150,
					life: 1
				})
			);
		}

		for(i = 5; i > 0; i--) {
			enemies.push(
				new Enemy({
					width: 20,
					height: 20,
					startX: 50 * i + 300,
					startY: -150,
					z: 50,
					color: '#f00',
					speed: 150,
					life: 1
				})
			);
		}

		for(i = 5; i > 0; i--) {
			enemies.push(
				new Enemy({
					width: 20,
					height: 20,
					startX: 50 * i + 150,
					startY: -200,
					z: 50,
					color: '#f00',
					speed: 150,
					life: 1
				})
			);
		}

		return enemies;
	}

	level1.entities = level1.entities.concat(level1Enemies());

	console.info(level1);
	game.loadLevel(level1);

	game.run();

	//entities.push(new Ship(50, 50, canvas.width / 2 - 25, canvas.height - 75, 10, '#0f0'));
});