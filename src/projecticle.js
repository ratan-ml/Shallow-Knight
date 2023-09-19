
// draw circle
    // vel and dir
// draw column
// draw row
export default class Projectile {
    constructor(options) {
        this.pos = options.pos
    }

    draw(ctx) {
        // bullet
        ctx.fillStyle = "pink";
        ctx.fillRect(this.pos.x, this.pos.y, 25, 25);
    }

    update() {
        // this.pos.x -= 5
        this.pos[0] -= 5
    }

    isCollidedWith() {
        // temp
    }
}