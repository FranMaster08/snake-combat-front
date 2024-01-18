import { Drawable } from "../interfaces/drawable";
import { PrincipalPlayer } from "../interfaces/principalPlayer";
import { Game } from "./game";


export class Joycom {
    private ticksX: number = 0
    private ticksY: number = 0
    constructor(
        document: any,
        private principalPlayer: PrincipalPlayer & Drawable,
        private game: Game

    ) {
        document.addEventListener('keydown', (e: any) => {
            e.preventDefault()
            this.movement(e)
        })
    }

    movement(e: any) {

        switch (e.key) {

            case "ArrowRight":
                console.log("Esta monda sirve")
                this.right();
                break;

            case "ArrowDown":
                console.log("Esta monda sirve 2.0")
                this.down();
                break;

            case "ArrowUp":
                console.log("Esta monda sirve 3.0")
                this.up();
                break;

            case "ArrowLeft":
                console.log("Esta monda sirve 4.0")
                this.left();
                break;

            default:

                break;
        }
    }

    right() {
        this.ticksX = this.ticksX > 9 ? 0 : this.ticksX;
        this.principalPlayer.setPostionX(this.ticksX);
        this.principalPlayer.setPostionY(this.ticksY)
        this.game.clean().draw(this.principalPlayer);
        this.ticksX++;
    }
    left() {
        this.ticksX = this.ticksX < 0 ? 9 : this.ticksX;
        this.principalPlayer.setPostionX(this.ticksX);
        this.game.clean().draw(this.principalPlayer);
        this.ticksX--;
    }
    up() {
        this.ticksY = this.ticksY < 0 ? 9 : this.ticksY;
        this.principalPlayer.setPostionY(this.ticksY);
        this.game.clean().draw(this.principalPlayer);
        this.ticksY--;
    }
    down() {
        this.ticksY = this.ticksY > 9 ? 0 : this.ticksY;
        this.principalPlayer.setPostionY(this.ticksY);
        this.game.clean().draw(this.principalPlayer);
        this.ticksY++;
    }

}