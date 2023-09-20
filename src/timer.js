import Boss from "./boss"

class Clock {
    constructor() {
        const date_obj = new Date()
        this.hour = date_obj.getHours()
        this.min = date_obj.getMinutes()
        this.sec = date_obj.getSeconds()
    
        this.printTime()
        setInterval(this._tick.bind(this), 1000)
    }

    printTime() {
        console.log(`${this.hour}:${this.min}:${this.sec}`)
    }

    _tick() {
        this.sec += 1
    
        if (this.sec === 60) {
            this.min += 1
            this.sec = 0
        }
        if (this.min === 60) {
            this.hour += 1
            this.min = 0
        }
        if (this.hour === 24) {
            this.hour = 0
        }

        this.printTime()
    }
    
}
const clock = new Clock();