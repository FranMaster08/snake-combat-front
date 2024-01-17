import { Game } from "./model/game";
import { Food } from "./model/food";
import { Snake } from "./model/snake";

window.onload = () => {
  const food = new Food(0, 0);
  
  const snake = new Snake(0, 0);
  let lienzo = document.getElementById("lienzo");
  
  const game = new Game(food, snake, lienzo);
  game.PosicionarComida()
  game.draw()
  console.log(lienzo)

  document.addEventListener("keydown", (e) => {
    console.log(e.key);
  });
};
