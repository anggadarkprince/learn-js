// SETS - Store unique values of any type
const set1 = new Set();
set1.add(100);
set1.add('a string');
set1.add({name: 'Angga'});
set1.add(true);
set1.add(100); // did not added again
console.log(set1);
console.log(set1.has({name: 'Angga'})); // reference object return false

const set2 = new Set([1, true, 'hello']);
console.log(set2);
console.log(set2.size);
console.log(set2.has('hello'));
console.log(set2.has(50 + 50));

// loop value
set2.forEach((value) => {
    console.log(value);
});

// because set implement iterable we can loop with for-of
for (let val of set2) {
    console.log(val);
}

// convert to array
console.log(Array.from(set2));