/* CHALLENGE 4 - Hoisting

Change code to fix first error after the line 15.
Error after the line 20 should still be generated.
*/

"use strict";

var a = 5,
    b = 10;

if (b > a) {
    let c = 2; // declare above before expression
    c = a + b + c;
    //var c = 2; // this prevent c above produce error but the value is 2
    //let c = 2; // hoisted, makes c ReferenceError
    console.log(c);
    // BEFORE: Uncaught ReferenceError: c is not defined
    // AFTER: 17
}

console.log(c);
// Uncaught ReferenceError: c is not defined
