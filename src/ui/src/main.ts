import { Drawable } from "./interfaces/drawable";
import { PrincipalPlayer } from "./interfaces/principalPlayer";
import { Food, Game, Snake } from "./model";

class Main {
  private ticks: number = 0;
  constructor(
    private game: Game,
    private food: Drawable,
    private principalPlayer: PrincipalPlayer & Drawable,
    private brush: HTMLElement | null
  ) {
    this.game.clean().draw(principalPlayer);
  }

  public play() {
    this.ticks = this.ticks > 9 ? 0 : this.ticks;
    this.principalPlayer.setPostionY(this.ticks);
    this.principalPlayer.setPostionX(this.ticks);
    this.game.clean().draw(this.principalPlayer);
    this.ticks++;
  }
  pause() {}
  gameOver() {}
}

window.onload = () => {
  const canvas = document.getElementById("lienzo");
  const snake = new Snake(0, 0);
  const food = new Food(0, 0);
  const game = new Game(food, snake, canvas);
  const main = new Main(game, food, snake, canvas);
  setInterval(() => {
    main.play();
  }, 250);
};
