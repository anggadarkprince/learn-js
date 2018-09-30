var hello = 'Hello world';
console.log('Hello');
console.log(hello);
console.error('Something went wrong');
console.clear();
console.log([1, 2, 3, 4, 5]);
console.log({a: 'hello', b: 'world'});
console.table([{a: 'hello', b: 'world'}, {a: 'hello', b: 'universe'}]);
console.log('This is a warning');

console.time('Hello');
console.log('Hello world 1');
console.log('Hello world 2');
console.log('Hello world 3');
console.timeEnd('Hello');