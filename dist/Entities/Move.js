"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
class Move {
    constructor(startSpot, endSpot, gamer) {
        this.startSpot = startSpot;
        this.endSpot = endSpot;
        this.gamer = gamer;
    }
    move(gamer, startSpot, endSpot) {
        this.gamer = gamer;
        this.startSpot = startSpot;
        this.endSpot = endSpot;
        this.movedFig = startSpot.getFigure();
    }
}
exports.Move = Move;
//# sourceMappingURL=Move.js.map