import Character from "./character"


export default class Player extends Character{
    constructor(options) {
        super(options)
        this.height = 150
        this.width = 50
        this.health = 3

        this.isMovingLeft = false
        this.isMovingRight = false
        // this.isJumping = false
        this.isAttacking = false
        // this.isDashing = false
        this.initMovement()
        // this.jumpCount = 1
        
    }

    static atkWidth = 75
    static atkHeight = 50

    initMovement() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
    }

    handleKeyDown(event) {
        // console.log(event.key)
        switch (event.key) {
            case "ArrowLeft":
                this.isMovingLeft = true;
                this.attackDir = "leftSide"
                break;
            case "ArrowRight":
                this.isMovingRight = true;
                this.attackDir = "rightSide"
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
                this.isAttacking = true;
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
                break
            case "ArrowRight":
                this.isMovingRight = false
                break
            // case "z":
            //     this.isJumping = false
            //     break
            // case "x":
            //     this.isAttacking = false
            //     break
            // case "c":
            //     this.isDashing = false
            //     break
        }
    }

    update() {
        this.applyGravity()
        if (this.isMovingLeft) {
            this.pos.x -= 10
        }
        if (this.isMovingRight) {
            this.pos.x += 10
        }
        if (this.isAttacking) {
            
        }
    }

    // attack
        // create attack box
        // check if collide with boss box
    attack (ctx) {

    }
    // jump
}