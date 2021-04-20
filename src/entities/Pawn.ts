import { Field } from "./Field";
import { Figure } from "./Figure";
import { Spot } from "./Spot";

export class Pawn extends Figure {
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

          //is white (moves up)?
          if (startSpot.getFigure().white == true && startY > endY) {
               if (
                    //did move vertical?
                    startX == endX
               ) {
                    if (
                         //when startSpot is initial spot and move is between 1 or 2 spots
                         startY == 6 &&
                         startY - endY < 3 &&
                         startY != endY
                    ) {
                         //check for figures blocking the move
                         for (let i = 1; i <= Math.abs(startY - endY); ) {
                              if (field.getField(startX, startY - i).getFigure == null) {
                                   i++;
                              } else {
                                   console.log("Move is blocked");
                                   return false;
                              }
                         }
                    } else if (
                         //when startSpot is not first position and move is a valid one-spot-move
                         startY - endY ==
                         1
                    ) {
                         //check for figures blocking the move
                         if (endSpot.getFigure() != null) {
                              console.log("Move is blocked by another figure");
                              return false;
                         }
                    } else if (startY - endY > 2) {
                         return false;
                    }
               } else if (
                    //did move diagonal?
                    Math.abs(startX - endX) == Math.abs(startY - endY) &&
                    Math.abs(startX - endX) + Math.abs(startY - endY) == 2
               ) {
                    if (endSpot.getFigure() == null) {
                         return false;
                    }
               } else {
                    return false;
               }
          }
          //is black (moves down)?
          else if (startSpot.getFigure().white == false && startY < endY) {
               if (
                    //did move vertical?
                    startX == endX
               ) {
                    if (
                         //when startSpot is initial spot and move is between 1 or 2 spots
                         startY == 1 &&
                         Math.abs(startY - endY) < 3 &&
                         startY != endY
                    ) {
                         //check for figures blocking the move
                         for (let i = 1; i <= Math.abs(startY - endY); ) {
                              if (field.getField(startX, startY + i).getFigure == null) {
                                   i++;
                              } else {
                                   console.log("Move is blocked");
                                   return false;
                              }
                         }
                    } else if (
                         //when startSpot is not first position and move is a valid one-spot-move
                         startY - endY ==
                         1
                    ) {
                         //check for figures blocking the move
                         if (endSpot.getFigure() != null) {
                              console.log("Move is blocked by another figure");
                              return false;
                         } 
                    } else {
                         return false;
                    }
               } else if (
                    //did move diagonal?
                    Math.abs(startX - endX) == Math.abs(startY - endY) &&
                    Math.abs(startX - endX) + Math.abs(startY - endY) == 2
               ) {
                    if (endSpot.getFigure() == null) {
                         return false;
                    }
               } else {
                    return false;
               }
          }

          return true;
     }
}
