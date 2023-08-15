'use strict'
//global function : coz top level
function calcAge (birthYear){
    const age = 2023 - birthYear;
    console.log(firstName)  //its is accesible coz it has a global scope

    function printAge(){
        const output = `you are ${age}, born in ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996){  //block scope
            const str = ` oh you are the millenial , ${firstName}`;
            console.log(str);
            
            //block scoped function
            function add (a,b){
                return a + b;
            }
             
        }
       // console.log(str); //referenvce error :coz of block scope
       // add(2, 3) // reference error coz function is block scoped and shows error only in strict mode
    }
    printAge();
    return age;
}
const firstName = 'Zaid'  //global variable
console.log(calcAge(1996));
// console.log(age);   //reference error boz it is not acccessible outside its scope
// printAge()    //reference error boz it is not acccessible outside its scope