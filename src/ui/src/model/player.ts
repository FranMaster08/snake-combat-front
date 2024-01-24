export class Player {
  constructor(
    private positionOnX: number,
    private positionOnY: number
  ) {

  }

  public draw(lienzo: HTMLCanvasElement | null) {
    const ctx = lienzo?.getContext("2d");
    ctx?.clearRect(0, 0, 500, 500)
    ctx?.strokeRect(this.positionOnX, this.positionOnY, 500, 500);
    ctx?.fillRect(
      this.getPostionX() * 50,
      this.getPostionY() * 50,
      50,
      50
    );
    return this
  }

  public setPostionX(value: number): void {
    this.positionOnX = value;
  }
  public setPostionY(value: number): void {
    this.positionOnY = value;
  }

  public getPostionX(): number {
    console.log(this.positionOnX);
    return this.positionOnX;
  }
  public getPostionY(): number {
    return this.positionOnY;
  }
}
