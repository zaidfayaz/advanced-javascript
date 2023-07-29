// array operations
let arr = [
  "Urdu",
  "English",
  "Computer",
  "Physics",
  "Bio",
  "Math",
  "Chemistry",
];
console.log(arr); //Prints array
console.log(arr.length); //gives the length of the array

console.log(arr.push("Accounts")); //push: adds the elemment at the end of the array
console.log(arr);

console.log(arr.unshift("IP")); //unshift: adds element at the start of the array
console.log(arr);

console.log(arr.pop()); //pop: deletes the element from the end of array
console.log(arr);

console.log(arr.shift()); //shift: deletes the element from the start of array
console.log(arr);

console.log(arr.splice(4, 1)); //splice: deletes at particular position here 4 is position of element and 1 is no if elements u want to delete after 4th position
console.log(arr);

// arr=[];                                 //makes the array empty
console.log((arr.length = 0)); //another way to make array empty
console.log(arr);

let text = "Welcome to the universe";
console.log(Array.isArray(text)); //Array.isArray: checks the data type is array or varaible

let cars = ["Audi", "Lamborghini", "Bugatti"];
let cars2 = ["Ferrari", "Mercedes", "BMW"];
console.log(cars.concat(cars2)); //concat: joins the two arrays

let text1 = "Weclcome to the world";
let test = text1.split(" ");
console.log(test); //returns string into array
console.log(typeof test); //

let pets = ["dogs", "cats", "tiger"];
console.log(pets.join("-")); //join: returns array into string

//Multidimensional array : means array inside array
let carsWithPrices=[
    ["Lamborghini", "234000000$"],
    ["Bugatti","25000000$"],
    ["BMW", "23000$"],
    ["Audi", "30000$"]
];
 //Accessing the elements in the MD array
//  let fetch= carsWithPrices[1][1];
 console.log(carsWithPrices[1][0]);   //it will return the price of the bugatti
 console.log(carsWithPrices[0]);   //it will return full array




 //Accessing the array with loops
 let arr1=["zaid","umaid", "salman","muzamil","faizan","kaiser"];
  for(let i=0;i<arr1.length;i++){
    console.log(`Elements ${arr1[i]} is at index of ${i}`)
  }

  //anotther way is to use for each loop
  arr1.forEach(myarr);
  function myarr(x){
    console.log(x);
  }