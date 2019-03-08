// regex is symbols representing a text pattern
var formatRegex = /hello/gim            // g: global  i: insensitive m: multiline
var myRegex = /hello/;                  // match exact "hello"
var atStart = new RegExp('^hello');     // ^ at the start "helloworld"
var atEnd = /hello$/;                   // $ at the end "shellow"
var repeatOnceMore = /hel+o/;           // + once or more "helo", "hello", "helllllo"
var repeatZeroMore = /hel*o/;           // * zero or more "heo", "helo", "hello", "helllo"
var repeatZeroOne = /hel?o/;            // ? zero or one "heo", "helo"
var group = /h(el)?o/;                  // () one group "ho", "helo"
var either = /hello|world|goodbye/;     // | either / or "hello", "world", "goodbye"
var anyCharacter = /he..o/;             // . any except new line "hello", "hemlo", "hecro"
var alphaNum = /\wina/;                 // \w alphanumeric [a-zA-Z0-9_] "dina", "lina", "2ina" \w\wina -> adina
var wordBoundary = /\bhello\b/;         // \b word boundary (space, enter, symbol, etc) "no hello ra" "hello", "no hello", "hello no"
var tab = /hel\tlo/;                    // \t tab "hel  lo"
var newline = /hel\nlo/;                // \n \r \r\n space tab "hel[enter]lo"
var charset = /[lvy.?]ope/;             // [] set of character "lope", "vope", "yope", ".ope", "?ope"
var charsetNegative = /[^lv]ope/;       // [^] not set of character (except) "yope", "sope"
var range = /[a-zA-Z0-9]li/;            // a-z 0-9 range of sequential 'ali', 'eli' , '2lies' , '3livalier'
var minChar = /[a-z]{8}/;               // {min} quiantified repetition (min is max) chars 'helloworld'
var rangeCharLength = /\w{8,15}/;        // {min, max} quiantified repetition (min is max) chars 'helloworld'
var minInfiniteLength = /\w{8,}/;        // {min, } quiantified repetition min until infinite chars 'helloworld'
var escape = /vo\.pe\?/;                // \ escape meta character 'vo.pe?'
var escapeOpenClose = /\/home\/user\/document.txt/;                // \ escape special character 'vo.pe?'


/**
 * -------------------------------------------------------------
 * |  Short hand   |   meaning            |   equivalent       |
 * -------------------------------------------------------------
 * |  \d           |   digit              |   [0-9]            |
 * |  \w           |   alphanum           |   [a-zA-Z0-9_]     |
 * |  \s           |   whitespace         |   [ \t\r\n]        |
 * |  \D           |   not digit          |   [^0-9]           |
 * |  \W           |   not alphanum       |   [^a-zA-Z0-9_]    |
 * |  \S           |   not whitespace     |   [^ \t\r\n]       |
 * -------------------------------------------------------------
 */

var data = [
    'ho', 'heo', 'shello', 'helloworld', 'hello world', 'hellos.world', 'helo', 'helllllo', 'hemlo', 'hecro', 'hel    lo', 'hel\nlo',
    'mi hello na', 'ali', '4li', 'world', 'goodbye', 'anggadarkprince@gmail.com', '1992-05-26', '888-1233-87', 'adina',
    'vi2lina', 'vina', '2ina', 'vope', 'yope', 'vo.pe?', 'this is one of long sentence', '/home/user/document.txt'
];
console.log(data);

function testRegex(pattern) {
    for (var i = 0; i < data.length; i++) {
        if (pattern.test(data[i])) {
            console.log('  ' + data[i] + ' \t : ' + data[i].match(pattern)[0]);
        }
    }
    console.log('');
}

console.log('Test exact ' + myRegex);
testRegex(myRegex);

console.log('Test must begin with ' + atStart);
testRegex(atStart);

console.log('Test must end with ' + atEnd);
testRegex(atEnd);

console.log('Test option 1 or more' + repeatOnceMore);
testRegex(repeatOnceMore);

console.log('Test option 0 or more ' + repeatZeroOne);
testRegex(repeatZeroMore);

console.log('Test option 1 or 0 (none) ' + repeatZeroOne);
testRegex(repeatZeroOne);

console.log('Test group ' + group);
testRegex(group);

console.log('Test or ' + either);
testRegex(either);

console.log('Test any character ' + anyCharacter);
testRegex(anyCharacter);

console.log('Test alphanumeric ' + alphaNum);
testRegex(alphaNum);

console.log('Test boundary ' + wordBoundary);
testRegex(wordBoundary);

console.log('Test tab ' + tab);
testRegex(tab);

console.log('Test new line ' + newline);
testRegex(newline);

console.log('Test charset ' + charset);
testRegex(charset);

console.log('Test not in charset ' + charsetNegative);
testRegex(charsetNegative);

console.log('Test range sequential char ' + range);
testRegex(range);

console.log('Test total min char ' + minChar);
testRegex(minChar);

console.log('Test range length char ' + rangeCharLength);
testRegex(rangeCharLength);

console.log('Test min infinite char ' + minInfiniteLength);
testRegex(minInfiniteLength);

console.log('Test escape character ' + escape);
testRegex(escape);

console.log('Test escape open close ' + escapeOpenClose);
testRegex(escapeOpenClose);

/**
 * (\+?\d{7,14}|(\(?\d( |[^a-z0-9A-Z\n]|)*){3,})
 * prevent user input phone number, and predict all possibilities of fake format.
 *
 * 085655479868
 * +6285655479868
 * 3988586
 * 0 8 5 6 5  5    479868
 * 0 8 #&^';5 6*)_= 5  5  ?  4798@68
 * (0331)324-23
 * 3454(34)35?4+6
 * 0_8_5_6_5_5_4_7_9_8_6_8
 * 0/8/5/6/5/5/4/7/9/8/6/8
 */