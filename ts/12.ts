const arrayString = ['first', 'second', 'third']
console.log(`${arrayString} - arrayString with type inference`)

arrayString.map((x:string) => console.log(`map of arrayString result: ${x.toUpperCase()}`))

const anotherStingArray: string[] = []
console.log(`${anotherStingArray} - anotherStingArray with type annotation`)

const arrayDates = [new Date(), new Date()]
console.log(`${arrayDates} - arrayDates`)

const twoDimensionalArray = [
    ['first'],
    ['second'],
    ['third']
]
console.log(`${twoDimensionalArray} - twoDimensionalArray`)

const anotherTwoDimensionalArray : string[][] = []
console.log(`${anotherTwoDimensionalArray} - anotherTwoDimensionalArray`)


const arrayWithFlexibleTypes = [new Date(), 'today']
console.log(`${arrayWithFlexibleTypes} - arrayWithFlexibleTypes`)
