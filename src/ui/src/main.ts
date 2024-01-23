import { Drawable } from "./interfaces/drawable";
import { PrincipalPlayer } from "./interfaces/principalPlayer";
import { Food, Game, Snake } from "./model";
import { Joycom } from "./model/joycom";

class Main {
  private joycom: Joycom;
  constructor(
    private game: Game,
    private food: Drawable,
    private principalPlayer: PrincipalPlayer & Drawable,
    private brush: HTMLElement | null
  ) {
    this.game.clean().draw(principalPlayer),
    this.joycom = new Joycom(document, this.principalPlayer, this.game);
  
  }

  public play() {

    let lastMovement = this.joycom.lastMovement

    if (lastMovement === 'ArrowRight') {
      this.joycom.right()
    } else if (lastMovement === 'ArrowLeft') {
      this.joycom.left()
    } else if (lastMovement === 'ArrowUp') {
      this.joycom.up()
    } else if (lastMovement === 'ArrowDown') {
      this.joycom.down()
    }

    // this.ticks = this.ticks > 9 ? 0 : this.ticks;
    // this.principalPlayer.setPostionX(this.ticks);
    // this.game.clean().draw(this.principalPlayer);
    // this.ticks++;

    // new Joycom(document, this.principalPlayer, this.game, this.ticks)

  }

  pause() { }
  gameOver() { }
}

window.onload = () => {
  const canvas = document.getElementById("lienzo");
  const snake = new Snake(0, 0);
  const food = new Food(0, 0);
  const game = new Game(food, snake, canvas as HTMLCanvasElement);
  const main = new Main(game, food, snake, canvas);
  setInterval(() => {
    main.play();
  }, 250);
};
