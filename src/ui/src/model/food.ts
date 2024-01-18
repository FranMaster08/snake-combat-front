import { Drawable } from "../interfaces/drawable";

export class Food implements Drawable {
  constructor(private positionOnX: number, private positionOnY: number) {}
  getLength(): number {
    throw new Error("Method not implemented.");
  }
  public setPostionX(value: number): void {
    this.positionOnX = value;
  }
  public setPostionY(value: number): void {
    this.positionOnY = value;
  }

  public getPostionX(): number {
    return this.positionOnX;
  }
  public getPostionY(): number {
    return this.positionOnY;
  }
}
