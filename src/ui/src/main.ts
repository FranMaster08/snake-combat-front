import { JoyCom } from "./model/joycom";
import { Player } from './model/player';

const canvas = document.getElementById("lienzo");
new Player(0, 0).draw(canvas as HTMLCanvasElement)

window.onload = () => {
  let ticks = 0
  new JoyCom(document);
  setInterval(() => {
    if (ticks > 9) {
      ticks = 0
    }
    new Player(ticks, 0).draw(canvas as HTMLCanvasElement)
    ticks++
  }, 250)
};
