"use strict";

//NUMBERS
let n=44.4765;
console.log(n.toPrecision(3));
console.log(n.toFixed(3));

//STRINGS
let a='Hello world'
console.log(`writing ${a}`); // ` is a backtick
console.log("Hello \"World\" ")  //escaping chars

var b1="hello";
var b2="hello";
var b_O1= new String("hello");
var b_O2= new String("hello");

console.log(b1 == b2); //the value is compared
console.log(b1 == b_O1); //type coercion takes place
console.log(b_O1 == b_O2); //the object refernce is compared
console.log(b_O1.valueOf() == b_O2.valueOf())

console.log(b1 === b2); 
console.log(b1 === b_O1); // false because no type coercion takes place 
console.log(b_O1 === b_O2);
console.log(b_O1.valueOf() == b_O2.valueOf())

//STRING OPERATIONS
console.log(b1.length)
console.log(b1.indexOf('l'))
console.log(b1.search('lo'))

console.log(b1.slice(0,2))

//REPLACE
let text = "Fundamentals of javascript "
console.log(text.replace("JavaScript", "Web Programming"));

console.log(text.replace("javascript", "Python"));

console.log(text.replace(/javascript/i, "Python"));

console.log(text.replace('a', "A"));

console.log(text.replace(/a/g, "A"));

console.log(text.split(""))

//DATE
var time=new Date()
//var time=new Date("22 Jun 2021")
var time=new Date(2021,5,22)
console.log(time)
console.log(time.getTimezoneOffset())


//MATH
console.log(Math.pow(11,4))

//LOOPING
let i=1
while(i<=5)
{
    console.log(i)
    i++;
}

for(let j=5;j>=1;j--)
{
    console.log(j)
}

//TYPE CONVERSION
let z=Number(5)
console.log(typeof(z))
let y=String(z)
console.log(typeof(y))
*/
let c=10
switch(c){
    case 11:
        console.log("ten")
        break;
    case 10:
        console.log("eleven")
    case 11:
        console.log("eleven and half")
        //break;    
    default:
        console.log("twelve")
        break;    

}
