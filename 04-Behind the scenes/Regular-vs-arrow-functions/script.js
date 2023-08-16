"use strict";
const person = {
  firstName: "Zaid",
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.year <= 1996); //shows error coz inside the regular function call this keyword is undefined
    };

    //isMillenial();
  },

  //solution 1  to above problem with this keyword

  //     calcAge : function(){
  //         console.log(this);
  //         console.log(2023 - this.year);
  //         const self = this; //usint=g the varaible outside is the solution and its pre es6 solution

  //         const isMillenial = function(){
  //             console.log(self.year >= 1981 && self. yesr <= 1996);
  //         }
  //     isMillenial(); //shows error coz inside the regular function call this keyword is undefined
  // },

  //solution 2

  //   calcAge: function () {
  //     console.log(this);
  //     console.log(2023 - this.year);
  //     const self = this; //usint=g the varaible outside is the solution and its pre es6 solution
  //     //solution is to us the arrow method cox it uses its parents scope this keyword
  //     const isMillenial = () => {
  //       console.log(self.year >= 1981 && self.yesr <= 1996);
  //     };
  //     isMillenial(); //shows error coz inside the regular function call this keyword is undefined
  //   },
  greet: () => console.log(`hey ${this.firstname}`),
};
person.greet(); //shows undefined coz arrow doenst have its own this keyword its uses its surroundings i.e global object
person.calcAge();

// arguments keywords : only available for regular exp
const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExp(2, 3);
addExp(2, 3, 5, 6);
var addArrow = (a, b) => {
  console.log(arguments); //shows error argumetns not defined
  return a + b;
};
addArrow(2, 4);
