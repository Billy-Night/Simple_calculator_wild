
//let firstValue = prompt("Type the first value:");
//let operator = prompt("Choice your sign:");
//let secondValue = prompt("Type the second value:");

//console.log(firstValue, operator, secondValue);
//console.log(firstValue + secondValue);
//the print is 22 because it is a string and it prints "2" + "2"
//let result = parseInt(firstValue + secondValue);
//console.log(parseInt(result));
//the result is a number but it has just turned the string into a number
//console.log(parseInt(firstValue + secondValue));


let firstValue = parseInt(prompt("Type the first value:"));
let operator = prompt("Choice your sign:");
let secondValue = parseInt(prompt("Type the second value:"));

//let result = firstValue + secondValue;

//console.log(result);

    if (operator === "+") {
        console.log(firstValue + secondValue);
    } else {
         console.log(firstValue - secondValue);
    }