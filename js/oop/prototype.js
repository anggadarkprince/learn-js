// Object.prototype
// Person.prototype

function Person(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.greeting = function () {
        return 'Hello' + this.firstName;
    }
}

// Calculate age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const marry = new Person('Marry', 'Jane', '1992-05-26');
console.log(marry.getFullName(), marry.calculateAge());

marry.getsMarried('Smith');
console.log(marry.getFullName());

console.log(marry.hasOwnProperty('firstName')); // true
console.log(marry.hasOwnProperty('getFullName')); // false
console.log(marry.hasOwnProperty('greeting')); // true


// Object create method
const personPrototypes = {
    greeting: function () {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

const anna = Object.create(personPrototypes);
anna.firstName = 'Anna';
anna.lastName = 'Williams';
anna.age = 34;

const ari = Object.create(personPrototypes);
ari.firstName = 'Angga';
ari.lastName = 'ari';
ari.age = 'ari';

console.log(anna.greeting(), ari.greeting());