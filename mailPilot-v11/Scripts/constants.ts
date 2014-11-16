/*
Source file name: game.js
Author's name:    RenFa Feng
Last Modified by: RenFa Feng
Date last Modified: Nov. 16th 2014
Program description: This program is using for constants the whole game.
Revision History: Nov. 6th First version.
                  Nov. 13th Begin new project.
                  Nov. 14th Finish screens.
                  Nov. 15th Finish all functions, Final version.
*/

module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTIONS_STATE: number = 3;

    // Game Constants
    export var BULLET_NUM: number = 3;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var CAR_LIVES = 3;
}