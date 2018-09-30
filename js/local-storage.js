// key-value pair storage
// local storage will stay until browser clear the storage or manual remove the storage
localStorage.setItem('name', 'Angga Ari Wijaya');
localStorage.setItem('age', '25');
console.log(localStorage.getItem('name')); // return null if key doesn't exist
localStorage.removeItem('name');
//localStorage.clear();

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let tasks = localStorage.getItem('tasks');
    if (tasks) {
        tasks = JSON.parse(tasks);
    } else {
        tasks = [];
    }
    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
});

let tasks = localStorage.getItem('tasks');
tasks = tasks ? JSON.parse(tasks) : [];
tasks.forEach(function (task, index) {
    console.log(index, task);
});

// session storage only remind until browser closed
sessionStorage.setItem('session_access', (new Date()).toLocaleString());
