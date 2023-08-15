'use strict'
console.log(this);  //this refers to global window here

 const calcAge = function(dob){
    console.log(2024 - dob);
    console.log(this); //this is undefined here
 }
 calcAge(1996);

 const calcAgeArrow = dob =>{
    console.log(2023 - dob);
    console.log(this); //this  referes to global window here coz  arrow functions doesnt have its won this keywoard
 }
 calcAgeArrow(1996);

const person ={
    year : 1996,
    calcAge : function(){
        console.log(this);
        console.log(2023 - this.year);
    }
}
person.calcAge();
 const matilda = {
    year : 1997
 }
 matilda.calcAge = person.calcAge //method borrowing
 matilda.calcAge()  