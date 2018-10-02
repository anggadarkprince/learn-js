class Person {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(birthday);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const marry = new Person('Marry', 'Jane', '1992-05-26');
marry.getsMarried('Thomson');
console.log(marry.greeting(), 'You are', marry.calculateAge());
console.log(Person.addNumbers(2, 5));



// Sub class
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const customer = new Customer('Angga', 'Ari', '+62373563434', 'exclusive');
console.log(customer.greeting());
console.log(Customer.getMembershipCost());