// convert other data types into arrays (from array like object)
const set = new Set();
set.add(100);
set.add('a string');
set.add({name: 'Angga'});

let arr = Array.from(set);
console.log(arr);

const map = new Map();
map.set('a', 'Value of key 1');
map.set('b', 'Value of key 2');
let arr2 = Array.from(map);
console.log(arr2);