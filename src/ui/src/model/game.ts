import { Food } from "./food";
import { Snake } from "./snake";

export class Game {
  constructor(
    private comida: Food,
    private culebrita: Snake,
    private lienzo: any
  ) {}

  PosicionarComida = () => {
    this.comida.setPostionX(Math.floor(Math.random() * 10));
    this.comida.setPostionY(Math.floor(Math.random() * 10));
  };

  draw() {
    const ctx = this.lienzo.getContext("2d");
    ctx.strokeRect(0, 0, 500, 500);
    ctx.fillRect(
      this.comida.getPostionX() * 50,
      this.comida.getPostionY() * 50,
      50,
      50
    );
  }
}
