// Assign will wrap function into Promise
async function greeting() {
    // return 'Hello';

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 3000);
    });

    const error = false;
    if (error) {
        await Promise.reject(new Error('Something went wrong'));
    } else {
        return await promise; // wait until promise is resolve
    }
}

greeting()
    .then(res => console.log(res))
    .catch(err => console.log(err));


// use async await to replace then chaining keyword
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const resultData = await response;
    return await resultData.json();
}

getUsers().then(users => console.log(users));
