class Vehicle {
    // add new FIELD => color
    constructor(public color: string) {

    }

    protected honk(): void {
        console.log('... Vehicle is beeping ...')
    }
}

class Car extends Vehicle {
    constructor(color: string, public doors: number) {
        super(color); // reference to a super class constructor in the parent => Vehicle
    }

    private drive(): void {
        console.log('... Car is driving ...')
    }

    public startDriving(): void {
        console.log(`---== ${(this.color.toUpperCase())} Car with ${this.doors} doors starts driving ==---`)
        this.drive()
        this.honk()
    }
}

const vehicle = new Vehicle('blue');
console.log(`vehicle.color: ${vehicle.color}`)

const car = new Car('green', 2)
car.startDriving()
