let str = "Zaid Fayaz";
let greet = `Welcome ${str}`; //literal template
document.write(greet);
document.write("<br>");
document.write(greet.length); //gives the length of the string
document.write("<br>");
document.write(greet[8]); //Gives the particular letter from the string
document.write("<br>");

let str2 = "Shawl";
document.write(str + " " + str2); //concatenation means it will join the two strings
document.write("<br>");

//String Functions
let str3 = "Hello ";
let str4 = "World";
let str5 = str3.concat(str4); //this function also performs concatenation
document.write(str5);
document.write("<br>");

let str6 = "welcome to my world";
let str7 = str6.substr(14, 5); //substring:gives the part of the string ist parameter is start and other is length of substr u want
document.write(str7);
document.write("<br>");
let str8 = str6.substring(14, 19); //substring:gives the part of the string ist parameter is start and other is end position of substr u want
document.write(str8);
document.write("<br>");

let position = str6.indexOf("my"); //gives the index of the string
document.write(position);
document.write("<br>");
let position1 = str6.lastIndexOf("world"); //gives the index of the string starting from the last
document.write(position1);
document.write("<br>");

let str9="  Zaid    Fayaz   "
document.write(str9);
document.write("<br>");
let trimmed_str=str9.trim(); //removes spaces from both start and end
document.write(trimmed_str);
document.write("<br>");

let trimmed_str1=str9.trimStart();  //removes spaces from start only
document.write(trimmed_str1);
document.write("<br>");

let trimmed_str2=str9.trimEnd();  //removes spaces from end only
document.write(trimmed_str2);
document.write("<br>");

document.write(str9.toUpperCase())  //converts string into capital letters
document.write("<br>");
document.write(str9.toLowerCase())   //converts string into small letters
document.write("<br>");

let str10="Welcome to the world";
document.write(str10);
document.write("<br>");
let str11= str10.replace("world", "universe");   //replaces the substring user want to change with
document.write(str11);
document.write("<br>");
let str12=str10.includes("zaid");  //returns true or false : checks the word is present in string or not
document.write(str12);


