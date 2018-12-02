// spread has the same syntax to rest operator but different function
// this operator will spread into individual value (can be stored into individual variable)
// if the rest value that spread into variable contain more than one value then wrap it up into array
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];

var combined = [...arr1, ...arr2, ...arr3];
console.log(combined);

// useful when dealing with function that accept `rest` parameter
console.log(Math.max(...combined));