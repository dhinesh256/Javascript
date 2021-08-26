"use strict"

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



// SWITCH CASE
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

//CONDITIONALS

let m=4
if(m<5)
    console.log("Less than 5")
else if(m==5)
    console.log("Equal to 5")
else
    console.log("Greater than 5")


