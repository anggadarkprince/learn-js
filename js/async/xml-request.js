let output = document.getElementById('output');

document.getElementById('button').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    // console.log('READYSTATE', xhr.readyState);
    xhr.open('get', 'data/plain.txt', true);
    xhr.onprogress = function () {
        document.querySelector('.loading').style.visibility = 'visible';
    }
    xhr.onload = function () {
        if (this.status === 200) {
            output.textContent = this.responseText;
            document.querySelector('.loading').style.visibility = 'hidden';
        }
    }
    xhr.onerror = function () {
        console.log('Request error', this.status);
    }

    /* Older syntax by check ready state variable
    console.log('READYSTATE', xhr.readyState);
    xhr.onreadystatechange = function () {
        console.log('READYSTATE', xhr.readyState);
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('output').textContent = this.responseText;
        }
    }
    */

    xhr.send();

    // readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: OK
    // 403: Forbidden
    // 404: Not found
});


document.getElementById('button-customer').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'data/customer.json', true);
    xhr.onloadstart = function () {
        document.querySelector('.loading').style.visibility = 'visible';
    }
    xhr.onloadend = function () {
        document.querySelector('.loading').style.visibility = 'hidden';
    }
    xhr.onload = function () {
        if (this.status === 200) {
            var customer = JSON.parse(this.responseText);
            output.innerHTML = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
        }
    }
    xhr.onerror = function () {
        console.log('Request error', this.status);
    }
    xhr.send();
});


document.getElementById('button-all-customers').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'data/customers.json', true);
    xhr.onloadstart = function () {
        document.querySelector('.loading').style.visibility = 'visible';
    }
    xhr.onloadend = function () {
        document.querySelector('.loading').style.visibility = 'hidden';
    }
    xhr.onload = function () {
        if (this.status === 200) {
            var customers = JSON.parse(this.responseText);
            var wrapper = document.createElement('ul');
            customers.forEach(function (customer) {
                wrapper.innerHTML += `
                    <li data-id="${customer.id}">
                        ${customer.name}
                        <ul>
                            <li>Company: ${customer.company}</li>
                            <li>Phone: ${customer.phone}</li>
                        </ul>
                    </li>
            `;
            });
            while (output.firstChild) output.removeChild(output.firstChild);
            output.appendChild(wrapper);
        }
    }
    xhr.onerror = function () {
        console.log('Request error', this.status);
    }
    xhr.send();
});


document.getElementById('button-api').addEventListener('click', function () {
    var totalJokes = prompt('Input total jokes?', '5');
    if (!isNaN(Number(totalJokes))) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'http://api.icndb.com/jokes/random/' + totalJokes, true);
        xhr.onloadstart = function () {
            document.querySelector('.loading').style.visibility = 'visible';
        }
        xhr.onloadend = function () {
            document.querySelector('.loading').style.visibility = 'hidden';
        }
        xhr.onload = function () {
            if (this.status === 200) {
                var results = JSON.parse(this.responseText);
                if (results.type === 'success') {
                    var wrapper = document.createElement('ul');
                    results.value.forEach(function (joke) {
                        var list = document.createElement('li');
                        list.appendChild(document.createTextNode(joke.joke));
                        list.setAttribute('data-id', joke.id);
                        wrapper.appendChild(list);
                    });
                    while (output.firstChild) output.removeChild(output.firstChild);
                    output.appendChild(wrapper);
                }
            }
        }
        xhr.onerror = function () {
            console.log('Request error', this.status);
        }
        xhr.send();
    } else {
        alert('Please input correct value of jokes');
    }
});