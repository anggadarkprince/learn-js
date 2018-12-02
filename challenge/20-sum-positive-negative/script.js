/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
function sumPlusMinus(numbers) {
    /*
    let plus = 0;
    let minus = 0;
    numbers.forEach(function (number) {
        if (number < 0) {
            minus += number;
        } else {
            plus += number;
        }
    });
    return {plus, minus};
    */

    return numbers.reduce((acc, val) => {
        return {
            plus: val >= 0 ? acc.plus += val : acc.plus,
            minus: val < 0 ? acc.minus += val : acc.minus
        }
    }, {plus: 0, minus: 0});
}

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
