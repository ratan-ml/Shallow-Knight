import Player from "./player";
import Boss from "./boss";
import Projectile from "./projecticle";
import Background from "./background";

export default class Game {
    constructor(ctx) {
        this.player = new Player({
            pos: {
                x: 25,
                y: 574 - 250,
            },
            vel: {
                x: 0,
                y: 0,
            },
            game: this,
            health: 3,
            framesMax: 4,
            frameX: 0,
            frameY: 0,
            frameWidth: 50, // according to download source
            frameHeight: 37 // according to download source

        });
        this.boss = new Boss({
            pos: {
                x: 875,
                y: 0,
            },
            vel: {
                x: 0,
                y: 0,
            },
            game: this,
            health: 20
        });
        this.projectiles = [];
        this.ctx = ctx
    }

    static DIM_X = 1000
    static DIM_Y = 574

    add(object) {
        if (object instanceof Player) {
            this.player.push(object)
        } else if (object instanceof Boss) {
            this.boss.push(object)
        } else if (object instanceof Projectile) {
            this.projectiles.push(object)
        }
    }
    
    allObjects() {
        console.log()
        return [this.player, this.boss, ...this.projectiles] 
    }

    draw() {
        this.drawBackground()
        // this.ctx.fillStyle = "grey";
        // this.ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.allObjects().forEach((object) => {
            object.draw(this.ctx)
        })
    }

    updateObjects() {
        this.allObjects().forEach((object) => {
            object.update()
        })
    }

    checkCollisions() {
        const allObjects = this.allObjects();
        for (let i = 0; i < allObjects.length; i++) {
            for (let j = 0; j < allObjects.length; j++) {
                const obj1 = allObjects[i];
                const obj2 = allObjects[j];
                // console.log(obj1.isCollidedWith(obj2))
                if (obj1 === obj2) continue

                if (obj1.isCollidedWith(obj2)) {
                    console.log("collided")
                    obj1.collideWith(obj2);
                }
            }
        }
    }

    step() {
        this.updateObjects()
        this.checkCollisions()
    }
    isOutofBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
        (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
    }

    play() {
        this.running = true
        this.animate()
    }

    restart() {
        this.running = false
        const game = new Game(ctx)
    }



    isGameOver() {
        // TODO: refactor to account when three bosses are defeated
        return (this.player.health === 0) || (this.boss.health === 0)
    }
    
    drawBackground() {
        const background = new Background()
        return background.draw(this.ctx)
    }

    animate() {
        this.step()
        this.draw()
        requestAnimationFrame(this.animate.bind(this))
    }

}