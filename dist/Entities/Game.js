"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Field_1 = require("./Field");
const Gamer_1 = require("./Gamer");
const Move_1 = require("./Move");
class Game {
    constructor() {
        this.gamers = Array();
        this.currTurn = new Gamer_1.Gamer();
        this.field = new Field_1.Field();
        this.movesPlayed = Array();
    }
    initializeGamers(g1, g2) {
        this.gamers.length = 2;
        this.gamers[0] = g1;
        this.gamers[1] = g2;
        this.field.resetField();
        if (g1.whiteSide) {
            this.currTurn = g1;
        }
        else {
            this.currTurn = g2;
        }
        this.movesPlayed.length = 0;
    }
    gamerMove(gamer, startX, startY, endX, endY) {
        var startField = this.field.getField(startX, startY);
        var endField = this.field.getField(endX, endY);
        var move = new Move_1.Move(startField, endField, gamer);
        return this.makeMove(move, gamer);
    }
    makeMove(move, gamer) {
        var sourceFigure = move.startSpot.getFigure();
        var destinationFigure = move.endSpot.getFigure();
        if (sourceFigure == null) {
            return false;
        }
        if (gamer != this.currTurn) {
            return false;
        }
        if (sourceFigure.isWhite() != gamer.whiteSide) {
            return false;
        }
        if (!sourceFigure.movePossible(this.field, move.startSpot, move.endSpot)) {
            return false;
        }
        if (destinationFigure != null) {
            destinationFigure.setKilled(true);
            move.killedFig = destinationFigure;
        }
        this.movesPlayed.push();
        move.endSpot.setFigure(move.startSpot.getFigure());
        move.startSpot.setFigure(null);
        if (this.currTurn == this.gamers[0]) {
            this.currTurn = this.gamers[1];
        }
        else {
            this.currTurn = this.gamers[0];
        }
        return true;
    }
    isEnd() {
        return this.getStatus() != GameStatus.ACTIVE;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map