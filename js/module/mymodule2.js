// es2015 module export
export const person = {
    name: 'Ari',
    email: 'angga.aw92@gmail.com'
};

export function hello() {
    return `Hello ${person.name}`;
}

const greeting = 'Hello world';
export default greeting; // can import without destructuring