document.getElementById('button-text').addEventListener('click', getText);
document.getElementById('button-json').addEventListener('click', getJson);
document.getElementById('button-api').addEventListener('click', getExternal);

// Get local text file data
function getText() {
    document.querySelector('.loading').style.visibility = 'visible';
    fetch('data/plain.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
            document.querySelector('.loading').style.visibility = 'hidden';
        })
        .catch(err => console.log(err));
}


// Get local json data
function getJson() {
    document.querySelector('.loading').style.visibility = 'visible';
    fetch('data/posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(post => {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
            document.querySelector('.loading').style.visibility = 'hidden';
        })
        .catch(err => console.log(err));
}


// Get from external API
function getExternal() {
    document.querySelector('.loading').style.visibility = 'visible';
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
            document.querySelector('.loading').style.visibility = 'hidden';
        })
        .catch(err => console.log(err));
}

// fetch() API only rejects a promise when a “network error is encountered,
// although this usually means permissions issues or similar.”
fetch("http://httpstat.us/500")
    .then(function (data) {
        console.log(data);
    })
    .catch(function (e) {
        console.log(e);
    });

fetch("http://httpstat.us/500")
    .then(function (response) {
        if (!response.ok) { // force promise reject
            throw Error(response.statusText);
        }
        return response;
    })
    .then(function (response) {
        console.log("ok");
    }).catch(function (error) {
    console.log(error);
});
