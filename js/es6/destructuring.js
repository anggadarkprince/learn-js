// Destructuring assignment (extracting value into another variables)

let a, b;
[a, b] = [100, 200];

// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(a, b, c);
console.log(rest);

({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});
console.log(a, b, c, rest);

// Array destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
    return ['John', 'Beth', 'Mike'];
}

let user1, user2, user3;
[user1, user2, user3] = getPeople();
console.log(user1, user2, user3);

// swapping value with array destructuring
let largeNumber = 10;
let smallNumber = 2;
let [max, min] = [smallNumber, largeNumber];
console.log(max, min);

// Object destructuring
const person = {
    name: 'John',
    age: 34,
    city: 'Gresik',
    gender: 'Male',
    contact: {
        phone: '0102-523',
        mobile: '+620002142342',
    },
    sayHello: function () {
        console.log('Hello');
    }
}

// extract into variables with destructuring (default value can be added)
const {name = 'no name', age, city, sayHello} = person;
console.log(name, age, city);

sayHello();

// into another object with different name
const {name: yourName, age: yourAge} = person;
console.log(yourName, yourAge);

// accessing nested object, add default value if not exist
let {contact: {phone: p, mobile: m, fax: f = '0000'}} = person;
console.log({p, m, f});

// destructuring as parameter and set default value inside object
// add {first: 'angga', last: 'ari'} if name parameter is not set in object
function createPerson({name = {first: 'angga', last: 'ari'}, isManager = false} = {}) {
    return [name.first, name.last, isManager];
}

console.log(createPerson({isManager: true}));