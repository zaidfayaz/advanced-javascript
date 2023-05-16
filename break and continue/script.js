//break : the break will get of from the block and will not execute check further conditions 
for (let counter = 1; counter <= 10; counter++) {
    if (counter == 5) {
        break;
    }
    document.write(counter);
    document.write("<br>");
}
document.write("I exited because of break");
document.write("<br>");

// continue:for a particular situation which we dont want to execute
for (let counter = 1; counter <= 10; counter++) {
    if (counter == 5) {         //5 will not be printed it will skip that situation
        continue;
    }
    document.write(counter);
    document.write("<br>");
}

// nested for loop

for (let i = 0; i <= 10; i++) {
    document.write(i);
    document.write("<br>");
    for (let k = 1; k <= 2; k++) {
        document.write("Zaid Fayaz");
        document.write("<br>");
    }
}


