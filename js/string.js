const fName = 'Angga';
const lName = 'Ari';
const tags = ['programming', 'js', 'php', 'ai', 'tech'];

// concatenation
let fullName = fName + ' ' + lName;
console.log(fullName);

// append the string
fullName += ' Wijaya';
console.log(fullName);

// string property and method
console.log(fullName.length);

// change case
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

// find string
console.log(fullName.indexOf('Ari')); // find string and return the index position the string is found, return -1 if not found
console.log(fullName.lastIndexOf('a')); // same as indexOf but return the position of last value is found
console.log(fullName.includes('Ari')); // return true if found, and false if not found (new is es6)
console.log(tags.includes('js')); // works on array as well

// character position
console.log(fullName[0], fullName[1], fullName[2]);
console.log(fullName.charAt(0), fullName.charAt(1), fullName.charAt(3));

// concat and trimming
console.log(('  ' + fullName + '  ').trim()); // remove pre and trailing space
console.log(fullName.concat(' Hi brow').concat(' Yo, have a nice day'));
console.log(fullName.substr(6, 3));
console.log(fullName.slice(0, 3));
console.log(fullName.slice(-3));

// splitting and join
console.log(fullName.split(' '));
console.log(tags.join(', '));

// replace value
console.log(fullName.replace('Ari', 'Jack'));
console.log(fullName.bold()); // auto adding <b> tag
console.log(fullName.anchor('My Website')); // auto adding <a> tag
console.log(('12').padStart(10, '0'));
console.log(('12').valueOf());


// escaping
val = 'That\'s awesome, I can\'t wait';
console.log(val);
// or using combination " and ' character
val = "that's awesome, I can't wait";
console.log(val);