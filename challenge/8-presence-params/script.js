/* CHALLENGE 8 - Check presence of the function parameters

Throw Error when function square() is called
without arguments.

Create new function and use it as default parameter.
*/

"use strict";

// passing this function as parameter, we do not need to check if `a` is undefined.
function missingArgs() {
    throw Error('Function square requires an argument!');
}

function square(a) {
    if (typeof a === 'undefined') {
        throw Error('Function square requires an argument!');
    }
    console.log(a * a);
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires
// an argument!
