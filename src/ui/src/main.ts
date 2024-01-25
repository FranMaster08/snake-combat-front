import { Game } from "./model/game";
import { Player } from "./model/player";


const canvas = document.getElementById("lienzo");
new Game(canvas as HTMLCanvasElement).start()

// new Player().draw(canvas as HTMLCanvasElement)

window.onload = () => {
  setInterval(() => {
  }, 250)
};
