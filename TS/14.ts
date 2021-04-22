interface StatInfo {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string
}

const firstCar = {
    name: 'Car #1',
    year: new Date(1995, 11, 17, 3, 24, 0),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const secondCar = {
    name: 'Car #2',
    year: new Date(2020, 5),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const printCar = (x: { name: string; year: Date; broken: boolean; summary(): string }): void => {
    console.log(`printCar function without interface result: `)
    console.log(`Car name: ${x.name}`)
    console.log(`Car year: ${x.year}`)
    console.log(`Car broken: ${x.broken}`)
    console.log(`Summary: ${x.summary()}`)
}

const printSummary = (x: StatInfo): void => {
    // console.log(`Car name: ${x.name}`)
    // console.log(`Car year: ${x.year}`)
    // console.log(`Car broken: ${x.broken}`)
    console.log(`Summary: ${x.summary()}`)
}

printCar(firstCar)
console.log('---------------')
printSummary(firstCar)
console.log('---------------')
printSummary(secondCar)
