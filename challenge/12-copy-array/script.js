/* CHALLENGE 12 - Copy Array

Create copy of the a array.
*/

"use strict";

var a = [1, 2, 3];

var b;

//Copy array here
//b = a.slice(0);
b = [...a];
// if there is nested array use another technique such as json parse - json stringify

b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
