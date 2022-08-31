// let createPerson = (pName, age, isMarried) ({
//     pName,
//     age,
//     isMarried
// })

// let person1 = createPerson("Philippe", 24, false)
// let person2 = createPerson("Lanna", 23, false)

let car1 = {
    brand: "Fiat",
    color: "Red",
    speed: 220,
    start: () => {
        console.log("Car is starting")
    },
    break: () => {
        console.log("Car is breaking")
    },
    stop: () => {
        console.log("The car stopped")
    },
    setSpeed: (speed) => {
        this.speed = speed
        console.log(`The car speed is ${this.speed}`)
    }
}


car1.start()
console.log(car1.speed)
car1.setSpeed(252)
console.log(car1.speed)