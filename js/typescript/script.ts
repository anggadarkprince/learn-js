const sum = (a: number, b: number) => {
    return a + b;
}

console.log(sum(3, 6));

// variable
let isGood: boolean = true;
let age: number = 25;
let firstName: string = 'Angga';
let desc: string = `Hello my name is ${firstName}, my age are ${age}`;

// array
let pets: string[] = ['cat', 'dog', 'fish'];
let things: Array<string> = ['chair', 'computer', 'pen'];

// object
let wizard: object = {
    a: 'John'
};

// null and undefined
let oh: undefined = undefined;
let no: null = null;

// tuple
let basket: [string, number]; // order type is matter
basket = ['basketball', 3];

// enum
enum SIZE {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3
}

let sizeName: string = SIZE[2];
let XL: number = SIZE.LARGE;

// any !!! BE CAREFUL
let whatever: any = 'ages!';
whatever = 3;
whatever = true;

// void
let sing = (): void => {
    console.log('hello');
}

// never (neither have return type and reach end point or end of function)
let error = (): never => {
    throw Error('Something went wrong');
}

interface RobotArmy {
    count: number,
    type: string,
    magic?: string // may or not may in the object (optional)
}

type RobotArmy2 = {
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log(`Fight ${robots.magic}`);
}

let fightRobotArmy2 = (robots: { count: number, type: string, magic: string }) => {
    console.log(`Fight ${robots}`);
}

fightRobotArmy({count: 3, type: 'Hunter', magic: 'Fireball'});

// be careful about this
let dog = {} as RobotArmy2;
dog.count;


// function
let robotType = (robots: RobotArmy): string => {
    return robots.type;
}

// class
class Animal {
    private readonly sing: string = 'lala...';

    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal('Raarh');
console.log(lion.greet());

// union
let confuse: string | number | boolean = 23