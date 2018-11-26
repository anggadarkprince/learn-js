/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
};

// we can a value in prototype
Object.prototype.new = 500;

// Write code here
function sumObjectValues(nums) {
    let total = 0;

    /*
    for (let key in nums) {
        // make sure data from Object.prototype.new above not included
        if (nums.hasOwnProperty(key)) {
            if (!isNaN(nums[key])) { // typeof nums[key] === 'number'
                total += nums[key];
            }
        }
    }
    */

    for (let [key, value] of Object.entries(nums)) {
        if (!isNaN(value)) {
            total += value;
        }
    }

    return total;
}

console.log(sumObjectValues(nums));
//42
