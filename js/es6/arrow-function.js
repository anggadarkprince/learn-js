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