export class Snake {
    constructor(private positionOnX: number, private positionOnY: number) {}
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