// registering event on the DOM
document.querySelector('.clear-tasks').addEventListener('click', function (event) {
    event.preventDefault();
    console.log('hello', event.target, event.currentTarget, this);
    console.log(event.target.className);
    console.log(event.clientY);
});

// mouse event
function runEvent(e) {
    console.log('event type', e.type);

    if (e.type == 'mousemove') {
        document.querySelector('#task-title').textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
        document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    }
}

document.querySelector('ul .delete-item').addEventListener('dblclick', runEvent);
document.querySelector('ul .delete-item').addEventListener('mousedown', runEvent);
document.querySelector('ul .delete-item').addEventListener('mouseup', runEvent);

document.querySelector('.card-action').addEventListener('mouseenter', runEvent); // triggered only over in the main element that attached the element
document.querySelector('.card-action').addEventListener('mouseleave', runEvent);
document.querySelector('.card-action').addEventListener('mouseover', runEvent); // triggered wherever over the element inside the attached element
document.querySelector('.card-action').addEventListener('mouseout', runEvent);

document.querySelector('.card-action').addEventListener('mousemove', runEvent);

// keyboard event
let taskForm = document.getElementById('task-form');
let taskInput = document.getElementById('task');
let taskCategory = document.getElementById('category');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    runEvent(e);
    console.log(taskInput.value);
});

taskInput.addEventListener('keydown', function (e) {
    runEvent(e);
    console.log(e.key, e.keyCode, e.code);
});

taskInput.addEventListener('keyup', function (e) {
    runEvent(e);
    this.parentElement.getElementsByTagName('label')[0].textContent = 'Text: ' + e.target.value;
});

taskInput.addEventListener('keypress', function (e) {
    runEvent(e);
});

taskInput.addEventListener('focus', function (e) {
    runEvent(e);
});

taskInput.addEventListener('blur', function (e) {
    runEvent(e);
});

taskInput.addEventListener('cut', function (e) {
    runEvent(e);
});

taskInput.addEventListener('paste', function (e) {
    runEvent(e);
});

// anything we do with the input, press, cut, paste, all triggered
taskInput.addEventListener('input', function (e) {
    runEvent(e);
});

taskCategory.addEventListener('change', function (e) {
    console.log('category', this.value);
});


// event bubbling and delegation
// an event will always bubble to top of document by default
document.querySelector('.card-title').addEventListener('click', function (e) {
    e.stopPropagation(); // will prevent bubbling
    console.log('card-title');
});
document.querySelector('.card-content').addEventListener('click', function () {
    console.log('card-content will triggered from card-title click()'); // comment e.stopPropagation();
});
document.querySelector('.col').addEventListener('click', function () {
    console.log('col will triggered from card-title click()'); // comment e.stopPropagation();
});

// event delegation the opposite, is a technique to delegate event from parent to its children
// rather than register each element, we registering the parent of element
// useful when wee adding dynamic element inside the container.
document.querySelector('ul.collection').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('delete-item')) {
        console.log('delete');
    }
    console.log(e.target);
});