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
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer
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
