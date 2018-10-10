const user = {email: 'anggadarkprince@gmail.com'};

try {
    // Produce a ReferenceError
    //notExistFunction();

    // Produce a TypeError
    //null.callAFunction();

    // Produce SyntaxError
    //eval('2+2 this part is ruin everything');

    // Produce a URIError
    //decodeURIComponent('^7855*&^%&^');

    if(!user.name) {
        //throw 'User has no name';
        throw new SyntaxError('User has no name');
    }
} catch(e) {
    console.error('Something went wrong');
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
} finally {
    console.log('Finally runs regardless of result..')
}

// try catch will continue (if without try catch will stop the program)
console.log('Program continues...');