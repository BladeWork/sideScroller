var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
Source file name: button.js
Author's name:    RenFa Feng
Last Modified by: RenFa Feng
Date last Modified: Nov. 16th 2014
Program description: This program is using for instruction screen.
Revision History: Nov. 6th First version.
Nov. 13th Begin new project.
Nov. 14th Finish screens.
Nov. 15th Finish all functions, Final version.
Class & Functions:  Button;
setButtonListeners();
onButtonOver();
onButtonOut();
*/
/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(x, y, buttonIDString) {
            _super.call(this, managers.Assets.atlas, buttonIDString);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
            this.setButtonListeners();
        }
        Button.prototype.setButtonListeners = function () {
            this.cursor = 'pointer';
            this.on('rollover', this.onButtonOver);
            this.on('rollout', this.onButtonOut);
        };

        Button.prototype.onButtonOver = function () {
            this.alpha = 0.8;
        };

        Button.prototype.onButtonOut = function () {
            this.alpha = 1;
        };
        return Button;
    })(createjs.Sprite);
    objects.Button = Button;
})(objects || (objects = {}));
