// arrow function is short-hand to write a function but do not get their own this keyword
const sayHello = function () {
    console.log('Hello');
}
sayHello();

// Remove function keyword
const sayHello2 = () => {
    console.log('Hello');
}
sayHello2();

// Do not need braces
const sayHello3 = () => console.log('Hello');
sayHello3();

// One line return with parameter
const sayMessage = (name, title) => 'Hello, ' + title + ' ' + name;
console.log(sayMessage('Angga', 'Mr'));

// Escape return object value, single parameter does not need parenthesis
const sayMessage2 = name => ({'message ': 'Hello' + name});
console.log(sayMessage2('Angga'));

// Arrow in callback
const users = ['Angga', 'Ari', 'Wijaya'];
const nameLengths = users.map(name => name.length);
console.log(nameLengths);


// arrow function do not have keyword this and arguments
var yo = {
    firstName: 'Angga',
    // we cannot replace this function with arrow function
    // because the function latter will refer to window object and return undefined
    sayHi: function () {
        setTimeout(() => {
            // keyword this referer to parent (enclosing context) because it's not return their own context
            // we do not bind() parent object to have access inside this function
            console.log('Hi ' + this.firstName);
        }, 2000);
    }
}
yo.sayHi();