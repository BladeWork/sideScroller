/*
Source file name: road.js
Author's name:    RenFa Feng
Last Modified by: RenFa Feng
Date last Modified: Nov. 16th 2014
Program description: This program is using for road object.
Revision History: Nov. 6th First version.
                  Nov. 13th Begin new project.
                  Nov. 14th Finish screens.
                  Nov. 15th Finish all functions, Final version.
Class & Functions:  Road;
                    update();
                    reset();
                    destroy();
*/
/// <reference path="../managers/asset.ts" />
module objects {
    // Road Class
    export class Road {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("road"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = -5;

            game.addChild(this.image);
        }

        update() {
            this.image.x += this.dx;
            if (this.image.x < -800) {
                this.reset();
            }
        }

        reset() {
            this.image.x = 0;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}