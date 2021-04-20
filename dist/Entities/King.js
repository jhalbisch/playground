"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const Figure_1 = require("./Figure");
class King extends Figure_1.Figure {
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
        if (startX == endX &&
            startY != endY &&
            Math.abs(startY - endY) == 1) {
            return true;
        }
        else if (startX != endX &&
            startY == endY &&
            Math.abs(startX - endX) == 1) {
            return true;
        }
        else if (Math.abs(startX - endX) == Math.abs(startY - endY) &&
            Math.abs(startX - endX) + Math.abs(startY - endY) == 2) {
            if (startX < endX && startY < endY) {
                return true;
            }
            else if (startX < endX && startY > endY) {
                return true;
            }
            else if (startX > endX && startY < endY) {
                return true;
            }
            else if (startX > endX && startY > endY) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}
exports.King = King;
//# sourceMappingURL=King.js.map