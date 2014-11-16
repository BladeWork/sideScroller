/*
Source file name: label.js
Author's name:    RenFa Feng
Last Modified by: RenFa Feng
Date last Modified: Nov. 16th 2014
Program description: This program is using for label object.
Revision History: Nov. 6th First version.
                  Nov. 13th Begin new project.
                  Nov. 14th Finish screens.
                  Nov. 15th Finish all functions, Final version.
Class & Functions:  Label;
*/
/// <reference path="../constants.ts" />
module objects {
    export class Label extends createjs.Text {
        constructor(x:number,y:number,labelText:string) {
            super(labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getBounds().width / 2;
            this.regY = this.getBounds().height / 2;
            this.x = x;
            this.y = y;
        }
    }
} 