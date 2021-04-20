import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";
import { Spot } from "./Spot";

export class Field {
     fields: Spot[][];
     letterList: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];

     Field() {
          this.resetField();
     }

     getField(x: number, y: number): Spot {
          if (x < 0 || x > 7 || y < 0 || y > 7) {
               throw new Error("Out of bounds");
          }

          return this.fields[x][y];
     }

     resetField(): void {
          this.fields = [];
          for (let i = 0; i < 8; i++) {
               this.fields[i] = [];
               for (let j = 0; j < 8; j++) {
                    this.fields[i][j] = new Spot(
                         i,
                         j,
                         null!,
                         `${this.letterList[i]}` + Math.abs(j - 8)
                    );
               }
          }

          //
          //first black row
          this.fields[0][0].setSpot(
               0,
               0,
               new Rook("br", 0, false),
               this.fields[0][0].getSpotName()
          );
          this.fields[1][0].setSpot(
               1,
               0,
               new Knight("bn", 0, false),
               this.fields[1][0].getSpotName()
          );
          this.fields[2][0].setSpot(
               2,
               0,
               new Bishop("bb", 0, false),
               this.fields[2][0].getSpotName()
          );
          this.fields[3][0].setSpot(
               3,
               0,
               new Queen("bq", 0, false),
               this.fields[3][0].getSpotName()
          );
          this.fields[4][0].setSpot(
               4,
               0,
               new King("bk", 0, false),
               this.fields[4][0].getSpotName()
          );
          this.fields[5][0].setSpot(
               5,
               0,
               new Bishop("bp", 0, false),
               this.fields[5][0].getSpotName()
          );
          this.fields[6][0].setSpot(
               6,
               0,
               new Knight("bn", 0, false),
               this.fields[6][0].getSpotName()
          );
          this.fields[7][0].setSpot(
               7,
               0,
               new Rook("br", 0, false),
               this.fields[7][0].getSpotName()
          );
          //
          //second black row
          for (let i = 0; i < 8; i++) {
               this.fields[i][1].setSpot(
                    i,
                    1,
                    new Pawn("bp", 0, false),
                    this.fields[i][1].getSpotName()
               );
          }
          //
          //blank spaces
          for (let i = 0; i < 8; i++) {
               for (let j = 2; j < 6; j++) {
                    this.fields[i][j].setSpot(
                         i,
                         j,
                         null,
                         this.fields[i][j].getSpotName()
                    );
               }
          }
          //
          //first white row
          this.fields[0][7].setSpot(
               0,
               7,
               new Rook("wr", 0, true),
               this.fields[0][7].getSpotName()
          );
          this.fields[1][7].setSpot(
               1,
               7,
               new Knight("wn", 0, true),
               this.fields[1][7].getSpotName()
          );
          this.fields[2][7].setSpot(
               2,
               7,
               new Bishop("wb", 0, true),
               this.fields[2][7].getSpotName()
          );
          this.fields[3][7].setSpot(
               3,
               7,
               new Queen("wq", 0, true),
               this.fields[3][7].getSpotName()
          );
          this.fields[4][7].setSpot(
               4,
               7,
               new King("wk", 0, true),
               this.fields[4][7].getSpotName()
          );
          this.fields[5][7].setSpot(
               5,
               7,
               new Bishop("wb", 0, true),
               this.fields[5][7].getSpotName()
          );
          this.fields[6][7].setSpot(
               6,
               7,
               new Knight("wn", 0, true),
               this.fields[6][7].getSpotName()
          );
          this.fields[7][7].setSpot(
               7,
               7,
               new Rook("wr", 0, true),
               this.fields[7][7].getSpotName()
          );
          //
          //second white row
          for (let i = 0; i < 8; i++) {
               this.fields[i][6].setSpot(
                    i,
                    6,
                    new Pawn("wp", 0, true),
                    this.fields[i][6].getSpotName()
               );
          }
          
               
     }
}
