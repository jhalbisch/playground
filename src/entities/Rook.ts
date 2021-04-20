import { Field } from "./Field";
import { Figure } from "./Figure";
import { Spot } from "./Spot";

export class Rook extends Figure {
     constructor(name: string, movesMade: number, white: boolean) {
          super(name, movesMade, white);
     }

     movePossible(field: Field, startSpot: Spot, endSpot: Spot): boolean {
          let startX = startSpot.getXPos();
          let startY = startSpot.getYPos();
          let endX = endSpot.getXPos();
          let endY = endSpot.getYPos();
          //friendly fire?
          if (
               endSpot.getFigure() != null &&
               endSpot.getFigure().white == startSpot.getFigure().white
          ) {
               //Error-Message einfügen
               console.log("Friendly fire! Move blocked by", endSpot.figOnSpot.name);
               return false;
          }

          //move validation
          if (
               //did move vertical?
               startX == endX &&
               startY != endY
          ) {
               //move down
               if (startY < endY) {
                    for (let i = startY + 1; i <= endY; i++) {
                         if (field.getField(startX, i).getFigure() != null) {
                              console.log(
                                   "Move blocked by",
                                   field.getField(startX, i).getFigure.name
                              );
                              return false;
                         }
                    }
               } 
               //move up
               else {
                    for (let i = startY - 1; i >= endY; i--) {
                         if (field.getField(startX, i).getFigure() != null) {
                              console.log(
                                   "Move blocked by",
                                   field.getField(startX, i).getFigure().name
                              );
                              return false;
                         }
                    }
               }
          } else if (
               //did move horizontal?
               startX != endX &&
               startY == endY
          ) {
               //check for figures blocking the move
               for (let i = 0; i < Math.abs(startX - endX); ) {
                    if (field.getField(startY, i).getFigure == null) {
                         i++;
                    } else {
                         console.log("Move is blocked");
                         return false;
                    }
               }
          } else {
               return false;
          }

          return true;
     }
}
