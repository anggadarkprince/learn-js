var today = new Date();
var birthday = new Date('1992-05-26');
var birthday2 = new Date('May 26 1992');

console.log(today.toDateString());
console.log(birthday);
console.log(birthday2);
console.log(today.getDate(), today.getMonth() + 1, today.getFullYear()); // month is zero based
console.log(today.getTime(), today.getHours(), today.getMinutes(), today.getSeconds());
console.log(today.getDay()); // number base

birthday2.setMonth(2); // march
birthday2.setDate(12);
birthday2.setFullYear(1995);
console.log(birthday2.toLocaleString());