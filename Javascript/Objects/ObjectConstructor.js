"use strict";

///CREATING OBJECT TEMPLATES
function Car(make, model, price, engine) {

    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
};

let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}

let myCar = new Car("Volvo", "S60", 42000, s60Engine); //CREARING OBJECT FROM TEMPLATE

console.log(`My car is a ${myCar.make} ${myCar.model} with horsepower of ${myCar.engine.horsepower}`);

let caymanEngine = {
    cylinders: 4,
    displacement: 2500,
    horsepower: "350D" 
}

let yourCar = new Car("Porsche", "718 Cayman", 61000, caymanEngine);
console.log(`Your car is a ${yourCar.make} ${yourCar.model} with horsepower of ${yourCar.engine.horsepower}`);

function Car(make, model, price, engine) {

    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
    ///DEFINING FUNCTIONS INSIDE THE OBJ CONSTRUCTOR
    this.details = function(){
        console.log(`            Make: ${this.make} 
            Model: ${this.model}
            Price: $${this.price}`);
    };

    this.engine.details = function(){
        console.log(`            Displacement: ${this.displacement}cc
            Horsepower: ${this.horsepower}bhp`);
    };
};

myCar = new Car("Volvo", "S60", 42000, s60Engine);

console.log("My car details: \n");
myCar.details();

console.log("My engine details: \n");
myCar.engine.details();


//USING CLASS IN JS

class Vehicle{

    constructor(make, model, price, engine){
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;
    }

    details = function(){
        console.log(`            Make: ${this.make} 
            Model: ${this.model}
            Price: $${this.price}`);
    };

    engineDetails = function(){
        console.log(`            Displacement: ${this.engine.displacement}cc
            Horsepower: ${this.engine.horsepower}bhp`);
    };
};

myCar = new Vehicle("Volvo", "S60", 42000, s60Engine);

console.log("My vehicle details: \n");
myCar.details();

console.log("My vehicle's engine details: \n");
myCar.engine.details();


























