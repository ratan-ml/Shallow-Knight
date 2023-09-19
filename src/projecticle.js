
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
        ctx.beginPath();
        ctx.arc(
          this.pos[0], this.pos[1], 5, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    update() {
        // this.pos.x -= 5
        this.pos[0] -= 5
    }

    isCollidedWith() {
        // temp
    }
}