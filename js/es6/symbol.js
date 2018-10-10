// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1);
console.log(sym2);

console.log(Symbol('123') === Symbol('123'));

const KEY1 = Symbol();
const KEY2 = Symbol('key2');

const myObj = {};
myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj);

// Symbol are not enumerable in for...in
for(let i in myObj) {
    console.log(myObj[i]);
}

// Symbol are ignored by JSON.stringify()
console.log(JSON.stringify(myObj));