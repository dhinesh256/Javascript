"use strict"
window.onload=fun // This gets exec only after the page gets fully loaded

function fun(){
    var a=5;
    console.log(`Hi ${a}`)
}

function secondfun(){
    var b=10
    console.log(`${b}`)
}
secondfun();

////////WORKING WITH FUNCTIONS////////////


function kmphToMph(kmph){
 console.log(`kmph entered ${kmph}`)
 return kmph/1.61;
}
let limit=kmphToMph(104.65)
console.log(`limit in m/hr is ${limit}`)


function mphToKmph(mph){

    console.log("MPH value entered: ", mph);

    return 1.61 * mph;
}

let speedLimit = mphToKmph(65);
console.log("Speed limit in Km/h: ", speedLimit);


/////////ARROW FUNCTION//////
let mphToKmphArrow = mph => {

    console.log("MPH value entered: ", mph);

    return 1.61 * mph;
}

speedLimit = mphToKmphArrow(65);
console.log("Speed limit in Km/h (arrow): ", speedLimit);

///////////////ARROW IMPLICIT////
let mphToKmphImplicit = mph => 1.61 * mph;

speedLimit = mphToKmphImplicit(65);
console.log("Speed limit in Km/h (implicit return): ", speedLimit);

/////ARROW WITH MULTIPLE PARAMETERS////
let triangleArea = (base, height) => 0.5 * base * height;
console.log("Area of a triangle with base of 5 and height of 4: ",triangleArea(5, 4));

/////FUNCTION COPY////
let functionCopy = triangleArea;
console.log("Area of a triangle with base of 8 and height of 14: ", 
            functionCopy(8, 14));


/////////ANONYMOUS FUNCTION///////            
var x = function(f){ return 5 * (f-32) / 9};
console.log("50F in celcius is: ", x(50));


