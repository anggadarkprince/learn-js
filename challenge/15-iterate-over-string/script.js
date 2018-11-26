/* CHALLENGE 15 - Iterate over String

Count number of the lowercase vowel letters in the string.
Vowel letters - a, e, i, o, u
*/

"use strict";

var vowelsCount = 0;
var vowels = ["a", "e", "i", "o", "u"];

var str = "Today is best day of my life";

// find character by object reference (use for..loop)
str.charAt(0);

// Write code here
for(let letter of str) {
    if(vowels.includes(letter)) {
        vowelsCount++;
    }
}

/*
str.split('').forEach(function (letter) {
    if(vowels.includes(letter)) {
        vowelsCount++;
    }
});
*/

console.log(vowelsCount);
// 8
