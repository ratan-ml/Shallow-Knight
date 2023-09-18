const CONSTANTS = {
    GRAVITY: 0.7,
}

export default class Character {
    constructor(options) {
        this.pos = options.pos
        this.vel = options.vel
        this.height = options.height
        this.width = options.width
        this.game = options.game
        this.attackBox = {
            pos: {
                x: this.pos.x + this.width,
                y: this.pos.y
            },
            height: 50,
            width: 75
        }
        this.attackDir = null // change attack box dir depending on last key
    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)

        // FIX: not updating with this.pos
        // console.log(this.attackDir === "rightSide")
        // if (this.attackDir === "rightSide") {
            // console.log(this.pos.x)
        ctx.fillStyle = "orange"
        ctx.fillRect(
            this.attackBox.pos.x, 
            this.attackBox.pos.y,
            this.attackBox.width, 
            this.attackBox.height)
        // } else {
        //     ctx.fillStyle = "orange"
        //     ctx.fillRect(
        //         -(this.attackBox.pos.x), 
        //         -(this.attackBox.pos.y), 
        //         -(this.attackBox.width), 
        //         -(this.attackBox.height)
        // )}
    }

    applyGravity() {
        // apply gravity
        this.pos.y += this.vel.y
        this.vel.y += CONSTANTS.GRAVITY
        this.collideWithFloor()
    }

    collideWithFloor() {
        const characterBase = this.pos.y + this.height + this.vel.y
        if (characterBase >= 574) {
            this.vel.y = 0
        }
    }

    collideWith(otherObject) {
        // placeholder
    }

    isCollidedWith(otherObject) {
        //temp
    }


}