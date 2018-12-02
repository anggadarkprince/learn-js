// only work on data type that implement iterator
var arr = [1, 2, 3, 4, 5];
var name = {
    firstName: 'Angga',
    middleName: 'Ari',
    lastName: 'Wijaya',
};

for (let val of arr) {
    console.log(val);
}


// object is not iterable, using for-in instead
/*
for (let val of name) {
    console.log(val);
}
*/

for(let key in name) {
    if(name.hasOwnProperty(key)) {
        console.log(name[key]);
    }
}