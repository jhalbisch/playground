"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const Figure_1 = require("./Figure");
class Knight extends Figure_1.Figure {
    constructor(name, movesMade, white) {
        super(name, movesMade, white);
    }
    movePossible(_field, startSpot, endSpot) {
        if (endSpot.getFigure() != null) {
            if (endSpot.getFigure().isWhite == startSpot.getFigure().isWhite) {
                console.log("Friendly fire, move not possible");
                return false;
            }
        }
        if (Math.abs(startSpot.getXPos() - endSpot.getXPos()) *
            Math.abs(startSpot.getYPos() - endSpot.getYPos()) !=
            2) {
            return false;
        }
        return true;
    }
}
exports.Knight = Knight;
//# sourceMappingURL=Knight.js.map