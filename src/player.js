import Character from "./character"



export default class Player extends Character{
    constructor(options) {
        super(options)
        this.height = 150
        this.width = 50
        this.movement()
    }



    movement() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
    }

    handleKeyDown(event) {
        switch (event.key) {
            case "ArrowLeft":
                if (this.pos.x > 0) {
                    this.pos.x -= 20
                }
                break
            case "ArrowRight":
                const rightSide = 1024 - this.width
                if (this.pos.x < rightSide) {
                    this.pos.x += 20
                }
                break
        }
    }
    // attack
    // arrow keys movement
    // jump
}