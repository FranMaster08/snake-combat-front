import { JoyCom } from "./joycom";
import { Player } from "./player";

export class Game {
    private joycom: JoyCom;
    private player: Player;
    constructor(private lienzo : HTMLCanvasElement | null) {
        this.player = new Player()
        this.joycom = new JoyCom(document, this.lienzo)
    }

    start() {
        let lastMovement = this.joycom.lastMovement
        
        if (lastMovement == "ArrowRight") {
            this.joycom.moveRight()
        } else if (lastMovement == "ArrowDown") {
            this.joycom.moveDown()
        } else if (lastMovement == "ArrowUp") {
            this.joycom.moveUp()
        } else if (lastMovement == "ArrowLeft") {
            this.joycom.moveLeft()
        }
    }
    pause() {
    }
    gameOver() {
    }

}