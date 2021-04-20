import { Field } from "./Field";
import { Figure } from "./Figure";
import { Spot } from "./Spot";

export class King extends Figure {
     constructor(name: string, movesMade: number, white: boolean) {
          super(name, movesMade, white);
     }
     movePossible(field: Field, startSpot: Spot, endSpot: Spot): boolean {
          let startX = startSpot.getXPos();
          let startY = startSpot.getYPos();
          let endX = endSpot.getXPos();
          let endY = endSpot.getYPos();

          //friendly fire?
          if (endSpot.getFigure() != null) {
               if (endSpot.getFigure().isWhite == startSpot.getFigure().isWhite) {
                    //Error-Message einfügen
                    console.log("Friendly fire, move not possible");
                    return false;
               }
          }

          //move validation
          if (
               //did move vertical?
               startX == endX &&
               startY != endY &&
               Math.abs(startY - endY) == 1
          ) {
               return true;
          } else if (
               //did move horizontal?
               startX != endX &&
               startY == endY &&
               Math.abs(startX - endX) == 1
          ) {
               return true;
          } else if (
               //did move diagonal?
               Math.abs(startX - endX) == Math.abs(startY - endY) &&
               Math.abs(startX - endX) + Math.abs(startY - endY) == 2
          ) {
               //move xDiagPos/yDiagPos
               if (startX < endX && startY < endY) {
                    return true;
               } //move xDiagPos/yDiagNeg
               else if (startX < endX && startY > endY) {
                    return true;
               } //move xDiagNeg/yDiagPos
               else if (startX > endX && startY < endY) {
                    return true;
               } //move xDiagNeg/yDiagNeg
               else if (startX > endX && startY > endY) {
                    return true;
               } else {
                    return false;
               }
          } else {
               return false;
          }
     }
}
