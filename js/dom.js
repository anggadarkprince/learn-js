// document element
let val;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms[0]; // always return array
val = document.forms[0].id; // get property
val = document.forms[0].method; // get another property
val = document.forms[0].action;

val = document.links; // another built in property of tags, again return array
val = document.links[0].className;
val = document.links[0].classList[0]; // some property return array

val = document.scripts;
val = document.scripts[0].getAttribute('src'); // recommended way to get property

let scripts = document.scripts;

Array.from(scripts).forEach(function (script) {
    console.log(script);
});

console.log(val);


// DOM selector
// single element
let input = document.getElementById('task');
console.log(input);
console.log(input.name);
console.log(input.value);

// change style
let title = document.getElementById('task-title');
title.style.background = '#333';
title.style.color = '#fff';
title.style.padding = '7px 10px';
title.style.borderRadius = '3px';

// change content
title.textContent = 'Task List'; // this property save all spaces
title.innerText = 'All Tasks'; // this property ignore multiple space
title.innerHTML = '<span style="color: lightgray">All Tasks</span>';

// multiple elements by class name
const items = document.getElementsByClassName('collection-item'); // return array
items[0].innerText = 'Buy a coffee'; // replace all children

// multiple elements by tag name
const itemList = document.getElementsByTagName('li'); // return array
itemList[1].firstChild.nodeValue = 'Task has changed';
itemList[2].childNodes[2].nodeValue = 'new task'; // transverse node inside of element

// query selector (get first element)
let taskTitle = document.querySelector('#task-title');
let cardTitle = document.querySelector('.card-title');
let list = document.querySelector('li');
let lastListItem = document.querySelector('ul li:last-child');
list.style.color = 'red'; // change first element only

// query selector (get all elements)
let allListItem = document.querySelectorAll('li');
allListItem.forEach(function (li) {
    li.style.color = 'blue';
});
allListItem = Array.from(allListItem);
allListItem.reverse();

// combination of DOM selection
const lists = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(lists);


// TRANSVERSE the DOM up and down
// Node type
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

let ulCollection = document.querySelector('ul.collection');
let liCollection = document.querySelector('li.collection-item:first-child');

val = ulCollection.childNodes; // line break between element and text without tag, will be counted as node, return Node list (iterable)
console.log(val);
val = ulCollection.children; // only element child (tag only), return HTML collection (not iterable)

// node type
console.log(val[0].nodeName); // tag name
console.log(val[0].nodeType); // node type, see info above
console.log(val[0].nodeValue);

// children of children
console.log(val[1].children[0]); // get first element
console.log(val[1].firstChild); // get first node (text or element)
console.log(val[1].firstElementChild); // get first element (text never be fetched) - equal as val[1].children[0]

// count children element - equal to ulCollection.children.length
console.log(ulCollection.childElementCount);

// get parent node
val = liCollection.parentNode;
val = liCollection.parentElement;
console.log(val);
val = liCollection.parentElement.parentElement;
console.log(val);

// get next sibling
val = liCollection.nextSibling; // get text, comment, element
val = liCollection.nextElementSibling;
console.log(val);

// get prev sibling
val = val.previousElementSibling;
console.log(val);
console.log(val.previousElementSibling); // null, no element before first node


// CREATE element
let newList = document.createElement('li');
newList.className = 'collection-item';
newList.id = 'new-item';

// add attribute
newList.setAttribute('title', 'New task item');

// create text node and append
newList.appendChild(document.createTextNode('Hello world'));

// create element node
const listLink = document.createElement('a');
listLink.classList.add('delete-item');
listLink.classList.add('secondary-content');
// or just listLink.className = 'delete-item secondary-content';
listLink.innerText = 'Delete'; // simple add text rather than append child document.createTextNode('Delete') or innerHTML = '<span>Delete</span>'
newList.appendChild(listLink);

ulCollection.appendChild(newList);
console.log(newList);


// REPLACE and REMOVE things
const newHeading = document.createElement('h3');
newHeading.innerText = 'Task List';
newHeading.id = 'task-title';

const oldHeading = document.getElementById('task-title');
const parentHeading = oldHeading.parentElement;
parentHeading.replaceChild(newHeading, oldHeading);

// remove element
const allLI = document.querySelectorAll('li');
allLI[3].remove();

// remove child element
ulCollection.removeChild(allLI[4]);

// classes
const secondLiLink = allLI[1].children[0];
console.log(secondLiLink.className);
secondLiLink.classList.remove('secondary-content');
console.log(secondLiLink.className);

// attributes
secondLiLink.getAttribute('href');
secondLiLink.setAttribute('href', 'https://google.com');
secondLiLink.setAttribute('title', 'Google.com');
console.log(secondLiLink.hasAttribute('title'));
secondLiLink.removeAttribute('title');
