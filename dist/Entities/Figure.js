"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Figure = void 0;
class Figure {
    constructor(name, movesMade, white) {
        this.killed = false;
        this.name = name;
        this.movesMade = movesMade;
        this.white = white;
    }
    setWhite(white) {
        this.white = white;
    }
    isWhite() {
        return this.white;
    }
    setKilled(killed) {
        this.killed = killed;
    }
    isKilled() {
        return this.killed;
    }
    Figure(white) {
        this.setWhite(white);
    }
}
exports.Figure = Figure;
//# sourceMappingURL=Figure.js.map