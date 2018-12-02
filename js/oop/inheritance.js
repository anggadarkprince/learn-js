// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1);

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    // we inherit the constructor because we don't want if one of object change the parent property
    // the all inherited objects would affected as well, so each child has their own property not pointing to parent
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype); // or
// Customer.prototype = new Person(); // but add additional unnecessary properties

// Make customer.prototype return customer, recover the original constructor
Customer.prototype.constructor = Customer;

// create customer
const customer1 = new Customer('Tom', 'Smith', '552-234-23', 'standard');
console.log(customer1);
console.log(customer1.greeting());

// Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
}
console.log(customer1.greeting());
