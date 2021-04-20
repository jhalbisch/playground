"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = require("./entities/Game");
const Gamer_1 = require("./entities/Gamer");
const newGame = new Game_1.Game();
const g1 = new Gamer_1.Gamer();
const g2 = new Gamer_1.Gamer();
g1.whiteSide = true;
g2.whiteSide = false;
newGame.initializeGamers(g1, g2);
console.log(newGame.gamerMove(g1, 0, 0, 0, 0));
//# sourceMappingURL=index.js.map