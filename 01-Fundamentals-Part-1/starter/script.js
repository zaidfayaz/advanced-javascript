//Data types
//String
let js = "amazing";
console.log(js);

//Number
let PI = 3.124;
console.log(PI);

//Boolean
let java = true;
console.log(java);

//type of operator
console.log(typeof true);
console.log(typeof "zaid");
console.log(typeof 23);
console.log(typeof java);
console.log(typeof PI);

//Dynamic typing
java = "YES";
console.log(typeof java);

//undefined
let cars;
console.log(cars);
console.log(typeof cars);

//Arithmetic operator
const presentYear = 2023;
const ageZaid = presentYear - 1996;
const ageSarah = presentYear - 1999;
console.log(ageZaid, ageSarah, 2 ** 3); //2 to the power 3 will be 8

const firstName = "Zaid";
const lastName = "Fayaz";
console.log(firstName + " " + lastName);

//Assignment operator
let x = 10 + 6;
x += 10; // x = x + 10
x++;
x--;
console.log(x);

// Comparison operator
console.log(ageZaid > ageSarah);
console.log(ageZaid >= 26);

//Calculate the age
const fstName = "Zaid";
const occupation = " Web Developer";
const dob = 1996;
const currentYear = 2023;

const details =
  " My name is " +
  fstName +
  " and my age is " +
  (currentYear - dob) +
  " and i'm a " +
  occupation;
console.log(details);
//The above cide seems mess by using multiple quotes and plus operator ...To over come this we can use template literal

const newDetails = `my name is ${fstName} and my age is ${
  currentYear - dob
} band i'm a ${occupation}`;

console.log(newDetails);

//code to check person is eligible for license or not
const age = 10;
if (age >= 18) {
  console.log(" The person is eligble for licence");
} else {
  console.log(
    `The person is not eligble for license, wait another ${18 - age} years`
  );
}
//code for person wad born in 20th or 21ist century
const birthYear = 2000;
let century;
if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);

//type conversion
const year = "1997";
console.log(Number(year), year); //converts string into number
console.log(Number(year) + 20);

console.log(Number("zaid")); //shows output NaN because string is not number
console.log(String(23)); //converts number into string

//type coercion
console.log("i m " + 26 + " years old");
console.log("23" - "5" - 4); // automatically converts string into number

// truthy :other than falsy values are truthy values
// falsy values (0, ', null, undefined, NaN)
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("zaid"));
console.log(Boolean({}));

//loose equality operator (==)
let num = "18";
if (num == 18) console.log("i m a string and still got true booelan");

//strict equality operator (===)
if (num === 18) console.log("i m a string");
else console.log("i m strict, wont allow type coercion");

//code for favourite number
/*onst favrt = Number(prompt("Enter your favourite number"));
if (favrt === 88) console.log("Its my favorite number");
else if (favrt === 18) console.log("Its also my favorite number");
else console.log("i dont like the number");*/
  
//multiple if else blocks
const day = 'saturday';
if ( day === 'monday'){
  console.log("Start the JS Course");
}
else if (day  === 'tuesday'){
  console.log("Study theory");
}
else if ( day === 'wednesday' || day === 'thursady' || day === 'friday'){
  console.log("Practice coding");
}
else if ( day === 'saturday' || day ==='sunday'){
  console.log("Enjoy the weekend");
}
else console.log ('Invalid day');

//Switch case : can rewrite above cide with easy method called weitch case
const days = 'wednesday';
switch(days){   // means days === tuesday
case 'monday' :
  console.log("Start the JS Course");
  break;
case 'tuesday' :
  console.log("Study theory");
  break;
case 'wednesday' :
case 'thursday' :
case 'friday' :
  console.log("Practice coding");
  break;
case 'saturday' :
case 'sunday' :
  console.log("Enjoy the weekend");
  break;
default :
console.log ('Invalid day');
}

//Terinary operator
const personAge=18
const person = personAge >=18 ? console.log('i m adult') : console.log('i m child  ');
