import { Player } from "./player";

export class JoyCom {
  private player: Player;
  private estaMonda: string = "Esta monda se mueve hacia";
  private Buttons: Record<string, () => void> = {};
  private ticksX : number = 0;
  private ticksY : number = 0;
  public lastMovement: string = "ArrowRight";
  public lienzo: HTMLCanvasElement | null;
  
  constructor(documentContext: any, lienzo : HTMLCanvasElement | null) {
    this.lienzo = lienzo;
    this.player = new Player(0, 0);
    this.Buttons["ArrowLeft"] = this.moveLeft.bind(this);
    this.Buttons["ArrowRight"] = this.moveRight.bind(this);
    this.Buttons["ArrowUp"] = this.moveUp.bind(this);
    this.Buttons["ArrowDown"] = this.moveDown.bind(this);

    documentContext.addEventListener("keydown", this.movePlayer.bind(this));
  }

  private movePlayer(e: KeyboardEvent) {
    const keyPress: string = e.key as string;
    this.lastMovement = keyPress;
    const ejecutar = this.Buttons[`${keyPress}`];
    ejecutar();
  }

  public moveLeft() {
    console.log(`${this.estaMonda} ${this.moveLeft.name}`);
    this.ticksX = this.ticksX < 0 ? 9 : this.ticksX;
    this.ticksX--;
    this.player.setPostionX(this.ticksX);
    this.player.clean(this.lienzo).draw(this.lienzo);
  }
  public moveDown() {
    console.log(`${this.estaMonda} ${this.moveDown.name}`);
    this.ticksY = this.ticksY > 9 ? 0 : this.ticksY;
    this.ticksY++;
    this.player.setPostionY(this.ticksY);
    this.player.clean(this.lienzo).draw(this.lienzo);
  }
  public moveUp() {
    console.log(`${this.estaMonda} ${this.moveUp.name}`);
    this.ticksY = this.ticksY < 0 ? 9 : this.ticksY;
    this.ticksY--;
    this.player.setPostionY(this.ticksY);
    this.player.clean(this.lienzo).draw(this.lienzo);
  }
  public moveRight() {
    console.log(`${this.estaMonda} ${this.moveRight.name}`);
    this.ticksX = this.ticksX > 9 ? 0 : this.ticksX;
    this.ticksX++;
    this.player.setPostionX(this.ticksX);
    this.player.clean(this.lienzo).draw(this.lienzo);
  }
}
