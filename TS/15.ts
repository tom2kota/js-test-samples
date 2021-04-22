class Vehicle {
    drive(): void {
        console.log('... Vehicle is driving ...')
    }

    honk(): void {
        console.log('... Vehicle is beeping ...')
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('... Car is driving ...')
    }

    // honk(): void {
    //     console.log('... Car is beeping ...')
    // }
}

const car = new Car()
car.drive()
car.honk()
