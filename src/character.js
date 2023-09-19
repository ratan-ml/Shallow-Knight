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
        this.isAttacking = false
        this.attackBox = {
            pos: {
                x: this.pos.x + this.width,
                y: this.pos.y
            },
            height: 50,
            width: 75
        }
        this.attackDir = null // change attack box dir depending on last key?
    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)

        // display attack only when attack key is pressed
        // TODO/FIX: implement throttle
        // attack box needs to stay for x frames then be removed
        if (this.isAttacking) {
            // attack box dir changes depending on if left or right arrow key is pressed
            if (this.attackDir === "rightFacing") {
                this.attackBox.pos.x = this.pos.x + this.width
                this.attackBox.pos.y = this.pos.y
            } else {
                this.attackBox.pos.x = this.pos.x - this.attackBox.width
            }

            ctx.fillStyle = "orange"
            ctx.fillRect(
                this.attackBox.pos.x, 
                this.attackBox.pos.y,
                this.attackBox.width, 
                this.attackBox.height)
        }
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