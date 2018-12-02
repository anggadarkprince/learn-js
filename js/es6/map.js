// MAPS = key-value pairs - can use any type as a key or value
const map1 = new Map();

const key1 = 'some string';
const key2 = {};
const key3 = function () {
};

// Set map values by key
map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key 2');
map1.set(key3, 'Value of key 3');

console.log(map1);
console.log(map1.get(key2));
console.log(map1.size);

// Iterating through map
for (let [key, value] of map1) {
    console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map1.keys()) {
    console.log(map1.get(key));
}

// because map implement iterable we can loop with for-of
for (let value of map1.values()) {
    console.log(value);
}

// Loop with foreach
map1.forEach(function (value, key, map) {
    console.log(value);
});

// convert to array
const keyValArr = Array.from(map1.values());
console.log(keyValArr);