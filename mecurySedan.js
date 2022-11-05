//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle



class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 25;
        this.scheduleService = false;
    }
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }
}

//this shows how to call from this module...
let newCar = new Car("Mecury", "Sedan", "1965", "color", "mileage");
newCar.start()
console.log(newCar)