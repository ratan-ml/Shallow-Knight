import Character from "./character"
import Player from "./player"
import Projectile from "./projecticle"

export default class Boss extends Character {
    constructor(options) {
        super(options)
        this.height = 250
        this.width = 100
        this.health = 20
        this.velX = 10
    }

    update() {
        this.applyGravity()
        // this.charge()
        // bullets are being created, but not shooting
        // this.fireProjectile() 
    }

    fireProjectile() {
        // create a projectile instance
        // 
        if (this.game.projectiles.length < 4) {
            const bullet = new Projectile({
                pos: {
                    x: this.pos.x,
                    y: this.pos.y
                    } 
            })
            setInterval(() => {
                this.game.add(bullet)
            }, 2000)
        }
        // console.log(this.game.projectiles)
    }

    // moves boss from right to left and back to starting point
    charge() {
        this.pos.x -= this.velX
        if  (this.pos.x <= 0) {
            this.velX *= -1
        }
        if (this.pos.x > (1000-this.width-25)) {
            this.velX = 0
        }
    }

    collideWith(otherObject) {
        // if boss collides with player, decrement player hp
        if (otherObject.health > 0) {
            otherObject.health -= 1
            const playerHP = document.querySelector("#player-health")
            const heart = playerHP.querySelector("img:last-child")
            playerHP.removeChild(heart)
            console.log(`lives:${otherObject.health}`)

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
            otherObject.isDead = true
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
        // measurement for boss
        const bossLeft = this.pos.x
        const bossRight = bossLeft + this.width
        const bossTop = this.pos.y
        const bossBottom = bossTop + this.height
        
        return (
        // checks if object's width overlaps with boss's width
        ((objectLeft >= bossLeft && objectLeft <= bossRight) ||
        (objectRight >= bossLeft && objectRight <= bossRight)) &&
        // checks if object's height overlaps with boss's height
        ((objectTop >= bossTop && objectTop <= bossBottom) ||
        (objectBottom >= bossTop && objectBottom <= bossBottom))
        ) 
        }
    }
}