import { Game } from "./entities/Game";
import { Gamer } from "./entities/Gamer";

const newGame = new Game();
const g1 = new Gamer();
const g2 = new Gamer();

g1.whiteSide = true;
g2.whiteSide = false;
newGame.initializeGamers(g1,g2);
console.log(newGame.gamerMove(g1,0,0,0,0));
