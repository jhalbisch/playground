import { Field } from "./Field";
import { Figure } from "./Figure";
import { Gamer } from "./Gamer";
import { Move } from "./Move";
import { Spot } from "./Spot";

export class Game {
     gamers: Gamer[] = Array();
     currTurn: Gamer = new Gamer();
     field: Field = new Field();
     movesPlayed: Move[] = Array();
     status: GameStatus;

     initializeGamers(g1: Gamer, g2: Gamer): void {
          this.gamers.length = 2;
          this.gamers[0] = g1;
          this.gamers[1] = g2;

          this.field.resetField();

          if (g1.whiteSide) {
               this.currTurn = g1;
          } else {
               this.currTurn = g2;
          }
          //reset movesPlayed
          this.movesPlayed.length = 0;
     }

     gamerMove(
          gamer: Gamer,
          startX: number,
          startY: number,
          endX: number,
          endY: number
     ): boolean {
          var startField: Spot = this.field.getField(startX, startY);
          var endField: Spot = this.field.getField(endX, endY);
          var move: Move = new Move(startField, endField, gamer);
          return this.makeMove(move, gamer);
     }

     makeMove(move: Move, gamer: Gamer): boolean {
          var sourceFigure: Figure = move.startSpot.getFigure();
          var destinationFigure: Figure = move.endSpot.getFigure();

          //is it a spot with a figure on it?
          if (sourceFigure == null) {
               return false;
          }

          //is the right player playing?
          if (gamer != this.currTurn) {
               return false;
          }

          //is the chosen figure from the current player?
          if (sourceFigure.isWhite() != gamer.whiteSide) {
               return false;
          }

          //is it a valid move?
          if (!sourceFigure.movePossible(this.field, move.startSpot, move.endSpot)) {
               return false;
          }

          //is it a kill?
          if (destinationFigure != null) {
               destinationFigure.setKilled(true);
               move.killedFig = destinationFigure;
          }

          //store move in move list
          this.movesPlayed.push();

          //move figure
          move.endSpot.setFigure(move.startSpot.getFigure());
          move.startSpot.setFigure(null);

          //change move to other player
          if (this.currTurn == this.gamers[0]) {
               this.currTurn = this.gamers[1];
          } else {
               this.currTurn = this.gamers[0];
          }

          //if move is valid:
          return true;
     }

     isEnd(): boolean {
          return this.getStatus() != GameStatus.ACTIVE;
     }

     getStatus() {
          return this.status;
     }

     setStatus(status: GameStatus): void {
          this.status = status;
     }
}
