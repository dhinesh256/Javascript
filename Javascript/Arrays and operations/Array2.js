"use strict"

/////////////ADDITION AND DELETION OF ELEMENTS FROM ARRAY

let numbers=[10,20,30,40,50,60,70,80]
//TO INSERT AT END
numbers.push(90)
console.log(numbers)

//TO DELETE AT END
numbers.pop()
console.log(numbers)

//TO INSERT AT START
numbers.unshift(0)
console.log(numbers)

//TO DELETE AT START
numbers.shift()
console.log(numbers)

//TO INSERT AT MIDDLE
numbers.splice(3,0,33,36,39)
       //      (index,delete count,To add elements(REST))
console.log(numbers)

numbers.splice(6,6,1)
console.log(numbers)

let p=numbers.slice(1,5)
console.log(p)

/////CONCATENATION////

let numbers1=[1,2,3,4,5]
let numbers2=[12,23,34,45]
let n1=numbers1.concat(numbers,numbers2)
console.log(n1)

/////SORTING///////
//NOT FOR NUMBERS
 let n3=["alpha","beta","zebra","xylaphone","machine"]
 console.log(n3) 
