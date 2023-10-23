let chooseOperation = prompt('add / sub / mult / div');
let num1 = +prompt('Write first number?');
let num2 = +prompt('Write second number?');

let sum = num1 + num2;
let minus = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;

alert(` Result:
    Sum: ${sum}
    Minus: ${minus}
    Multiply: ${multiply}
    Divide: ${divide}
`);