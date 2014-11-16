/// <reference path="../objects/button.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    export function playState() {
        road.update();
        coin.update();
        car.update();

        for (var count = 0; count < constants.BULLET_NUM; count++) {
            bullets[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            car.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        road = new objects.Road(stage, game);
        coin = new objects.Coin(stage, game);
        car = new objects.Car(stage, game);

        // Show Cursor
        stage.cursor = "none";

        // Create multiple bullets
        for (var count = 0; count < constants.BULLET_NUM; count++) {
            bullets[count] = new objects.Bullet(stage, game);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(car, coin, bullets, scoreboard);

        stage.addChild(game);
    }
}