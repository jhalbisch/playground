import { Figure } from "./Figure";

export class Spot {
     xPos: number;
     yPos: number;
     figOnSpot: Figure;
     spotName: string;
     constructor(xPos:number, yPos:number, figOnSpot: Figure, spotName: string){
          this.xPos = xPos;
          this. yPos = yPos;
          this.figOnSpot = figOnSpot;
          this.spotName = spotName;
     }

     public setSpot(xPos: number, yPos: number, figOnSpot: any, spotName: string) {
          this.setFigure(figOnSpot);
          this.setXPos(xPos);
          this.setYPos(yPos);
          this.setSpotName(spotName);

          return this.xPos, this.yPos, this.figOnSpot, this.spotName;
     }

     getFigure() {
          return this.figOnSpot;
     }

     setFigure(figOnSpot: any) {
          this.figOnSpot = figOnSpot;
     }

     getXPos() {
          return this.xPos;
     }

     setXPos(xPos: number) {
          this.xPos = xPos;
     }

     getYPos() {
          return this.yPos;
     }

     setYPos(yPos: number) {
          this.yPos = yPos;
     }

     getSpotName() {
          return this.spotName;
     }

     setSpotName(spotName: string) {
          this.spotName = spotName;
     }
}
