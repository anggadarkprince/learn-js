import {http} from './http';
import {ui} from './ui';

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
    http.get('http://localhost:3000/posts')
        .then((posts) => {
            ui.showPosts(posts);
        })
        .catch(err => console.log(err));
}

// Submit post
document.querySelector('.post-submit').addEventListener('click', function (e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;

    if(title === '' || body === '') {
        ui.showAlert('Please fill in all fields', 'alert alert-danger');
    } else {
        const data = {title, body};
        if (id === '') {
            // Create Post
            http.post('http://localhost:3000/posts', data)
                .then((result) => {
                    ui.showAlert('Post added!', 'alert alert-success');
                    ui.clearFields();
                    getPosts();
                })
                .catch(err => console.log(err));
        } else {
            // Update Post
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                    ui.showAlert('Post updated!', 'alert alert-success');
                    ui.changeFormState('add');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }

});

// Delete post
document.querySelector('#posts').addEventListener('click', function (e) {
    e.preventDefault();

    let btnDelete = findTarget(e, 'delete');

    // if we clicked inside, log the value of span
    if (btnDelete !== null) {
        const id = btnDelete.dataset.id;
        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post removed', 'alert alert-warning');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }
});

document.querySelector('#posts').addEventListener('click', function (e) {
    e.preventDefault();

    let btnEdit = findTarget(e, 'edit');

    if (btnEdit !== null) {
        const id = btnEdit.dataset.id;
        const title = btnEdit.previousElementSibling.previousElementSibling.textContent;
        const body = btnEdit.previousElementSibling.textContent;

        ui.fillForm({id, title, body});
    }
});


document.querySelector('.card-form').addEventListener('click', function (e) {
    e.preventDefault();

    if(e.target.classList.contains('post-cancel')) {
        ui.changeFormState('add');
    }
});



// find by going up for delete button if the icon or anything inside the target
function findTarget(e, targetClass) {
    let node = e.target;
    let targetNode = null;

    while (node !== e.currentTarget) {
        if (node.classList.contains(targetClass)) {
            targetNode = node;
            break;
        }

        node = node.parentNode;
    }

    return targetNode;
}