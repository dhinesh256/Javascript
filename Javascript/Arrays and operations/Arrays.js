"use strict"

let arr=["A","B",3,"D",5,6];
console.log(arr.length)

//LOOPING THRO' ARRAY USING FOR-OF
console.log("LOOPING THRO'")
for(let i of arr)
{
    console.log(i)
}

//ARRAY OBJECT
console.log("ARRAY OBJECT")
let myarr=new Array("A","B",3,"D",5,6)
/*for(let i of arr)
{
    console.log(i)
}*/
console.log("Using forEach")
function arrFun(i,num)
{
    console.log(i+` element ${num+1}`)
}
myarr.forEach(arrFun,1)

//REST PARAMETER SYNTAX ===> GRP OF ELEMENTS TO ARRAY 
console.log("REST PARAMETER SYNTAX")
function  rest(...nums)
{
    for(let num of nums)
    {
        console.log(num+" number")
    }
}
//let arr1=[1,2,3,4,5]
//rest(arr1)
rest(1,2,3,4,5,6,7)

//SPREAD SYNTAX ====> AN ARRAY SPREAD-ED INTO THE GRP OF ELEMENTS
console.log("SPREAD SYNTAX")
console.log(...myarr)
let z=[12,13,14,15,3,45,-1] 
let v=Math.min(...z)
console.log(v)
console.log([...arr,"hello",...myarr])
console.log(..."hello") //SPREADING THE STRING

//DESTRUCTURING ARRAY
console.log("DESTRUCTURING ARRAY")
let numbers=[10,20,30,40,50,60]
let [a,...b]=numbers
console.log(b)
let [,...c]=numbers  //first element in the numbers gets ignored 
console.log(b)

console.log("COPYING OF ARRAY")
let n=numbers;  // SHALLOWCOPY
console.log(n[0])
n[0]=100
console.log(n,numbers)

let q=numbers.slice() //OR [...numbers] //////DEEP COPY
q[0]=999
console.log(q,numbers)
