const id = 100;
const truck = 'Container';

// equal to
if (id == 100) {
    console.log('The id is 100');
}
if (id == '100') {
    console.log('The id is 100');
}
// equal to value and type
if (id === '100') {
    console.log('100 number type');
} else {
    console.log('100 another type');
}

// another comparator such as !=, >, <, >=, <=, &&, ||
if (id > 50) {
    console.log('The id larger than 100');
} else {
    console.log('Not 100');
}

// if else
if (truck == 'container') {
    console.log(truck, 'is container');
} else if (truck == 'containeR') {
    console.log(truck, 'is containeR');
} else {
    console.log(truck, 'is not match with any value');
}

// check if variable is defined or initialized
if (typeof nothing == 'undefined') {
    console.log('`nothing` variable is undefined');
}

// nested conditional statement
var hasEar = true;
var totalLegs = 4;

if (hasEar) {
    console.log('mammal');
    if (totalLegs > 2) {
        console.log(`with ${totalLegs} legs`);
    } else {
        console.log('maybe a kangaroos');
    }
} else {
    console.log('non mammal');
}

// multi conditions
var name = 'Angga';
var age = 4;
if (age > 0 && age < 12) {
    console.log(`${name} is a child`);
} else if (age >= 12 && age < 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// ternary operator
var isAdult = age > 19 ? true : false;
var isTeenager = (age <= 19);
console.log('is adult', isAdult);
console.log('is teenager', isTeenager);

// switch control
var color = 'red';
var code = 404;
switch (color) {
    case 'red':
        console.log('danger color');
        break; // break needed as bracket, removing the break will ignore value check bellow
    case 'green':
    case 'blue':
        console.log('success color');
        break;
    case 'yellow':
        console.log('warning color');
        if (code == 404) {
            console.log('page not found code');
        } else {
            console.log('unknown warning code');
        }
        break;
    default:
        console.log('another sign color');
}