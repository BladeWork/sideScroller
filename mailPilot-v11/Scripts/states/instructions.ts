/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/plane.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked2(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    export function instructionsState() {
        ocean.update();
    }

    export function instructions() {
        var gameIntractionNameLabel: objects.Label;
        var gameInstractionLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display
        gameIntractionNameLabel = new objects.Label(stage.canvas.width / 2, 40, "SIDE SCROLLER INSTRUCTIONS");
        game.addChild(gameIntractionNameLabel);

        // Display INSTRUCTIONS
        gameInstractionLabel = new objects.Label(stage.canvas.width / 2, 140, "This is side scroller game.\r\nTry to operation your car to avoid the black smoke.\r\nTry to get more coins.\r\nYou have three lifes");
        game.addChild(gameInstractionLabel);

        // Display Play Again Button
        playButton2 = new objects.Button(stage.canvas.width / 2, 450, "playButton");
        game.addChild(playButton2);
        playButton2.addEventListener("click", playButtonClicked2);

        stage.addChild(game);
    }
} 