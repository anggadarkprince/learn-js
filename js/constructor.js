// constructor ES5
function Person(name, birthday) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const angga = new Person('Ari', '1992-05-26');
angga.name = 'Angga';

const john = new Person('John', '1987-10-04');
john.name = 'John Doe';

console.log(angga.name, angga.calculateAge());


// Built in constructor
// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
name2.foo = 'bar';

console.log(name1, name2);
console.log(typeof name2);

// Number
const num = new Number(5);
console.log(num);

// Boolean
const bool2 = new Boolean(true);
console.log(bool2);

// Function
const getSum = new Function('x', 'y', 'return x + y');
console.log(getSum(1, 3));

// Object
const john2 = new Object({name: 'John'});
console.log(john2);

// Array
const arr1 = new Array(1, 2, 3, 4, 5);
console.log(arr1);

// Regex
const re = new RegExp('\\w+');
console.log(re);
