/* CHALLENGE 3 - Let

Change code to match output.
*/

"use strict";

var i = 10; // global variable scope

for (let i = 0; i < 5; i++) { // change to let because let is local scope variable
  // some stuff
  console.log(i);
}

console.log(i);
// BEFORE: 5
// AFTER: 10
