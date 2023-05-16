let counter = 1;

//while loop
while (counter <= 10) {
    document.write("Zaid Fayaz");
    counter++;
    document.write(" ");
}

//Printing sum of even numbers
let number = 1;
let sum = 0;
while (number <= 100) {
    if (number % 2 == 0) {
        sum = sum + number;
    }
    number++;
}
document.write("<br>");
document.write("The sum of ist 100 even numbers are: " + sum);
document.write("<br>");

//do-while loop: it executes the code atleast once becoz it checks the condition at the end
do {
    document.write("Zaid Fayaz");
    counter++;
    document.write(" ");
} while (counter <= 10)
document.write("<br>");                               //output-> zaid fayaz because in the while loop above counter has become zero so do while loop will execute the code only one time

// for loop
for (let num = 1; num <= 5; num++) {
    document.write("Hello Zaid" + " ");
}