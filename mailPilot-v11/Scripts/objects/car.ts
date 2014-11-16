/*
Source file name: car.js
Author's name:    RenFa Feng
Last Modified by: RenFa Feng
Date last Modified: Nov. 16th 2014
Program description: This program is using for car object.
Revision History: Nov. 6th First version.
                  Nov. 13th Begin new project.
                  Nov. 14th Finish screens.
                  Nov. 15th Finish all functions, Final version.
Class & Functions:  Car;
                    update();
                    destroy();
*/
/// <reference path="../managers/asset.ts" />
module objects {
    // Car Class
    export class Car {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "car");
            this.image.x = 40;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }


        update() {
            this.image.y = this.stage.mouseY;
            this.image.x = this.stage.mouseX;
        }
        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }
} 