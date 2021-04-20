import { Field } from "./Field";
import { Spot } from "./Spot";

export abstract class Figure {
     name: string;
     movesMade: number;
     white: any;
     private killed: boolean = false;

     constructor(name: string, movesMade: number, white: any) {
          this.name = name;
          this.movesMade = movesMade;
          this.white = white;
     }

     setWhite(white: boolean): void {
          this.white = white;
     }

     isWhite() {
          return this.white;
     }

     setKilled(killed: boolean): void {
          this.killed = killed;
     }

     isKilled() {
          return this.killed;
     }

     Figure(white: boolean) {
          this.setWhite(white);
     }

     abstract movePossible(field: Field, startSpot: Spot, endSpot: Spot): boolean;
}
