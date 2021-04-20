import { Figure } from "./Figure";
import { Gamer } from "./Gamer";
import { Spot } from "./Spot";

export class Move {
     public gamer: Gamer;
     public startSpot: Spot;
     public endSpot: Spot;
     public movedFig: Figure;
     public killedFig: Figure;
     
     constructor(startSpot: Spot, endSpot: Spot, gamer: Gamer) {
          this.startSpot = startSpot;
          this.endSpot = endSpot;
          this.gamer = gamer;
     }

     move(gamer: Gamer, startSpot: Spot, endSpot: Spot) {
          this.gamer = gamer;
          this.startSpot = startSpot;
          this.endSpot = endSpot;
          this.movedFig = startSpot.getFigure();
     }
}
