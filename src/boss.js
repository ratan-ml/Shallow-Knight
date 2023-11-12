import Character from "./character"
import Player from "./player"
import Projectile from "./projecticle"

const imgSrc = "assets/game/boss/png_sheet/Character_sheet.png"
const flippedImgSrc = "assets/game/boss/golem_reversed.png"
const playerHurtAudio = new Audio("assets/music/effects/hurt_c_08-102842.mp3")
playerHurtAudio.volume = 0.1

export default class Boss extends Character {
    constructor(options) {
        super(options)
        this.height = 150
        this.width = 115
        this.health = 1
        this.velX = 10
        
        // this.playerState = "projectile"
        this.attackQueue = [
            "charge",
            "projectile"
        ]
        this.image.src = flippedImgSrc
        this.animationStates = [
            { name: "idle", frames: 4 },
            { name: "glow", frames: 8 },
            { name: "projectile", frames: 9 },
            { name: "charge", frames: 8 },
            { name: "melee", frames: 7 },
            { name: "beam", frames: 7 },
            { name: "armor", frames: 10 },
            { name: "death1", frames: 10 },
            { name: "death2", frames: 1 }
        ]
        this.offsetX = 62
        this.offsetY = 70
        this.offsetWidth = this.width * 2 + 5
        this.offsetHeight = this.height * 2

        this.action = true
        this.stop = false
        this.cycleFrames()
    }


    update() {
        this.applyGravity()
        this.animateFrames()

        
        if (!this.isOutofHP()) {
            setTimeout(() => {
                this.attack(this.sample(this.attackQueue))
            }, 3000)
        } else {
            this.playerState = "death2"
            this.velX = 0
            this.attackQueue = []
        }
    }

    sample(array) {
        return this.attackQueue[Math.floor(Math.random() * array.length)]
    }

    attack(perform) {
        if(this.stop) {
            setTimeout(()=>{
                this.stop = false
            }, 2000)
        }
        switch(perform) {
            case "charge":
                if (!this.stop) {
                    this.charge()
                }
                break
            case "projectile":
                this.fireProjectile()
                break
        }
    }

    fireProjectile() {
        // create a projectile instance
        // console.log(this.game.projectiles.length < 4) // conditional does not work
        const bullet = new Projectile({
            pos: {
                x: this.pos.x,
                y: this.pos.y + 30
                },
            vel: {
                x: 0,
                y: 0
            } 
        })
        if (this.pos.x > (1000-this.width-25) && this.game.projectiles.length < 4) {
            if (this.action) {
                this.action = false
                setTimeout(() => {
                    this.playerState = "projectile"
                    this.game.add(bullet)
                    this.action = true
                }, 1000)
            }
        
        }
        this.game.projectiles.forEach((bullet, index) => {
            if (bullet.pos.x <= 0) this.game.projectiles.splice(index, 1)
        })
        
        // console.log(this.game.projectiles)
    }

    // moves boss from right to left and back to starting point
    charge() {
        this.pos.x -= this.velX
        this.playerState = "idle"
        if  (this.pos.x <= 0) {
            this.velX *= -1
        }
        if (this.pos.x > (1000-this.width-25)) {
            this.velX = 10
            this.stop = true
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

    collideWith(otherObject) {
        // if boss collides with player, decrement player hp
        if (otherObject.health > 0) {
            otherObject.health -= 1
            const playerHP = document.querySelector("#player-health")
            const heart = playerHP.querySelector("img:last-child")
            playerHP.removeChild(heart)
            // console.log(`lives:${otherObject.health}`)

            otherObject.isInvulnerable = true
            playerHurtAudio.play()
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