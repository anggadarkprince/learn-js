var animals = ['cat', 'dog', 'cow', 'tiger', 'bird'];
var cars = ['ford', 'honda', 'toyota', 'chevy'];

// for loop
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === 'cow') {
        continue; // skip the rest statement, but continue next iteration
    }
    console.log(animals[i]);
    if (animals[i] === 'tiger') {
        break; // escape from loop
    }
}

// while loop
var i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}

// do while
var i = 0;
do {
    console.log(animals[i]);
    i++;
} while (i < animals.length);

// for each, only for array, node list that implement iterable, not collection - use Array.from(collections) to convert to array
cars.forEach(function (car, index, cars) {
    console.log(car, index, cars);
});

// map
var manufactures = cars.map(function (car) {
    if (car == 'honda' || car == 'toyota') {
        return car + ' (japan)';
    }
    return car + ' (america or europe)';
});
console.log(manufactures);


// for in object
var user = {
    firstName: 'Angga',
    lastName: 'Ari',
    age: 25
}
for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}