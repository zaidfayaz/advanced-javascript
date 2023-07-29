//function :used when we have repeated tasks
function table(num){                        //function declaration: this wont be written again and again when we ahave to print table of any number
    for(let i=1; i<=10;i++){
        document.write(`${num} x ${i} = ${num*i}`)
        document.write("<br>");
    }
}

table(6);   //function call ; here we can give the number to print the table