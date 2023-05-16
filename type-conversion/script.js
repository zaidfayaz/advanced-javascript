//String type conversion
document.write("String type conversion:");
document.write("<br>");
let a = 3 + 4;
document.write(typeof a);   //it is a number here
document.write("<br>");
document.write(a);
document.write("<br>");

let type_a = String(a);
document.write(typeof type_a); // it wil be converted into string here
document.write("<br>");
document.write(type_a);
document.write("<br>");
document.write("<br>");


//Number type conversion
document.write("Number type conversion:");
document.write("<br>");
let b = "3" + "4";
document.write(typeof b);   //it is a string here
document.write("<br>");
document.write(b);
document.write("<br>");

let type_b = Number(b);
document.write(typeof type_b); // it wil be converted into number here
document.write("<br>");
document.write(type_b);
document.write("<br>");
document.write("<br>");



//NAN example 
document.write("NaN Example");
document.write("<br>");
let c = 3 * "yes";
document.write(typeof c);   //it is a string here
document.write("<br>");
document.write(c);
document.write("<br>");
document.write("<br>");

//Boolean type conversion
document.write("Boolean type conversion");
document.write("<br>");
let d = "true";
document.write(typeof d);   //it is a string here
document.write("<br>");
document.write(d);
document.write("<br>");

let type_d = Boolean(d);
document.write(typeof type_d); // it wil be converted into number here
document.write("<br>");
document.write(type_d);




