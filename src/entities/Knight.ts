import { Field } from "./Field";
import { Figure } from "./Figure";
import { Spot } from "./Spot";

export class Knight extends Figure {
     constructor(name: string, movesMade: number, white: boolean) {
          super(name, movesMade, white);
     }
     movePossible(_field: Field, startSpot: Spot, endSpot: Spot): boolean {
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
               Math.abs(startSpot.getXPos() - endSpot.getXPos()) *
                    Math.abs(startSpot.getYPos() - endSpot.getYPos()) !=
               2
          ) {
               return false;
          }

          return true;
     }
}
