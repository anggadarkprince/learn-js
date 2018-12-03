// assign to new object but not a deep clone
var person = {name: 'elie', pet: ['dog', 'cat']};
var me = Object.assign({}, person);

person.name = 'tim';
person.pet.push('fish');

console.log(me.name);
console.log(me.pet);
