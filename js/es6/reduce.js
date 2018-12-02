// iterate data and passing the return as accumulation result
function sum(...numbers) {
    let total = 0;
    total = numbers.reduce((accumulator, value) => accumulator + value, total);
    return total;
}

console.log(sum(2, 4, 5, 1));