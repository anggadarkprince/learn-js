// array definitions
var numbers = [5, 7, 3, 23, 456, 78];
var fruits = new Array('Banana', 'Apple', 'Orange', 'Melon', 'Grape');
var mix = new Array('String', 24, true, null, undefined, NaN, {a: 1, b: 2}, new Date());

console.log(numbers);
console.log(fruits);
console.log(mix);

// assignment
numbers[0] = 2;
numbers[numbers.length - 1] = 342;
var arrayValue = numbers[3];
console.log(arrayValue);

// array methods, and mutating array
console.log(numbers.length);
console.log(Array.isArray(numbers));
numbers.push(22); // add to end
numbers.unshift(8); // add to front
numbers.pop(); // take out last element in array
numbers.shift(); // take out first element in array
console.log(numbers);
numbers.splice(3, 2); // remove element in position with total items that  to be deleted
console.log(numbers);
console.log(numbers.reverse()); // reverse element order element
console.log(numbers.concat(fruits)); // merge array
console.log(fruits.sort());
var descNumbers = numbers.sort(function (a, b) {
    return b - a;
});
console.log(descNumbers);

// search value by callback function condition
var bellow50 = numbers.find(function (num) {
    return num < 50;
});
console.log(numbers, 'first value bellow 50 is', bellow50); // return undefined if not found

// some function
var array = [1, 2, 3, 4, 5];
var even = function(element) {
    return element % 2 === 0;
};
// expected output at least one of element is true: true
console.log(array.some(even));


// Every check is every single element of array meet condition (all return true)
// all elements are greater than 4
const greaterFour = array.every(function (num) {
    return num > 4
});
console.log(greaterFour); // output: false

// all elements are less than 10
const lessTen = array.every(function (num) {
    return num < 10;
});
console.log(lessTen); // output: true

// convert to iterable object
const name = 'angga';
const nameArray = Array.from(name);
//const lisArray = Array.from(document.querySelectorAll('li'));
console.log(nameArray);

// populate parameter into array
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]
