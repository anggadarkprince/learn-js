const http = new easyHTTP();

// Get posts
document.getElementById('button-get').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.get('https://jsonplaceholder.typicode.com/posts', function (status, data) {
        document.querySelector('.loading').style.visibility = 'hidden';
        if (status === 200) {
            document.getElementById('output').innerHTML = `<pre>${data}</pre>`;
        } else {
            console.log('Error : ' + status);
        }
    });
});

var postData = {
    userId: 1,
    title: 'Hello world',
    body: 'Usto sed quo iure occaecati omnis eligendi aut ad'
};

// Post a post
document.getElementById('button-insert').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.post('https://jsonplaceholder.typicode.com/posts', postData, function (data) {
        document.querySelector('.loading').style.visibility = 'hidden';
        document.getElementById('output').innerHTML = `<pre>${data}</pre>`;
    });
});

// Put a post
document.getElementById('button-update').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.put('https://jsonplaceholder.typicode.com/posts/1', postData, function (data) {
        document.querySelector('.loading').style.visibility = 'hidden';
        document.getElementById('output').innerHTML = `<pre>${data}</pre>`;
    });
});

// Delete a post
document.getElementById('button-delete').addEventListener('click', function () {
    document.querySelector('.loading').style.visibility = 'visible';
    http.delete('https://jsonplaceholder.typicode.com/posts/1', function (status, data) {
        document.querySelector('.loading').style.visibility = 'hidden';
        if (status === 200) {
            document.getElementById('output').innerHTML = `<pre>Post 1 deleted! ${data}</pre>`;
        } else {
            console.log('Error : ' + status);
        }
    });
});