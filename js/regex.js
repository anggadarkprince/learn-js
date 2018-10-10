let re = /hello/;
re = new RegExp(/hello/i); // i = case insensitive, g = global search (entire line or paragraph)

console.log(re);
console.log(re.source);

// REGEX FUNCTION
// exec() - Return result in an array or null
const result = re.exec('hellona world');
console.log(result);
console.log(result[0]);

const result2 = re.exec('no world');
console.log(result2);

// test() - Return true or false
const resultTest = re.test('Hello yo');
console.log(resultTest);


// STRING FUNCTION
// match() - Return result array or null
const str = 'Hello there';
const resultMatch = str.match(re);
console.log(resultMatch);

// search() - Return index of the first match if not found returns -1
const str2 = 'Hello you';
const resultSearch = str2.search(re);
console.log(resultSearch);

// replace() - Return new string with some of all matches of a pattern
const str3 = 'Hello there';
const strNew = str3.replace(re, 'Hi');
console.log(strNew);


// LITERAL CHARACTER
console.log('-------------------------------------');

let rex;

rex = /hello/i;

// Metacharacter symbols
rex = /^hell/i; // ^ must start with
rex = /world$/i; // $ must end with
rex = /^hello world$/i; // must start end with
rex = /^h.llo/i; // matches any ONE character (replace . with any character: hello, hKllo, h6llo)
rex = /h*llo/i; // matches any character 0 or more: hello, heeello, hllo
rex = /gre?a?y/i; // optional character (e and a is optional)
rex = /gre?ay\?/i; // escape character \
rex = /hel+o\?/i; // one or more character helo, helllo, hellllllo

// Brackets [] - character sets
rex = /gr[ae]y/i; // gray or grey
rex = /[Gf]ray/; // must be G or f
rex = /[^GF]ray/; // ^ (inside bracket) match anything except G or F
rex = /[a-zA-Z0-9\-]/; // all lower-upper case letters and numbers, escape character can be used as well
rex = /[0-9][0-9].ray/;

// Braces {} - Quantifiers
rex = /Hel{2}o/i; // l character must appear twice (must occur exactly {m} amount)
rex = /Hel{2,4}o/i; // must occur m to n character (hello, helllo, hellllo)
rex = /Hel{2,}o/i; // must occur at least m to infinite character (hello, hellllllllllo)

// Parenthesis () - Grouping
rex = /([0-9]x){3}/; // group ((number)x) 3 times

// Shorthand character
rex = /\w/; // word character - alphanumeric or _
rex = /\w+/; // all the word character + one or more character
rex = /\W/; // non word character (uppercase)
rex = /\d+/; // match any digit
rex = /\D/; // non digit character
rex = /\s/; // whitespace character (tab or space)
rex = /\S/; // match non-whitespace char
rex = /Hell\b/i; // word boundary (hello will not match)


// Assertions
rex = /m(?=y)/; // match x only if followed by y
rex = /m(?!y)/; // match x only if NOT followed by y

const string = 'Hello, world 53fray? 3x3x3x welcome to hell myo';
testMyRegex(rex, string);

function testMyRegex(re, str) {
    const resultCheck = re.exec(str);
    console.log(resultCheck);
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT matches ${re.source}`);
    }
}
