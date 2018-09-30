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

// search value
var bellow50 = numbers.find(function (num) {
    return num < 50;
});
console.log(numbers, 'first value bellow 50 is', bellow50); // return undefined if not found