const num1 = 100;
const num2 = 50;
let val1;

// simple math with number
val1 = num1 + num2;
console.log(val1);

// NaN, all value except number or anything that can't be parsed to Number
console.log(NaN);
console.log(Number('this is not a number'));
console.log(Number(['this', 'is', 'not', 'a', 'number']));

// Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.random()); // random 0 - 1
console.log(Math.round(2.4));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.7));
console.log(Math.abs(-4));
console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));
console.log(Math.min(-2, 3, 1, 4, 6));
console.log(Math.max(-2, 3, 1, 4, 6));