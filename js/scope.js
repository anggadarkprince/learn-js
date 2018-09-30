// global scope
var a = 'a';
let b = 'b';
const c = 'c';

// function scope
function changeValue() {
    var a = 1; // NOT replace the global scope
    let b = 2; // NOT replace the global scope
    const c = 3;
    console.log('Function scope', a, b, c);
}

// block scope
if (true) {
    var a = 5; // replace global scope
    let b = 6; // NOT replace global scope
    const c = 7;
    console.log('Block scope', a, b, c);
}

changeValue();

console.log('Global scope', a, b, c);

// global scope replace the `a` value
for (var a = 0; a <= 2; a++) {
    console.log(a);
}

console.log(a);