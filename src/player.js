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
        // this.jumpCount = 1
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
                    // this.jumpCount = 0
                // }
                // console.log(this.jumpCount)
                // console.log(this.vel.y === 0)
                // if (this.vel.y === 0) this.jumpCount = 1
                // console.log(this.jumpCount)
                break;
            case "x":
                if (this.action) {
                    this.action = false
                    this.attack()
                    // this.isAttacking = true
                }
                break;
            // case "c":
            //     this.isDashing = true
            //     break
        }
    }

    // handleKeyX(event) {
        // Paulo test
        // if (event.key === "x" && this.isAttacking === false) {
        //     document.removeEventListener("keydown", this.handKeyX)
        //     this.isAttacking = true
        //     setTimeout(() => {
        //         this.isAttacking = false
        //         document.addEventListener("keydown", this.handleKeyX)
        //     }, 2000)
    //     }
    // }

    handleKeyUp(event) {
        switch (event.key) {
            case "ArrowLeft":
                this.isMovingLeft = false
                break
            case "ArrowRight":
                this.isMovingRight = false
                break
            case "x":
                this.isAttacking = false
                this.action = true
                break
            // case "c":
            //     this.isDashing = false
            //     break
        }
    }

    update() {
        this.applyGravity()
        // console.log(!this.game.isOutofBounds(this.pos))
        // FIX: out of bounds
        if (this.isMovingLeft && !this.game.isOutofBounds(this.pos)) {
            this.pos.x -= 10
        }
        if (this.isMovingRight) {
            this.pos.x += 10
        }
    }

    attack() {
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 500)
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