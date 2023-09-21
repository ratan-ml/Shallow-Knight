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
            height: 75,
            width: 56
        }
        this.attackDir = null // change attack box dir depending on last key?
        this.isInvulnerable = false
        this.health = null

        this.image = new Image()
        this.framesMax = options.framesMax
        this.frameX = options.frameX
        this.frameY = options.frameY
        this.frameWidth = options.frameWidth
        this.frameHeight = options.frameHeight

        this.framesElapsed = 0
        this.staggerFrames = 10
        this.playerState = "idle"
        this.spriteAnimations = []
        this.animationStates = []
        
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
        this.attackBox.pos.y = this.pos.y + 5 // offset to align with attack
        
        // display attack only when attack key is pressed
        // if (this.isAttacking) {
            // ctx.fillStyle = "orange"
            // ctx.fillRect(
            //     this.attackBox.pos.x, 
            //     this.attackBox.pos.y,
            //     this.attackBox.width, 
            //     this.attackBox.height)
        // }

        ctx.drawImage(
            this.image, 
            this.frameX, 
            this.frameY, 
            this.frameWidth, 
            this.frameHeight,
            this.pos.x - 50, // offset to align left to hitbox
            this.pos.y - 20, // offset
            this.width * 3 + 12, // scale
            this.height + 27 // scale
            )



        // temp hp display on top of character
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

    isOutofHP() {
        return this.health <= 0
    }

    collideWithFloor() {
        const characterBase = this.pos.y + this.height + this.vel.y
        if (characterBase >= 574) {
            this.vel.y = 0
        }
    }

    collideWith(otherObject) {
        // default do nothing
    }

    isCollidedWith(otherObject) {
        // default do nothing
    }

    animateFrames() {
        let pos = Math.floor(this.framesElapsed/this.staggerFrames) % 
        this.spriteAnimations[this.playerState].loc.length
        this.frameX = this.frameWidth * pos
        this.frameY = this.spriteAnimations[this.playerState].loc[pos].y
        this.framesElapsed++
    }



}