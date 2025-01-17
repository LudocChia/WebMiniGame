export class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(brand, model) {
        this.#brand = brand;
        this.#model = model;
    }

    displayInfo() {
        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, Trunk is opening: ${this.isTrunkOpen}`);
    }

    go() {
        if (this.isTrunkOpen) {
            console.log('Cannot go! Close the trunk first.')
        } else {
            this.speed + 5 > 200 ? this.speed = 200 : this.speed += 5;
        }
    }

    brake() {
        this.speed - 5 < 0 ? this.speed = 0 : this.speed -= 5;
    }

    openTruck() {
        this.speed > 0 ? console.log('Cannot open truck while car is driving') : this.isTrunkOpen = true;
    }

    closeTruck() {
        this.isTrunkOpen = false;
    }

    getBrand() {
        return this.#brand;
    }

    getModel() {
        return this.#model;
    }
}

export class RaceCar extends Car {
    acceleration;

    constructor(brand, model, acceleration) {
        super(brand, model); // Call the parent constructor
        this.acceleration = acceleration;
    }

    go() {
        this.speed + this.acceleration > 300 ? this.speed = 300 : this.speed += this.acceleration;
    }

    openTruck() {
        console.log('Race cars do not have a trunk.');
    }


    closeTruck() {
        console.log('Race cars do not have a trunk.');
    }

    displayInfo() {
        console.log(`${this.getBrand()} ${this.getModel()}, Speed: ${this.speed} km/h, Acceleration: ${this.acceleration}`);
    }

}

export default Car;