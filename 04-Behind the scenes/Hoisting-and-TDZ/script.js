"use strict";
console.log(me); //undefiend
//console.log(job); //ReferenceError: Cannot access 'job' before initialization coz its in tdz
//console.log(age); //ReferenceError: Cannot access 'age' before initialization coz its in tdz

var me = "zaid";
let job = "deverloper";
const age = 26;

//functions

console.log(addDecl(2, 4)); //output 6
//console.log(addExp(2,4))   //ReferenceError: Cannot access 'addExp' before initialization coz its in tdz
//console.log(addArrow(2,4)) //ReferenceError: Cannot access 'aaddArrow' before initialization coz its in tdz

function addDecl(a, b) {
  return a + b;
}
const addExp = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

//example

let x = 10;
var y = 12;
const z = 3;
console.log(x === window.x); ///false
console.log(y === window.y); //true  cox variables declared with var creates a property on the global window
console.log(z === window.z); //false
