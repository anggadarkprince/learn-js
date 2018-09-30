// primitive data types: string, number, boolean, null, undefined, symbols (es6)

// string
const fruit = 'Banana';
console.log(typeof fruit);

// number
const ages = 25;
console.log(typeof ages);

// boolean
const hasKids = true;
console.log(typeof hasKids);

// null
const car = null;
console.log(typeof car); // you will get object, but it's kind of javascript bug, it should be primitive type.

// undefined
let test;
console.log(typeof test);

// symbol
const sym = Symbol();
console.log(typeof sym);


// reference data types: arrays, object literals, functions, dates, anything else

// array
const hobbies = ['movies', 'music', 'sport'];
console.log(typeof hobbies);

// object
const address = {
    city: 'Gresik',
    country: 'Indonesia'
}
console.log(typeof address);

// date
var today = new Date();
console.log(typeof today);
