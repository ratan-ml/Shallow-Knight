import Character from "./character"


export default class Player extends Character{
    constructor(options) {
        super(options)
        this.height = 150
        this.width = 50

        this.isMovingLeft = false
        this.isMovingRight = false
        this.isJumping = false
        this.isAttacking = false
        this.isDashing = false
        this.initMovement()
    }


    initMovement() {
        document.addEventListener("keydown", this.handleKeyDown.bind(this))
        document.addEventListener("keyup", this.handleKeyUp.bind(this))
    }

    handleKeyDown(event) {
        console.log(event.key)
        switch (event.key) {
            case "ArrowLeft":
                this.isMovingLeft = true
                break
            case "ArrowRight":
                this.isMovingRight = true
                break
            case "z":
                this.isJumping = true
                break
            case "x":
                this.isAttacking = true
                break
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
            case "z":
                this.isJumping = false
                break
            case "x":
                this.isAttacking = false
                break
            case "c":
                this.isDashing = false
                break
        }
    }

    update() {
        // console.log(this.isMovingRight)
        this.applyGravity()
        if (this.isMovingLeft) {
            this.pos.x -= 20
        }
        if (this.isMovingRight) {
            this.pos.x += 20
        }
        if (this.isJumping) {
            this.pos.y -= 10
        }
        console.log(this.vel)
        console.log(this.pos)
    }

    // attack
        // create attack box
        // check if collide with boss box
    
    // jump
}