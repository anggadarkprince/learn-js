// templating
var name = 'John', age = 25, job = 'Web developer', city = 'Gresik, Indonesia';
var html;

// without template (es5)
html =
    '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>';
document.body.innerHTML += html;

// use back tick to create template string
// \ below escape new line, so we do not need unnecessary empty string
let greeting = `Hello \
Sunshine \
You are
beautiful`;
console.log(greeting);

function hello() {
    return 'Hello';
}

// with template (es6)
html = `
    <p>With Template \`\${vars}\`</p>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Score: ${2 + 2}</li>
        <li>Greeting: ${hello()}</li>
        <li>Status: ${age > 18 && age < 30 ? 'You are a young adult' : 'Mature'}</li>
    </ul>
`;
document.body.innerHTML += html;