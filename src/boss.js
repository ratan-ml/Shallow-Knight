import Character from "./character"

export default class Boss extends Character {
    constructor(options) {
        super(options)
        this.height = 250
        this.width = 100
    }

    update() {
        this.applyGravity()
    }
}