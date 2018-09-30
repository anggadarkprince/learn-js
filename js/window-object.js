// all function by default come from `window` object
console.log(window);
window.console.log('Hello');

/*
// alert
alert('hi');
window.console.log('alert');

// prompt
const inputName = prompt('Input your name');
alert(`Your name is ${inputName}`);

// confirm
if(confirm('Are you sure want to delete?')) {
    console.log('perform delete');
} else {
    console.log('cancel delete');
}
*/

// width and height
console.log(window.outerHeight, window.outerWidth);
console.log(window.innerHeight, window.innerWidth);

// scroll point
console.log(window.scrollY, window.scrollX);

// location object
console.log(window.location);
console.log(window.location.hostname);
console.log(window.location.href);
console.log(window.location.search);
// window.location.href = 'https://google.com';
// window.location.reload();

// history object
// history.go(-2);
// history.back();
// history.forward();

// browser control
console.log(navigator);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.vendor);