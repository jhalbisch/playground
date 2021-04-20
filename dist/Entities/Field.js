"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
const Bishop_1 = require("./Bishop");
const King_1 = require("./King");
const Knight_1 = require("./Knight");
const Pawn_1 = require("./Pawn");
const Queen_1 = require("./Queen");
const Rook_1 = require("./Rook");
const Spot_1 = require("./Spot");
class Field {
    constructor() {
        this.letterList = ["A", "B", "C", "D", "E", "F", "G", "H"];
    }
    Field() {
        this.resetField();
    }
    getField(x, y) {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            throw new Error("Out of bounds");
        }
        return this.fields[x][y];
    }
    resetField() {
        this.fields = [];
        for (let i = 0; i < 8; i++) {
            this.fields[i] = [];
            for (let j = 0; j < 8; j++) {
                this.fields[i][j] = new Spot_1.Spot(i, j, null, `${this.letterList[i]}` + Math.abs(j - 8));
            }
        }
        this.fields[0][0].setSpot(0, 0, new Rook_1.Rook("br", 0, false), this.fields[0][0].getSpotName());
        this.fields[1][0].setSpot(1, 0, new Knight_1.Knight("bn", 0, false), this.fields[1][0].getSpotName());
        this.fields[2][0].setSpot(2, 0, new Bishop_1.Bishop("bb", 0, false), this.fields[2][0].getSpotName());
        this.fields[3][0].setSpot(3, 0, new Queen_1.Queen("bq", 0, false), this.fields[3][0].getSpotName());
        this.fields[4][0].setSpot(4, 0, new King_1.King("bk", 0, false), this.fields[4][0].getSpotName());
        this.fields[5][0].setSpot(5, 0, new Bishop_1.Bishop("bp", 0, false), this.fields[5][0].getSpotName());
        this.fields[6][0].setSpot(6, 0, new Knight_1.Knight("bn", 0, false), this.fields[6][0].getSpotName());
        this.fields[7][0].setSpot(7, 0, new Rook_1.Rook("br", 0, false), this.fields[7][0].getSpotName());
        for (let i = 0; i < 8; i++) {
            this.fields[i][1].setSpot(i, 1, new Pawn_1.Pawn("bp", 0, false), this.fields[i][1].getSpotName());
        }
        for (let i = 0; i < 8; i++) {
            for (let j = 2; j < 6; j++) {
                this.fields[i][j].setSpot(i, j, null, this.fields[i][j].getSpotName());
            }
        }
        this.fields[0][7].setSpot(0, 7, new Rook_1.Rook("wr", 0, true), this.fields[0][7].getSpotName());
        this.fields[1][7].setSpot(1, 7, new Knight_1.Knight("wn", 0, true), this.fields[1][7].getSpotName());
        this.fields[2][7].setSpot(2, 7, new Bishop_1.Bishop("wb", 0, true), this.fields[2][7].getSpotName());
        this.fields[3][7].setSpot(3, 7, new Queen_1.Queen("wq", 0, true), this.fields[3][7].getSpotName());
        this.fields[4][7].setSpot(4, 7, new King_1.King("wk", 0, true), this.fields[4][7].getSpotName());
        this.fields[5][7].setSpot(5, 7, new Bishop_1.Bishop("wb", 0, true), this.fields[5][7].getSpotName());
        this.fields[6][7].setSpot(6, 7, new Knight_1.Knight("wn", 0, true), this.fields[6][7].getSpotName());
        this.fields[7][7].setSpot(7, 7, new Rook_1.Rook("wr", 0, true), this.fields[7][7].getSpotName());
        for (let i = 0; i < 8; i++) {
            this.fields[i][6].setSpot(i, 6, new Pawn_1.Pawn("wp", 0, true), this.fields[i][6].getSpotName());
        }
    }
}
exports.Field = Field;
//# sourceMappingURL=Field.js.map