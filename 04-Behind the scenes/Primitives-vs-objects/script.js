'use strict'
//primitive types
let lastName = "Fayaz";
let oldLastName = lastName;
lastName = 'Shawl';
console.log(lastName, oldLastName)

//reference types

const person = {
    firstName : 'zaid',
    lastName : 'Fayaz',
    age : 26,
}
const marriedPerson = person;
marriedPerson.lastName = 'Shawl';
console.log('Beofre Married:', person);  
console.log('After Married:', marriedPerson)   //botj will display the ame name cox the address in stack stack is both for same and that points the feference towards the heap  
//copying objects
const person2 = {
    firstName : 'zaid',
    lastName : 'Fayaz',
    age : 26,
    family : ['haseeb', 'iqu']
}
const copyPerson = Object.assign({}, person2);  //copy the one obkect to another
copyPerson.lastName = 'shawl';
copyPerson.family.push('mom');
copyPerson.family.push('dad');

console.log('Beofre Married:', person2);  
console.log('After Married:', copyPerson)   //now the last name will be changed coz its creates a separate object in the heap but both the objects will have 4 family members coz object.assign only works on a first level

