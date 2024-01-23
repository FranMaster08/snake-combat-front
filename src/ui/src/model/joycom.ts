import { Player } from "./player";

export class JoyCom {
  private player: Player;
  private estaMonda: string = "Esta monda se mueve hacia";
  private Buttons: Record<string, () => void> = {};

  constructor(documentContext: any) {
    this.player = new Player();
    this.Buttons["ArrowLeft"] = this.moveLeft.bind(this);
    this.Buttons["ArrowRight"] = this.moveRight.bind(this);
    this.Buttons["ArrowUp"] = this.moveUp.bind(this);
    this.Buttons["ArrowDown"] = this.moveDown.bind(this);

    documentContext.addEventListener("keydown", this.movePlayer.bind(this));
  }

  private movePlayer(e: KeyboardEvent) {
    const keyPress: string = e.key as string;
    const ejecutar = this.Buttons[`${keyPress}`];
    ejecutar();
  }

  private moveLeft() {
    console.log(`${this.estaMonda} ${this.moveLeft.name}`);
    console.log("Probando si lee el canvas");
    console.log(document.querySelector('#lienzo'));
  }
  private moveDown() {
    console.log(`${this.estaMonda} ${this.moveDown.name}`);
  }
  private moveUp() {
    console.log(`${this.estaMonda} ${this.moveUp.name}`);
  }
  private moveRight() {
    console.log(`${this.estaMonda} ${this.moveRight.name}`);
  }
}
