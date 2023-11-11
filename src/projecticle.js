import Player from "./player";

const imgSrc = "assets/game/boss/weapon PNG/arm_projectile.png"

export default class Projectile {
    constructor(options) {
        this.pos = options.pos
        this.vel = options.vel
        this.width = 30
        this.height = 15
        this.image2 = new Image()
        this.image2.src = imgSrc
    }

    draw(ctx) {
        // bullet
        // ctx.fillStyle = "pink";
        // ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);

        ctx.drawImage(
            this.image2, 
            0, 
            0, 
            100, 
            100,
            this.pos.x - 60, // offset to align left to hitbox
            this.pos.y - 30,
            100,
            100
            )
    }

    update() {
        // this.pos.x -= 5
        this.pos.x += this.vel.x
        this.vel.x = -10
    }

    collideWith(otherObject) {
        // if proj collides with player, decrement player hp
        if (otherObject.health > 0) {
            otherObject.health -= 1
            const playerHP = document.querySelector("#player-health")
            const heart = playerHP.querySelector("img:last-child")
            playerHP.removeChild(heart)
            // console.log(`lives:${otherObject.health}`)

            otherObject.isInvulnerable = true
            otherObject.playerState = "takeHit"
            const takeHit = setInterval(() => {
                otherObject.playerState = "takeHit"
            }, 250)
            setTimeout(() => {
                clearInterval(takeHit)
                otherObject.playerState = "idle"
            }, 500)
            setTimeout(() => {
                otherObject.isInvulnerable = false

            }, 1000)
        } else {
            // console.log("dead")
            otherObject.playerState = "death"
        } 
    }

    // used in game.js to check for collision
    isCollidedWith(object) {
        // const distance = Util.dist(this.pos, object.pos)
        if (object instanceof Player && !object.isInvulnerable) {
        // measurement for player
        const objectLeft = object.pos.x
        const objectRight = objectLeft + object.width
        const objectTop = object.pos.y
        const objectBottom = objectTop + object.height
        // measurement for proj
        const projLeft = this.pos.x
        const projRight = projLeft + this.width
        const projTop = this.pos.y 
        const projBottom = projTop + this.height
        
        return (
            // checks if object's width overlaps with proj's width
            ((projLeft >= objectLeft && projLeft <= objectRight) ||
            (projRight >= objectLeft && projRight <= objectRight)) &&
            // checks if object's height overlaps with proj's height
            ((projTop >= objectTop && projTop <= objectBottom) ||
            (projBottom >= objectTop && projBottom <= objectBottom))
        );
        }
    }
}