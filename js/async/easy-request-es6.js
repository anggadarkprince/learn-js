const http = new EasyHTTP();

// Get posts
document.getElementById('button-get').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
            document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`;
            document.querySelector('.loading').style.visibility = 'hidden';
        })
        .catch(err => console.log('Error : ' + err));
});

let postData = {
    userId: 1,
    title: 'Hello world',
    body: 'Usto sed quo iure occaecati omnis eligendi aut ad'
};

// Post a post
document.getElementById('button-insert').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(data => {
            document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`;
            document.querySelector('.loading').style.visibility = 'hidden';
        })
        .catch(err => console.log('Error : ' + err));
});

// Put a post
document.getElementById('button-update').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.put('https://jsonplaceholder.typicode.com/posts/1', postData)
        .then(data => {
            document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`;
            document.querySelector('.loading').style.visibility = 'hidden';
        })
        .catch(err => console.log('Error : ' + err));
});

// Delete a post
document.getElementById('button-delete').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(data => {
            document.getElementById('output').innerHTML = `<pre>Post 1 is deleted! ${JSON.stringify(data, null, 4)}</pre>`;
            document.querySelector('.loading').style.visibility = 'hidden';
        })
        .catch(err => console.log('Error : ' + err));
});