const CONSTANTS = {
    GRAVITY: 0.2
}

export default class Character {
    constructor(options) {
        this.pos = options.pos
        this.vel = options.vel

    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.fillRect(this.pos.x, this.pos.y, 50, 150)
    }

    move() {
        this.draw
        this.pos.y += CONSTANTS.GRAVITY
    }

    // animate() {
    //     this.move()
    //     this.draw(ctx)
    // }
}