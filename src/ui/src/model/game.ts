import { Food } from "./food";
import { Snake } from "./snake";
import { Drawable } from "../interfaces/drawable";

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
  clean(){
    const ctx = this.lienzo.getContext("2d");
    ctx.clearRect(0,0,500,500)
    return this
  }

  draw(drawing: Drawable) {
    const ctx = this.lienzo.getContext("2d");
    ctx.strokeRect(0, 0, 500, 500);
    ctx.fillRect(
      drawing.getPostionX() * 50,
      drawing.getPostionY() * 50,
      50,
      50
    );
    return this
  }
}
