"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spot = void 0;
class Spot {
    constructor(xPos, yPos, figOnSpot, spotName) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.figOnSpot = figOnSpot;
        this.spotName = spotName;
    }
    setSpot(xPos, yPos, figOnSpot, spotName) {
        this.setFigure(figOnSpot);
        this.setXPos(xPos);
        this.setYPos(yPos);
        this.setSpotName(spotName);
        return this.xPos, this.yPos, this.figOnSpot, this.spotName;
    }
    getFigure() {
        return this.figOnSpot;
    }
    setFigure(figOnSpot) {
        this.figOnSpot = figOnSpot;
    }
    getXPos() {
        return this.xPos;
    }
    setXPos(xPos) {
        this.xPos = xPos;
    }
    getYPos() {
        return this.yPos;
    }
    setYPos(yPos) {
        this.yPos = yPos;
    }
    getSpotName() {
        return this.spotName;
    }
    setSpotName(spotName) {
        this.spotName = spotName;
    }
}
exports.Spot = Spot;
//# sourceMappingURL=Spot.js.map