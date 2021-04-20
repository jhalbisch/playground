"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const Figure_1 = require("./Figure");
class Pawn extends Figure_1.Figure {
    constructor(name, movesMade, white) {
        super(name, movesMade, white);
    }
    movePossible(field, startSpot, endSpot) {
        let startX = startSpot.getXPos();
        let startY = startSpot.getYPos();
        let endX = endSpot.getXPos();
        let endY = endSpot.getYPos();
        if (endSpot.getFigure() != null) {
            if (endSpot.getFigure().isWhite == startSpot.getFigure().isWhite) {
                console.log("Friendly fire, move not possible");
                return false;
            }
        }
        if (startSpot.getFigure().white == true && startY > endY) {
            if (startX == endX) {
                if (startY == 6 &&
                    startY - endY < 3 &&
                    startY != endY) {
                    for (let i = 1; i <= Math.abs(startY - endY);) {
                        if (field.getField(startX, startY - i).getFigure == null) {
                            i++;
                        }
                        else {
                            console.log("Move is blocked");
                            return false;
                        }
                    }
                }
                else if (startY - endY ==
                    1) {
                    if (endSpot.getFigure() != null) {
                        console.log("Move is blocked by another figure");
                        return false;
                    }
                }
                else if (startY - endY > 2) {
                    return false;
                }
            }
            else if (Math.abs(startX - endX) == Math.abs(startY - endY) &&
                Math.abs(startX - endX) + Math.abs(startY - endY) == 2) {
                if (endSpot.getFigure() == null) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else if (startSpot.getFigure().white == false && startY < endY) {
            if (startX == endX) {
                if (startY == 1 &&
                    Math.abs(startY - endY) < 3 &&
                    startY != endY) {
                    for (let i = 1; i <= Math.abs(startY - endY);) {
                        if (field.getField(startX, startY + i).getFigure == null) {
                            i++;
                        }
                        else {
                            console.log("Move is blocked");
                            return false;
                        }
                    }
                }
                else if (startY - endY ==
                    1) {
                    if (endSpot.getFigure() != null) {
                        console.log("Move is blocked by another figure");
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else if (Math.abs(startX - endX) == Math.abs(startY - endY) &&
                Math.abs(startX - endX) + Math.abs(startY - endY) == 2) {
                if (endSpot.getFigure() == null) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
}
exports.Pawn = Pawn;
//# sourceMappingURL=Pawn.js.map