const CONSTANTS = {
    GRAVITY: 0.2
}

export default class Character {
    constructor(options) {
        this.pos = options.pos
        this.vel = options.vel
        this.height = options.height
        this.width = options.width
        this.game = options.game
    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
    }

    move() {
        // apply gravity
        this.pos.y += this.vel.y
        this.vel.y += CONSTANTS.GRAVITY

        const characterBase = this.pos.y + this.height + this.vel.y
        if (characterBase >= 576) {
            this.vel.y = 0
        }
    }

    // equivalent to update
    animate(ctx) {
        this.move()
        this.draw(ctx)
    }


}