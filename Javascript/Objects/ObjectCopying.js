"use strict";

var myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather",
        color: "Brown"
    }
}

console.log("My car: ", myCar);

var yourCar = myCar;   ////// SHALLOW COPY
console.log("Your car: ", yourCar);

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Grey";

console.log("Your car: ", yourCar);

console.log("My car: ", myCar);


////USING ASSIGN TO COPY

//ASSIGN IS USED TO CONCAT TWO OBJECTS(TARGET + SOURCE) AND RETURN THE CONCATED OBJ(TARGET)
//ASSIGN CAN CREATE A PARTIAL DEEP COPY ONLY(i.e NESTED OBJECTS STILL REFER TO SAME DATA WHERE IT COPIED FROM) 
var hisCar = Object.assign({}, myCar);

hisCar.color = "Red";
hisCar.insured="yes"
hisCar.seats.color = "Neon Green";

console.log("The effect of Object.assign():");
console.log("His car: ", hisCar);
console.log("My car: ", myCar);

///USING SPREAD FOR COPYING(RESULTS SAME AS ASSIGN)
let herCar = {...myCar};

console.log("Her car: ", herCar);

herCar.seats.color = "Black";

console.log("The effect of the spread syntax:");
console.log("Her car: ", herCar);
console.log("My car: ", myCar);

myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather",
        color: "Brown"
    }
}

yourCar = JSON.parse(JSON.stringify(myCar)); ///CREATES DEEP COPY , BUT NOT IN CASE IF ANY OF ATTRIBUTES IS A FUNCTION
//(functions are not recognized in JSON format)

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Purple";

console.log("The effect of JSON.parse() and JSON.stringify(): ");
console.log("Your car: ", yourCar);
console.log("My car: ", myCar);
























