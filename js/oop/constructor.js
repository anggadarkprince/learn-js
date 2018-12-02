// constructor ES5
function User(name, birthday) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return name; // it won't returned in "new" keyword
}

const user = User('Rey', '2000-10-23'); // will return undefined if the function doesn't return anything
// console.log(user.name); // this will not work, because we try to access name on undefined variable
console.log(user); // if the function return something just print it out like general function

// the "new" keyword return empty object of the function itself then set the the property
// into object called "__proto__" and add line "return this" to the end of function
const angga = new User('Ari', '1992-05-26');
console.log(angga);
angga.name = 'Angga';

const john = new User('John', '1987-10-04');
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


// multiple constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    // we borrow the Car constructor and replace the "this" context
    Car.call(this, make, model, year); // or
    Car.apply(this, [make, model, year]);
    Car.apply(this, arguments);
    this.numWheels = 2;
}

const motor = new Motorcycle('Honda', 'CB150R', 2018);
console.log(motor);