/*
Source file name: instructions.js
Author's name:    RenFa Feng
Last Modified by: RenFa Feng
Date last Modified: Nov. 16th 2014
Program description: This program is using for instruction screen.
Revision History: Nov. 6th First version.
                  Nov. 13th Begin new project.
                  Nov. 14th Finish screens.
                  Nov. 15th Finish all functions, Final version.
Class & Functions:  playButtonClicked2(event: MouseEvent);
                    instructionsState();
                    instructions();
*/
/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/car.ts" />
/// <reference path="../objects/road.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    //Play button (in instructions screen) click event
    export function playButtonClicked2(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    export function instructionsState() {
        road.update();
    }

    export function instructions() {
        var gameIntractionNameLabel: objects.Label;
        var gameInstractionLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        road = new objects.Road(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display
        gameIntractionNameLabel = new objects.Label(stage.canvas.width / 2, 40, "SIDE SCROLLER INSTRUCTIONS");
        game.addChild(gameIntractionNameLabel);

        // Display INSTRUCTIONS
        gameInstractionLabel = new objects.Label(stage.canvas.width / 2, 130, "This is side scroller game.");
        game.addChild(gameInstractionLabel);
        gameInstractionLabel = new objects.Label(stage.canvas.width / 2, 190, "Move mouse operate your");
        game.addChild(gameInstractionLabel);
        gameInstractionLabel = new objects.Label(stage.canvas.width / 2, 250, "avatar. Avoid bullets.");
        game.addChild(gameInstractionLabel);
        gameInstractionLabel = new objects.Label(stage.canvas.width / 2, 310, "And try to get more coins.");
        game.addChild(gameInstractionLabel);
        
        // Display Play Again Button
        playButton2 = new objects.Button(stage.canvas.width / 2, 450, "playButton");
        game.addChild(playButton2);
        playButton2.addEventListener("click", playButtonClicked2);

        stage.addChild(game);
    }
}