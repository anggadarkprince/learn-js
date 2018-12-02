// variable will live in scope
let title = 'Twilight Saga';
let series = 'Print01';
var name = 'Angga';

function hello() {
    // here we do try to assign global variable new value
    // we cannot do this if we define local variable inside this function with same name, but if not it change the global
    // title = 'Yuki';

    // we do not redeclare title but create local variable that not related with global variable
    let title = 'Run Jerry Run';
    console.log(title);

    // change the value of variable outside the function
    name = 'Ari';
    series = 'Special Edition';

    // define variable in crazy scope
    {
        if (true) {
            var vehicle = 'Car';
            let brand = 'Honda';
            name = 'Wijaya';
        }
        // console.log(brand); // we cannot access this
    }
    console.log(vehicle); // we cannot access
    // console.log(brand); // we cannot access as well
}

hello();

// this value affected by hello() function being called
console.log(name); // Wijaya
// console.log(vehicle); // var is isolated inside the function only, we cannot access it

console.log(title);

// hoisting variable
function getName() {
    // behind the scene javascript define variable below
    // var myName;
    return myName;
    var myName = 'Angga Ari Wijaya';
}

function getNameWithLet() {
    return myName; // this line will produce reference error TDZ (Temporal Dead Zone)
    let myName = 'Angga Ari Wijaya';
}

// this will not return error reference but still return undefined
console.log(getName());

// produce reference error
// console.log(getNameWithLet());


// var in loop and async
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i); // all return value 5 (5 times)
    });

    // we manually access i from function param
    /*
    (function(j) {
        setTimeout(function () {
            console.log(j);
        })
    })(i);
    */
}
console.log(i); // you even can access it outside 5

// using let
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i); // all return value 5 (5 times)
    });
}