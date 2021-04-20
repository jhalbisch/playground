"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
const Figure_1 = require("./Figure");
class Rook extends Figure_1.Figure {
    constructor(name, movesMade, white) {
        super(name, movesMade, white);
    }
    movePossible(field, startSpot, endSpot) {
        let startX = startSpot.getXPos();
        let startY = startSpot.getYPos();
        let endX = endSpot.getXPos();
        let endY = endSpot.getYPos();
        if (endSpot.getFigure() != null &&
            endSpot.getFigure().white == startSpot.getFigure().white) {
            console.log("Friendly fire! Move blocked by", endSpot.figOnSpot.name);
            return false;
        }
        if (startX == endX &&
            startY != endY) {
            if (startY < endY) {
                for (let i = startY + 1; i <= endY; i++) {
                    if (field.getField(startX, i).getFigure() != null) {
                        console.log("Move blocked by", field.getField(startX, i).getFigure.name);
                        return false;
                    }
                }
            }
            else {
                for (let i = startY - 1; i >= endY; i--) {
                    if (field.getField(startX, i).getFigure() != null) {
                        console.log("Move blocked by", field.getField(startX, i).getFigure().name);
                        return false;
                    }
                }
            }
        }
        else if (startX != endX &&
            startY == endY) {
            for (let i = 0; i < Math.abs(startX - endX);) {
                if (field.getField(startY, i).getFigure == null) {
                    i++;
                }
                else {
                    console.log("Move is blocked");
                    return false;
                }
            }
        }
        else {
            return false;
        }
        return true;
    }
}
exports.Rook = Rook;
//# sourceMappingURL=Rook.js.map