let dogQuantity: number = 2
let dogColor: string = 'black'
let dogHappiness: boolean = true

console.log(`There are ${dogQuantity} dogs - a type: ${typeof dogQuantity}`)
console.log(`of ${dogColor} color - a type: ${typeof dogColor}`)
console.log(`that are full of happiness ${dogHappiness} - a type: ${typeof dogHappiness}`)

let nothingMuch: null = null
let nothing: undefined = undefined
console.log(`Result of nothingMuch is:  ${nothingMuch} - a type: ${typeof nothingMuch}`)
console.log(`Result of nothing is:  ${nothing} - a type: ${typeof nothing}`)

let now: Date = new Date()
console.log(`Result of now is:  ${now} - a type: ${typeof now}`)

let someColors: string[] = ['red', 'yellow', 'green']
let someNumbers: number[] = [1, 2, 3]
let someFacts: boolean[] = [true, false, true]

console.log(`Result of array someColors is:  ${someColors} - a type: ${typeof someColors}`)
console.log(`Result of array someNumbers is:  ${someNumbers} - a type: ${typeof someNumbers}`)
console.log(`Result of array someFacts is:  ${someFacts} - a type: ${typeof someFacts}`)

class Car {
}

let car: Car = new Car()

console.log(`Result of class Car is:  ${car} - a type: ${typeof car}`)

let somePoint: { x: number, y: number } = {
    x: 2,
    y: 3
}
console.log(`Result of somePoint Object literal is: (${somePoint.x}; ${somePoint.y}) - a type: ${typeof somePoint}`)

const printNumber: (i: number) => void = (i: number) => {
    console.log(`Result of printNumber function is: ${i}`)
}

printNumber(20)
console.log(`a type of printNumber is: ${typeof printNumber}`)
