import { Food } from "./model/food";
import { Game } from "./model/game";
import { Snake } from "./model/snake";

const food = new Food(0, 0);
console.log("food");

window.onload = () => {
  try {
    const food = new Food(0, 0);

    const snake = new Snake(0, 0);
    let lienzo = document.getElementById("lienzo");

    const game = new Game(food, snake, lienzo);
    game.PosicionarComida();
    game.draw();
    console.log(lienzo);

    document.addEventListener("keydown", (e) => {
      console.log(e.key);
    });
  } catch (error) {
    console.log(error);
  }
};
