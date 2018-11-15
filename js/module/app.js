const sayit = 'Hello World';
console.log(sayit);

// CommonJS syntax
const user = require('./mymodule');
console.log(user);


// ES6 (2015) syntax
import * as allmodules from './mymodule2';
console.log(allmodules.person, allmodules.hello());

import {person, hello} from "./mymodule2";
console.log(person);
console.log(hello());

import greeting from './mymodule2';
console.log(greeting);


// AMD syntax (async loading, callback will executed after module is loaded)
define(['./mymodule', './mymodule2'], function(user, module2) {
    console.log(user);
    console.log(module2.person, module2.hello());
});