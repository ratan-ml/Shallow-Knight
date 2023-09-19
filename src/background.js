const imgSrc = "./assets/game/background/m6/pre.png"

export default class Background {
    constructor() {
        this.width = 1000,
        this.height = 574,
        this.image = new Image()
        this.image.src = imgSrc
    }

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height)
    }
}