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
        this.isInvulnerable = false
        this.health = null
    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)

        // attack box dir changes depending on if left or right arrow key is pressed
        if (this.attackDir === "rightFacing") {
            this.attackBox.pos.x = this.pos.x + this.width
        } else {
            this.attackBox.pos.x = this.pos.x - this.attackBox.width
        }
        this.attackBox.pos.y = this.pos.y
        // display attack only when attack key is pressed
        if (this.isAttacking) {
            ctx.fillStyle = "orange"
            ctx.fillRect(
                this.attackBox.pos.x, 
                this.attackBox.pos.y,
                this.attackBox.width, 
                this.attackBox.height)
        }

        ctx.save()
        ctx.textAlign = "center"
        ctx.font = "10px"
        ctx.fillText(this.health, 
            this.pos.x + this.width * 0.5, 
            this.pos.y)
        ctx.restore()
    }

    applyGravity() {
        // apply gravity
        this.pos.x += this.vel.x
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

    isOutofBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
        (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
    }

    collideWith(otherObject) {
        // placeholder
    }

    isCollidedWith(otherObject) {
        //temp
    }


}