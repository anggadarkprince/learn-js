// cannot redeclare a const variable but allowed to change inside array or object.

const greeting = 'Hello';
//greeting = 'Morning..';

const person = {
    name: 'Angga',
    age: 25
};
person.name = 'Rio';

const colors = ['red', 'black', 'white'];
colors[0] = 'purple';