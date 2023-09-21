import Character from "./character"
import Boss from "./boss"

const imgSrc = "assets/game/player/player-sprite.png"
const flippedImgSrc = "assets/game/player/flipped-player-sprite.png"

export default class Player extends Character{
    constructor(options) {
        super(options)
        this.height = 123
        this.width = 47
        this.health = 3

        this.isMovingLeft = false
        this.isMovingRight = false

        this.isAttacking = false
        // this.isDashing = false

        this.initMovement()
        // this.jumpCount = 2
        this.attackDir = "rightFacing"
        this.action = true

        this.image.src = imgSrc
        this.animationStates = [
            { name: "idle", frames: 4 },
            { name: "walk", frames: 6 },
            { name: "jump", frames: 10 },
            { name: "glow", frames: 9 },
            { name: "attack1", frames: 10 },
            { name: "attack2", frames: 6 },
            { name: "death", frames: 6 },
            { name: "dash1", frames: 5 },
            { name: "dash2", frames: 5 },
            { name: "takeHit", frames: 4}
        ]
        this.cycleFrames()
    }

    initMovement() {
        
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
    }

    handleKeyDown(event) {
        // can't attack from the dead
        if (this.isOutofHP()) return
        switch (event.key) {
            case "ArrowLeft":
                this.isMovingLeft = true;
                this.attackDir = "leftFacing"
                this.image.src = flippedImgSrc
                this.switchState("walk")
                break;
            case "ArrowRight":
                this.isMovingRight = true;
                this.attackDir = "rightFacing"
                this.image.src = imgSrc
                this.switchState("walk")
                break;
            case "z":
                // TODO: limit to one jump per floor contact
                // ISSUE: buffer/lag on resetting jump when contacting floor
                // console.log(this.jumpCount)
                // if (this.jumpCount > 0) {
                this.vel.y = -15
                // this.playerState = "jump"
                this.switchState("jump")
                //     this.jumpCount--
                // }
                // console.log(this.jumpCount)
                // console.log(this.vel.y === 0)
                // if ((this.pos.y + this.height / 2) > (574 - this.height) ) this.jumpCount = 1
                // console.log(this.jumpCount)
                break;
            case "x":
                if (this.action) {
                    this.action = false
                    this.attack()
                    setTimeout(() => {
                        this.action = true
                    }, 750)
                }
                break;
            // case "c":
            //     this.isDashing = true
            //     break
        }
    }

    handleKeyUp(event) {
        // do nothing if dead
        if (this.isOutofHP()) return
        switch (event.key) {
            case "ArrowLeft":
                this.isMovingLeft = false
                this.switchState("idle")
                this.vel.x = 0
                break
            case "ArrowRight":
                this.isMovingRight = false
                this.switchState("idle")
                this.vel.x = 0
                break
            // case "x":
            //     this.action = true
            //     break
            // case "c":
            //     this.isDashing = false
            //     break
        }
    }
    cycleFrames() {
        this.animationStates.forEach((state, index) => {
            let frames = {
                loc: [],
            }
            for (let j = 0; j < state.frames; j++) {
                let positionX = j * this.frameWidth
                let positionY = index * this.frameHeight
                frames.loc.push({x: positionX, y: positionY})
            }
            this.spriteAnimations[state.name] = frames
        })
    }
    update() {
        this.applyGravity()
        this.animateFrames()
        // check boundary
        if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x = 0;
        } else if (this.pos.x > 1000 - this.width) {
            this.pos.x = 1000 - this.width;
            this.vel.x = 0;
        }

        // can only move when alive
        if (!this.isOutofHP()) {
        // Move left/right
            if (this.isMovingLeft) {
                this.vel.x = -10;
            } else if (this.isMovingRight) {
                this.vel.x = 10;
            }
        } else {
            this.playerState = "death"
            this.vel.x = 0
        }
    }

    // ensures attack animation is completed
    switchState(state) {
        if (this.playerState === "attack2" &&
        !this.action && 
        this.framesElapsed < this.framesMax - 1) return
        switch (state) {
            case "walk":
                this.playerState = "walk"
                break
            case "idle":
                this.playerState = "idle"
                break
            case "jump":
                this.playerState = "jump"
                break
        }
    }

    attack() {
        this.isAttacking = true
        this.playerState = "attack2"
        this.staggerFrames = 5
        setTimeout(() => {
            this.isAttacking = false
            this.playerState = "idle"
            this.staggerFrames = 10
        }, 500)
    }



    collideWith(otherObject) {
        // if attack collides with boss, decrement boss hp
        if (!otherObject.isOutofHP()) {
            otherObject.health -= 1
            console.log(`boss lives:${otherObject.health}`)
            otherObject.isInvulnerable = true
            setTimeout(() => {
                otherObject.isInvulnerable = false
            }, 1000)
        } else {
            // console.log("dead")
        } 
    }

    // used in game.js to check for collision
    isCollidedWith(object) {
        if (object instanceof Boss && !object.isInvulnerable) {
        // measurement for boss
        const objectLeft = object.pos.x
        const objectRight = objectLeft + object.width
        const objectTop = object.pos.y
        const objectBottom = objectTop + object.height
        // measurement for atkBox
        // console.log(this.attackBox.pos.x)
        const atkBoxLeft = this.attackBox.pos.x
        const atkBoxRight = this.attackBox.pos.x + this.attackBox.width
        const atkBoxTop = this.attackBox.pos.y
        const atkBoxBottom = this.attackBox.pos.y + this.attackBox.height
        
        return (
        // checks if atk's width overlaps with boss's width
        ((atkBoxLeft >= objectLeft && atkBoxLeft <= objectRight) ||
        (atkBoxRight >= objectLeft && atkBoxRight <= objectRight)) &&
        // checks if ark's height overlaps with boss's height
        ((atkBoxTop >= objectTop && atkBoxTop <= objectBottom) ||
        (atkBoxBottom >= objectTop && atkBoxBottom <= objectBottom)) &&
        this.isAttacking
        ) 
        
        }
    }


}