// rest operator used to populate the rest of value that passing in argument and wrap it into array
function printRest(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c); // contain array of all rest argument
}

// replace arguments keyword
function sumAll(...numbers) {
    let total = 0;
    for (num of numbers) {
        total += num;
    }
    return total;
}

printRest(1, 2, 3, 4, 5);
console.log(sumAll(1, 2, 3, 4, 5));

// combine with destructuring, skip the third
var combined = [1, 2, 3, 4, 5, 6];
var [one, two, , ...rest] = combined;
console.log(one, two, rest);