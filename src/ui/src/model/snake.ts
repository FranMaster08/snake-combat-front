import { Drawable } from "../interfaces/drawable";
import { PrincipalPlayer } from "../interfaces/principalPlayer";

export class Snake implements Drawable , PrincipalPlayer {
  constructor(private positionOnX: number, private positionOnY: number) {}
  action(): void {
    throw new Error("Method not implemented.");
  }
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
