// Destructuring assignment

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

// Object destructuring
const person = {
    name: 'John',
    age: 34,
    city: 'Gresik',
    gender: 'Male',
    sayHello: function () {
        console.log('Hello');
    }
}

// old es5
const myName = person.name;
const myAge = person.age;

// new es6 destructuring
const {name, age, city, sayHello} = person;
console.log(name, age, city);

sayHello();