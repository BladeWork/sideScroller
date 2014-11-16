﻿var constants;
(function (constants) {
    // State Machine Constants
    constants.MENU_STATE = 0;
    constants.PLAY_STATE = 1;
    constants.GAME_OVER_STATE = 2;
    constants.INSTRUCTIONS_STATE = 3;

    // Game Constants
    constants.BULLET_NUM = 3;
    constants.LABEL_FONT = "40px Consolas";
    constants.LABEL_COLOUR = "#FFFF00";
    constants.CAR_LIVES = 3;
})(constants || (constants = {}));
