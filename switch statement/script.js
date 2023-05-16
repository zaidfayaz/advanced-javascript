let input = "n";
switch (input) {
    case 1:
        document.write("Continue");
        break;
    case "y":
        document.write("Continue");
        break;
    case "yes": 
        ocument.write("Continue");
        break;
    case 0:
        document.write("Continue");
        break;
    case "n":
        document.write("End");
        break;
    case 1:
        document.write("End");
        break;
    case "no":
        document.write("End");
        break;
    default:
        document.write("Invalid Input");
}

//we can re write this as shown below becoz we have the same outpur for multilpe cases
switch (input) {
    case 1:
    case "y":
    case "yes": 
        ocument.write("Continue");
        break;
    case 0:
    case "n":
    case 1:
        document.write("End");
        break;
    case "no":
        document.write("End");
}
    