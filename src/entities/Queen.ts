import { Field } from "./Field";
import { Figure } from "./Figure";
import { Spot } from "./Spot";

export class Queen extends Figure {
     constructor(name: string, movesMade: number, white: boolean) {
          super(name, movesMade, white);
     }
     movePossible(field: Field, startSpot: Spot, endSpot: Spot): boolean {
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
               startSpot.getXPos() == endSpot.getXPos() &&
               startSpot.getYPos() != endSpot.getYPos()
          ) {
               //check for figures blocking the move
               for (let i = 0; i < Math.abs(startSpot.getYPos() - endSpot.getYPos()); ) {
                    if (field.getField(startSpot.getXPos(), i).getFigure == null) {
                         i++;
                    } else {
                         console.log("Move is blocked");
                         return false;
                    }
               }
          } else if (
               //did move horizontal?
               startSpot.getXPos() != endSpot.getXPos() &&
               startSpot.getYPos() == endSpot.getYPos()
          ) {
               //check for figures blocking the move
               for (let i = 0; i < Math.abs(startSpot.getXPos() - endSpot.getXPos()); ) {
                    if (field.getField(startSpot.getYPos(), i).getFigure == null) {
                         i++;
                    } else {
                         console.log("Move is blocked");
                         return false;
                    }
               }
          } else if (
               //did move diagonal?
               Math.abs(startSpot.getXPos() - endSpot.getXPos()) ==
               Math.abs(startSpot.getYPos() - endSpot.getYPos())
          ) {
               //check for figures blocking the move on xDiagPos/yDiagPos
               if (
                    startSpot.getXPos() < endSpot.getXPos() &&
                    startSpot.getYPos() < endSpot.getYPos()
               ) {
                    for (
                         let i = 0;
                         i < Math.abs(startSpot.getXPos() - endSpot.getXPos());

                    ) {
                         if (
                              field.getField(
                                   startSpot.getXPos() + i,
                                   startSpot.getYPos() + i
                              ).getFigure == null
                         ) {
                              i++;
                         } else {
                              console.log("Move is blocked");
                              return false;
                         }
                    }
               } //check for figures blocking the move on xDiagPos/yDiagNeg
               else if (
                    startSpot.getXPos() < endSpot.getXPos() &&
                    startSpot.getYPos() > endSpot.getYPos()
               ) {
                    for (
                         let i = 0;
                         i < Math.abs(startSpot.getXPos() - endSpot.getXPos());

                    ) {
                         if (
                              field.getField(
                                   startSpot.getXPos() + i,
                                   startSpot.getYPos() - i
                              ).getFigure == null
                         ) {
                              i++;
                         } else {
                              console.log("Move is blocked");
                              return false;
                         }
                    }
               } //check for figures blocking the move on xDiagNeg/yDiagPos
               else if (
                    startSpot.getXPos() > endSpot.getXPos() &&
                    startSpot.getYPos() < endSpot.getYPos()
               ) {
                    for (
                         let i = 0;
                         i < Math.abs(startSpot.getXPos() - endSpot.getXPos());

                    ) {
                         if (
                              field.getField(
                                   startSpot.getXPos() - i,
                                   startSpot.getYPos() + i
                              ).getFigure == null
                         ) {
                              i++;
                         } else {
                              console.log("Move is blocked");
                              return false;
                         }
                    }
               } //check for figures blocking the move on xDiagNeg/yDiagNeg
               else if (
                    startSpot.getXPos() > endSpot.getXPos() &&
                    startSpot.getYPos() > endSpot.getYPos()
               ) {
                    for (
                         let i = 0;
                         i < Math.abs(startSpot.getXPos() - endSpot.getXPos());

                    ) {
                         if (
                              field.getField(
                                   startSpot.getXPos() - i,
                                   startSpot.getYPos() - i
                              ).getFigure == null
                         ) {
                              i++;
                         } else {
                              console.log("Move is blocked");
                              return false;
                         }
                    }
               }
          } else {
               return false;
          }

          return true;
     }
}
