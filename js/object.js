// object definitions
var user = {
    firstName: 'Angga',
    lastName: 'Ari',
    age: 25,
    location: 'Gresik, Indonesia',
    lastUpdate: new Date(),
    'primary-email': 'angga@mail.com',
    hobbies: ['music', 'sport'],
    address: {
        city: 'Gresik',
        country: 'Indonesia'
    },
    location: function () {
        return this.address.city + ', ' + this.address.country;
    },
    getBirthYear: function () {
        return '1992-05-25'
    }
}

console.log(user);
console.log(user.firstName);
console.log(user['primary-email']); // alternative access value, and used when the key contain space or dash
console.log(user.hobbies[0]);
console.log(user.address.city, user.address['country']);
console.log(user.location());
console.log(user.getBirthYear());

// check a key exist
if (user.hasOwnProperty('firstName')) {
    console.log('has property firstName that contain value', user.firstName);
}

// wrap inside array
var people = [
    {name: 'Angga', age: 20},
    {name: 'Ari', age: 30},
    {name: 'Wijaya', age: 40},
];
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
}