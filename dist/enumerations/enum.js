var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["ACTIVE"] = 0] = "ACTIVE";
    GameStatus[GameStatus["WHITE_VICTORY"] = 1] = "WHITE_VICTORY";
    GameStatus[GameStatus["BLACK_VICTORY"] = 2] = "BLACK_VICTORY";
    GameStatus[GameStatus["PATT"] = 3] = "PATT";
    GameStatus[GameStatus["SURRENDER"] = 4] = "SURRENDER";
})(GameStatus || (GameStatus = {}));
//# sourceMappingURL=enum.js.map