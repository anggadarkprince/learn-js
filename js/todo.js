// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
let tasks;

// Load all event listeners
loadEventListeners();
loadTasks();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup', filterTask);
}

function loadTasks() {
    tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    tasks.forEach(function (task) {
        insertTask(task);
    });
}

function insertTask(task) {
    // create list item
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    // create list delete button
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.href = '#';
    link.appendChild(document.createTextNode('Delete'));

    // append the element
    li.appendChild(link);
    taskList.appendChild(li);
}

function storeTaskInLocalStorage(task) {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromLocalStorage(task) {
    tasks.forEach(function (taskItem, index) {
        if(task === taskItem) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(e) {
    e.preventDefault();

    // check the input
    if (taskInput.value.trim() === '') {
        alert('Add a task');
    }

    // insert task in list
    insertTask(taskInput.value);

    // persist task to storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
}

function removeTask(e) {
    e.preventDefault();
    const btn = e.target;
    if (btn.classList.contains('delete-item')) {
        if (btn.parentElement.classList.contains('collection-item')) {
            if (confirm('Are you sure want to delete this task?')) {
                btn.parentElement.remove();
                deleteTaskFromLocalStorage(btn.parentElement.firstChild.nodeValue);
            }
        }
    }
}

function clearTask(e) {
    e.preventDefault();
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}

function filterTask(e) {
    const query = e.target.value;
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(query) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}