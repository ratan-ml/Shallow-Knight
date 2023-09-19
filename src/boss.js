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
        this.fireProjectile()
    }

    fireProjectile() {
        // create a projectile instance
        // 
        const bullet = new Projectile({
            pos: this.pos
        })
        this.game.add(bullet)
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
            // otherObject.health -= 1
    }

    // used in game.js to check for collision
    isCollidedWith(object) {
        // const distance = Util.dist(this.pos, object.pos)
        if (object instanceof Player) {
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