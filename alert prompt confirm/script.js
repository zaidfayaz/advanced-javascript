//Alert Function
alert("WELCOME ZAID FAYAZ");

//Prompt Function
let age = prompt("Enter Your age");
if (age != null) {
    document.write(`Your Age is ${age}`);
    document.write("<br>");
}
else {
    document.write("Age field is blank")
    document.write("<br>");
}
//Confirm Function
let response = confirm("Are you sure, you want to delete?");
if (response) {
    document.write(`Deleted`);
}
else {
    document.write("Not Deleted")
}

