"use strict";

//functions
function logger() {
  console.log("Hello Zaid");
}
logger(); // caling/runnig or invoking function

function fruitProcessor(apples, mangos) {
  //parameters
  console.log(apples, mangos);
  const juice = `Juice was made with ${apples} apples and ${mangos} mangos`;
  return juice;
}
fruitProcessor(4, 6);
console.log(fruitProcessor(4, 6)); // logged result of return value in function

//another way is to store it in the  varaibl then log the result like
const juiceMade = fruitProcessor(5, 8);
console.log(juiceMade);

//function declaration
function caclAge(birthYear) {
  const currentYear = 2023;
  return currentYear - birthYear;
}
const age = console.log(caclAge(1996));

// function expression
const calcAge1 = function (birthYear) {
  const currentYear = 2023;
  return currentYear - birthYear;
};
const age2 = calcAge1(1996);
console.log(age2);

//Arrow functions
const calcAge2 = (birthYear) => 2024 - birthYear; //function declaration
console.log(calcAge2(1996)); //function call

//arrow function with multiline statements
const retirementYearsLeft = (birthYear) => {
  //function declaration
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
console.log(`There are ${retirementYearsLeft(1996)} years left for retirement`); //function call

//arrow function with multiple parameters
const retirementTimeLeft = (birthYear, firstName) => {
  //function declaration
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will retire in ${retirement} years`;
};
console.log(retirementTimeLeft(1996, "Zaid")); //function call
console.log(retirementTimeLeft(1997, "Faizan"));

//function calling another function
function fruitCutttermachiine(fruit) {
  return fruit * 5;
}

function fruitProcessor(apples, oranges) {
    const applePieces =fruitCutttermachiine(apples);
    const orangePieces =fruitCutttermachiine(oranges);
  return `Juice made with ${applePieces} apple pieces ${orangePieces} oranges pieces`;
}
console.log(fruitProcessor(4, 6));

// Arrays
const years1 = new Array(2000, 2010, 2020, 2023);
console.log(years1);
//another way writing an array whioh is user very commonly
const friends = ['Zaid', 'Faizan', 'Suhaib', 'Aqib', 'Raqib'];
console.log(friends);
console.log(friends[0]); //retrieving the particular element and array indeex starts from zero
console.log(friends[4]);

console.log(friends.length) //gives the length of a array and it starts count from 1
console.log(friends[friends.length-1]) //gives the last element of an array

friends[3] ='Wajahat';  //updated the array by replacing the  element //only primitive values are immutable
console.log(friends)

//array can hold all different types of values 
const zaid =['Zaid', 'Fayaz', 26, 'Student', friends]
console.log(zaid);

//Exercise
const calAge = function(birthYear){
  return 2023 - birthYear;
}
const years = [1996, 1998, 2000, 2010, 2020];

const age_1 =calAge(years[0]);
const age_2 =calAge(years[3]);
const age_3 =calAge(years[years.length-1]);
console.log(age_1,age_2, age_3)

//another way is just putting the function into the array
const ages = [calAge(years[0]), calAge(years[0]), calAge(years[years.length-1]) ];
console.log(ages);

//objects
const person = {
  firstName : 'Zaid',
  lastName : 'Fayaz',
  age : 2023- 1997,
  job : 'Developer',
  friends : ['Faizan', 'Suhaib', 'Aqib', 'Raqib']
};
console.log(person);

//retrieving data   dot operaor vs bracket
console.log( person.friends);   //dot operator
console.log( person['friends']); //brackets

const nameKey ='Name';
console.log(person['first' + nameKey]);   //brackets we can write expresssion in brackets as well
console.log(person['last' + nameKey]);

const information = prompt('What do you want to know about Zaid? choose between firstName, lastName, age, job , and friends');
console.log(information);
console.log(person.information)  //the dot operator will not work here
console.log(person[information]);  //can get the desired result by using bracktes

//if the user gives any other  property of person that is not defined that will display undefiend to over come that we csn put the condtion
if (person[information]){
  console.log(person[information]);
}else{
  console.log('Wrong request, please  choose between firstName, lastName, age, job , and friends');
}

//adding the property in the object 
person.location = 'Kashmir'; //by dot operator
person['LinkedIn'] = 'Zaid Fayaz';
console.log(person);

//challenge  : use a dynamic way for "person has 3 friends  and his best friend is called Suhaib"
console.log(`${person.firstName} has ${person.friends.length} friends and his best friend is called ${person.friends[1]}`);

//Object methods
const person1 = {
  firstName : 'Zaid',
  lastName : 'Fayaz',
  dob : 1996,
  job : 'Developer',
  friends : ['Faizan', 'Suhaib', 'Aqib', 'Raqib'],
  hasDriversLicense : true, 
  //simply using function expression in object
   calcAge : function (dob) {
   return 2023 - dob;
 },
 // 2nd way :another way is to use the function with this keyword
  calcAge : function () {
       return 2023 - this.dob;  //In an object method, this refers to the object i.e here it is person1.    
  },
  //3rd way: by using this way we dont need to calculate the age again and again 
  calcAge : function (dob) {
    this.dob= 2023 - 1996;
    return this.dob;
  },
  //challenge : "person1 is a 46 year old teacher, and he has a drivers license"
  getSummary : function(){
    console.log(this)
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
  }
};
console.log(person1.calcAge(1996));  //by dot notation
console.log(person1['calcAge'](1996));  // by bracket notation

     //2nd way from above object : as we need to calculate the age again and again
console.log(person1.calcAge());    
console.log(person1.calcAge());
console.log(person1.calcAge());

//3rd way from above object : we need to just simply reqst the dob property
console.log(person1.dob);    
console.log(person1.dob);
console.log(person1.dob);

console.log(person1.getSummary());

//loops : allows to perform repetition code.  for loop keeps running while condition is true 
for(let i=1; i<=10; i++){
  console.log(`Lifting weight repetition ${i}`)
}
//loopong through array
const details =['Zaid', 'Fayaz', 2023 -1996, 'Developer', ['Aqib', 'Suhaib', 'Raqib'], true];
const types =[]; //empty array
for( let i = 0 ; i < details.length ; i++) {
  //reading details array
  console.log(details[i], typeof details[i]);

  //filling types array
  // types[i] = typeof details[i];  //one way
  types.push(typeof details[i]);    //2nd way
}
console.log(types);

// calculte the age using array and store it in another array
const years_1 =[1991, 2007, 1969, 2020];
const ages_3 =[];
for(let i = 0 ; i < years_1.length; i++){
ages_3.push(2023 - years_1[i]);
}
console.log(ages_3);

//continue : skips the particular iteration acc to condtion and then continue
console.log("continue");
const testContinue =[ 'zaid' , 'fayaz', 2037-1999, 'developer', true]

for(let i = 0 ; i < testContinue.length ; i++){
  if(typeof testContinue[i] !== 'string') continue  //continue
    console.log(testContinue[i], typeof testContinue[i]);
  }
//break : terminates the loop for the given condition
 console.log("break");
  for(let i = 0 ; i < testContinue.length ; i++){
    if(typeof testContinue[i] === 'number') break //break
      console.log(testContinue[i], typeof testContinue[i]);
    }
//looping backwards
const details_1 = ['zaid', 'fayaz', 2023 - 1996, 'developer', ['Suhaib', 'Raqib', 'Aqib']];
 for(let i= details_1.length-1; i >=0 ; i--){
  console.log(i, details_1[i]);
 }

 //loop inside the looop 
 for(let exercise = 1 ; exercise < 4 ; exercise++){
  console.log(`--------Starting Exercise------- ${exercise}`);

  for(let rep = 1 ; rep < 6 ; rep++){
    console.log(`Exercise ${exercise}: lifting weigth repetition ${rep}`)
  }
 }

//whilw loop
let rep = 1;
while( rep <= 10){
  console.log(`While : lifting weigh repeptition ${rep}`);
  rep ++;
}
let dice = Math.trunc(Math.random() * 6) + 1 ;
while (dice !==6){
  console.log(` The dice rolled numbr is ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1 ;

  if (dice ===6) console.log('you rolled the dice no. 6 and loop ended here')
}

