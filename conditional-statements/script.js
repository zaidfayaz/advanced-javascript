let age = 18;
let hasVoterCard = 'No';

//if statement
if (age >= 18) {
    alert("You can vote!");
}

//if-esle statement
if (age >= 18 && hasVoterCard == "Yes") {
    alert("You can Vote");

}
else {
    alert("You cannot vote");

}

//if else if
let age1 = 18;
let hasVoterCard1 = "No"
if (age1 >= 18 && hasVoterCard1 == "Yes") {
    alert("You can Vote");
} else if (age1 >= 18 && hasVoterCard1 == "No") {
    alert("Get your voter card");

} else {
    alert("You Cannot Vote");
}

//Nested if else
if (age >= 18) {
    if (hasVoterCard == "yes") {
        alert("You can vote");

    }
    else {
        alert("Get your voter card");
    }
}
else {
    alert("You cannot Vote");
}

// Terinary operator
let isLoggedin = 1;
let option = isLoggedin == 1 ? "LOGIN" : "LOGOUT";
document.write(option);

//Nullish coalescing operator (??)
let user;
alert(user);    //displays undefined
// to avoid undefined  we can use Nullish coalescing operator (??)
alert(user ?? "Guest user");