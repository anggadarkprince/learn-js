// function declaration
function greet(lang = 'id') { // default parameter available in es6
    if (lang === 'id') {
        console.log('Selamat pagi');
    } else {
        console.log('Good morning');
    }
}

greet();

// return value
function sumNumber(num1, num2) {
    return num1 + num2;
}

console.log('4 + 5 equal', sumNumber(4, 5));

// function expressions
const square = function (x) {
    return x * x;
};
console.log('square of 4 is', square(4));


// immediately invokable function expression - IIFEs
(function (name) {
    console.log('Helllloooooo....', name);
})('Angga');

var todo = {
    list: [],
    add: function (task) {
        this.list.push(task);
        console.log('add todo', task);
    },
    get: function (index) {
        return this.list[index];
    },
    edit: function (index, task) {
        this.list[index] = task;
        console.log(`Edit todo ${task}`);
    }
};

todo.delete = function (id) {
    console.log(`Delete todo ${this.get(id)}`);
    this.list.splice(id, 1);
};

todo.add('Buy a milk');
todo.add('Do homework');
todo.add('Sleep at night');
console.log(todo.list);
todo.edit(0, 'Buy a coffee');
console.log(todo.list);
console.log(todo.get(1));
todo.delete(0);
todo.delete(0);
console.log(todo.list);