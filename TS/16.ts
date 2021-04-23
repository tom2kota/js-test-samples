class Vehicle {
    protected honk(): void {
        console.log('... Vehicle is beeping ...')
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log('... Car is driving ...')
    }

    public startDriving(): void {
        console.log('... Car starts driving ...')
        this.drive()
        this.honk()
    }
}

const car = new Car()
// car.drive()
// car.honk()
car.startDriving()
