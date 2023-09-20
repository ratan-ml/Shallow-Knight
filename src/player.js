import Character from "./character"
import Boss from "./boss"

export default class Player extends Character{
    constructor(options) {
        super(options)
        this.height = 150
        this.width = 50
        this.health = 3

        this.isMovingLeft = false
        this.isMovingRight = false

        this.isAttacking = false
        // this.isDashing = false
        this.initMovement()
        this.jumpCount = 2
        this.attackDir = "rightFacing"

        // this.handleKeyX = this.handleKeyX.bind(this)
        this.action = true
    }



    initMovement() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
        // document.addEventListener("keydown", this.handleKeyX.bind(this))
    }

    handleKeyDown(event) {
        // console.log(event.key)
        switch (event.key) {
            case "ArrowLeft":
                this.isMovingLeft = true;
                this.attackDir = "leftFacing"
                break;
            case "ArrowRight":
                this.isMovingRight = true;
                this.attackDir = "rightFacing"
                break;
            case "z":
                // TODO: limit to one jump per floor contact
                // ISSUE: buffer/lag on resetting jump when contacting floor
                // console.log(this.jumpCount)
                // if (this.jumpCount > 0) {
                this.vel.y = -15
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
        switch (event.key) {
            case "ArrowLeft":
                this.isMovingLeft = false
                this.vel.x = 0
                break
            case "ArrowRight":
                this.isMovingRight = false
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

    update() {
        this.applyGravity()
        // check of boundary
        if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x = 0;
        } else if (this.pos.x > 1000 - this.width) {
            this.pos.x = 1000 - this.width;
            this.vel.x = 0;
        }
        // Move left/right
        if (this.isMovingLeft) {
            this.vel.x = -10;
        } else if (this.isMovingRight) {
            this.vel.x = 10;
        }
    }

    attack() {
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 250)
    }

    collideWith(otherObject) {
        // if attack collides with boss, decrement boss hp
        if (otherObject.health > 0) {
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