// var, let, const
var hello = 'Hello World';
console.log(hello);

hello = 'Hello universe';
console.log(hello);

// init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// cannot start with number
var _number = 2342;
var $fractal = 3.4;

console.log(_number + $fractal);

// multi word vars
var firstName = 'Angga';
var lastName = 'Ari'; // camel case
var first_name = 'Wijaya'; // snake case
var FirstName = 'Tom'; // pascal case or studly caps

// const and let it's new feature in ES2015 / ES6, see js folder
// let (similar to var but cannot redeclare in the same scope, see js/scope.js)
let title = 'John Doe';
console.log(title);

// const: cannot be reassign, but in array or object we can change the data inside
const myName = 'John';
// myName = 'Angga'; // this does not work
// const blink; // does not work also, we need assign right away

const person = {
    name: 'Angga',
    age: 25
}
person.name = 'Rio'; // this is allowed, but we cannot change the person itself

// person = {name: 'Rio'}; // this is not allowed

console.log(person);


// value check
var undefinedVar;
var nullVar = null;
var nanVar = NaN;
var emptyVar = '';
var falseVar = false;
var zeroVar = 0;
var zeroStringVar = '0';
var signedVar = -3;
var nullStringVar = 'null';
var falseStringVar = 'false';
var anyStringVar = 'hello';

if (undefinedVar) console.log(undefinedVar); // initialized but not assigned yet: undefined
if (nullVar) console.log(nullVar);
if (nanVar) console.log(nanVar);
if (emptyVar) console.log(emptyVar);
if (falseVar) console.log(falseVar);
if (zeroVar) console.log(zeroVar);
if (zeroStringVar) console.log(zeroStringVar); // will be printed
if (signedVar) console.log(signedVar); // will be printed
if (nullStringVar) console.log(nullStringVar); // will be printed
if (falseStringVar) console.log(falseStringVar); // will be printed
if (anyStringVar) console.log(anyStringVar); // will be printed
// if(nothingVar) console.log(nothingVar); // will throw error ReferenceError
if (typeof nothingVar !== 'undefined') console.log(nothingVar); // check if variable exist