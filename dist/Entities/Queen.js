"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const Figure_1 = require("./Figure");
class Queen extends Figure_1.Figure {
    constructor(name, movesMade, white) {
        super(name, movesMade, white);
    }
    movePossible(field, startSpot, endSpot) {
        if (endSpot.getFigure() != null) {
            if (endSpot.getFigure().isWhite == startSpot.getFigure().isWhite) {
                console.log("Friendly fire, move not possible");
                return false;
            }
        }
        if (startSpot.getXPos() == endSpot.getXPos() &&
            startSpot.getYPos() != endSpot.getYPos()) {
            for (let i = 0; i < Math.abs(startSpot.getYPos() - endSpot.getYPos());) {
                if (field.getField(startSpot.getXPos(), i).getFigure == null) {
                    i++;
                }
                else {
                    console.log("Move is blocked");
                    return false;
                }
            }
        }
        else if (startSpot.getXPos() != endSpot.getXPos() &&
            startSpot.getYPos() == endSpot.getYPos()) {
            for (let i = 0; i < Math.abs(startSpot.getXPos() - endSpot.getXPos());) {
                if (field.getField(startSpot.getYPos(), i).getFigure == null) {
                    i++;
                }
                else {
                    console.log("Move is blocked");
                    return false;
                }
            }
        }
        else if (Math.abs(startSpot.getXPos() - endSpot.getXPos()) ==
            Math.abs(startSpot.getYPos() - endSpot.getYPos())) {
            if (startSpot.getXPos() < endSpot.getXPos() &&
                startSpot.getYPos() < endSpot.getYPos()) {
                for (let i = 0; i < Math.abs(startSpot.getXPos() - endSpot.getXPos());) {
                    if (field.getField(startSpot.getXPos() + i, startSpot.getYPos() + i).getFigure == null) {
                        i++;
                    }
                    else {
                        console.log("Move is blocked");
                        return false;
                    }
                }
            }
            else if (startSpot.getXPos() < endSpot.getXPos() &&
                startSpot.getYPos() > endSpot.getYPos()) {
                for (let i = 0; i < Math.abs(startSpot.getXPos() - endSpot.getXPos());) {
                    if (field.getField(startSpot.getXPos() + i, startSpot.getYPos() - i).getFigure == null) {
                        i++;
                    }
                    else {
                        console.log("Move is blocked");
                        return false;
                    }
                }
            }
            else if (startSpot.getXPos() > endSpot.getXPos() &&
                startSpot.getYPos() < endSpot.getYPos()) {
                for (let i = 0; i < Math.abs(startSpot.getXPos() - endSpot.getXPos());) {
                    if (field.getField(startSpot.getXPos() - i, startSpot.getYPos() + i).getFigure == null) {
                        i++;
                    }
                    else {
                        console.log("Move is blocked");
                        return false;
                    }
                }
            }
            else if (startSpot.getXPos() > endSpot.getXPos() &&
                startSpot.getYPos() > endSpot.getYPos()) {
                for (let i = 0; i < Math.abs(startSpot.getXPos() - endSpot.getXPos());) {
                    if (field.getField(startSpot.getXPos() - i, startSpot.getYPos() - i).getFigure == null) {
                        i++;
                    }
                    else {
                        console.log("Move is blocked");
                        return false;
                    }
                }
            }
        }
        else {
            return false;
        }
        return true;
    }
}
exports.Queen = Queen;
//# sourceMappingURL=Queen.js.map