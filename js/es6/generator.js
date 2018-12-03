// Iterator
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length ? {value: names[nextIndex++], done: false} : {done: true};
        }
    }
}

let names = ['Angga', 'Ari', 'Wijaya'];
const name = nameIterator(names);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// Generator
function* sayNames() {
    yield 'Angga';
    yield 'Ari';
    yield 'Wijaya';
}

const myName = sayNames();
console.log(myName.next());
console.log(myName.next());
console.log(myName.next());
console.log(myName.next());

// ID creator
function* createIds(max = 5) {
    let index = 0;
    while(index < max) {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

for (val of createIds(3)) {
    console.log(val);
}