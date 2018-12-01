// keyword "this" is a execution context (the value is depend on where or what it executed by)
// 1. "this" outside declare object
let windowOrEmptyObj = this;
// window object if it runs in browser or empty object in node js
console.log(windowOrEmptyObj);

function greet() {
    // window object if it runs in browser or global object in node js
    //console.log(this);
    this.greeting = 'Hello'; // define variable in global object (window / obj{} )
    greeting = 'Morning'; // bad practice to trigger accidentally declare global variable
    // with keyword "use strict" we could prevent declaring variable like above because this will be "undefined"
}

greet();
console.log(greeting); // bad practice but it's possible

// 2. object implicit binding
var person = {
    firstName: 'Angga',
    sayHi: function () {
        // "this" has not value until the function is executed,
        // when executed is referred to closest object: person
        return 'Hi ' + this.firstName // Hi Angga
    },
    determineContext: function () {
        return this === person; // true
    },
    context: this, // refer to "window" object because is immediately must defined (no function) when person is declared
    dog: {
        bark: 'Gug gug..',
        sayHello: function () {
            return this.firstName;
        },
        shout: function () {
            // "this" refer to closest object when the function is executed: dog
            return this.bark; // Gug gug..
        },
        determineContext: function () {
            return this === person; // false
        },
    }
};
console.log(person.sayHi());
console.log(person.dog.shout());
console.log(person.context);

// 3. object explicit binding
// use CALL (invoked right away)
console.log(person.dog.sayHello.call(person));
console.log(person.dog.determineContext.call(person));

var colt = {
    firstName: 'Colt',
    sayHi: function () {
        return 'Hi ' + this.firstName
    }
}

var elie = {
    firstName: 'Elie'
}

function shout() {
    return 'Hi ' + this.firstName
}

console.log(colt.sayHi());
console.log(colt.sayHi.call(elie)); // borrow the object from elie
console.log(shout.call(colt));
console.log(shout.call(elie));

// USE APPLY (invoked right away)
// similar with call but different whe we use parameter, we put tha value of this in front of parameters,
// in apply we put parameter into array
function addNumbers(a, b, c, d) {
    return this.firstName + ' just calculated ' + (a + b + c + d);
}

console.log(shout.apply(elie));
console.log(addNumbers.call(elie, 1, 2, 3, 4));
console.log(addNumbers.apply(elie, [1, 2, 3, 4])); // spread array to variables

// USE BIND
// works like call but bind return a function with the context of 'this' bound already
var coltCalc = addNumbers.bind(colt, 1, 2, 3, 4); // function() {}...
console.log(coltCalc());
var elieCalc = addNumbers.bind(elie, 1, 2); // function() {}...
console.log(elieCalc(3, 4));

var yo = {
    firstName: 'Angga',
    sayHi: function () {
        setTimeout(function () {
            console.log('Hi ' + this.firstName);
        }.bind(this), 2000);
    }
}
yo.sayHi();