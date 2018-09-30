// data conversion
var val = 5;
console.log(val); // 5 (Number)
console.log(typeof val); // Number

// number to string
val = String(5);
console.log(val); // '5' String
console.log(val.length); // 1

// boolean to string
val = String(true);
console.log(val); // 'true' (String)
console.log(typeof val); // String

// date to string
val = String(new Date());
console.log(val); // 'Sat Sep 29 2018 20:16:26 GMT+0700 (WIB)' (String)
console.log(typeof val); // String

// toString() method
val = (5).toString(); // '5' (String)
val = (false).toString(); // 'false' (String)
// val = (null).toString(); // will throw error
val = String(null); // 'null'
val = String(NaN); // 'NaN' (String)
console.log(val);

// string to number
val = Number('5');
console.log(val); // 5 (Number)
console.log(val.toFixed(2)); // output string
console.log(typeof val); // Number

// another type to number
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number(NaN); // NaN (Number)
val = Number(undefined); // NaN
val = Number(''); // 0
val = Number('hello'); // NaN: Not a Number
val = Number([1, 2, 3]); // NaN also

// parseInt() method
val = parseInt('100.30');
console.log(val); // 100 (Number)
console.log(typeof val); // Number

// parseFloat() method
val = parseFloat('100.30');
console.log(val); // 100.3 (Number)
console.log(val.toFixed(2)); // 100.30 (Number)
console.log(typeof val); // Number

// number to boolean
val = Boolean(0); // false
val = Boolean(1); // true
val = Boolean(-3); // true
val = Boolean('true'); // true
val = Boolean('false'); // true
val = Boolean('hello'); // true
val = Boolean('1'); // true
val = Boolean('0'); // true
val = Boolean(''); // false
val = Boolean(NaN); // false
val = Boolean(null); // false
val = Boolean(undefined); // false
console.log(val);
console.log(typeof val);

// type coercion
const var1 = 5;
const var2 = '6'; // String
const sum = var1 + var2;
console.log(sum); // javascript decide to concat the variable (parse all value to string) rather cast to number
console.log(5 + NaN); // because if value cannot cast to number will result NaN and when we operate with number will result NaN also