class Car {
    drive(): void {
        console.log('... driving ...')
    }

    honk(): void {
        console.log('... beeping ...')
    }
}

const car = new Car()
car.drive()
car.honk()
