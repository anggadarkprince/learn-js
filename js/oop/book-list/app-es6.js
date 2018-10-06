class Store {
    static get(collection) {
        let data;
        if (localStorage.getItem(collection) === null) {
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem(collection));
        }
        return data;
    }

    static add(collection, data) {
        const collections = Store.get(collection);
        collections.push(data);
        localStorage.setItem(collection, JSON.stringify(collections));
    }

    static remove(collection, data) {
        const collections = Store.get(collection);
        collections.forEach(function (item, index) {
            if (Object.isEquivalent(item, data)) {
                collections.splice(index, 1);
                localStorage.setItem(collection, JSON.stringify(collections));
                return;
            }
        })
    }
}

class BookList {
    constructor(books = []) {
        this.collections = books;
    }

    addBook(book) {
        this.collections.push(book);
        Store.add('books', book);
    }

    getBook(isbn) {
        let book = null;
        this.collections.forEach(function (collection) {
            if (collection.isbn == isbn) {
                book = collection;
            }
        });
        return book;
    }

    deleteBook(book) {
        let isFound = false;
        this.collections.forEach(function (collection, index, all) {
            if (collection.isbn === book.isbn) {
                all.splice(index, 1);
                isFound = true;
                Store.remove('books', collection);
                return;
            }
        });
        return isFound;
    }
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    displayBooks(books) {
        books.forEach((function (book) {
            this.addBookToList(book);
        }).bind(this));
    }

    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <button type="button" class="delete button-primary" data-isbn="${book.isbn}">
                    Delete
                </button>
            </td>
        `;
        list.appendChild(row);
        document.getElementById('empty-label').style.display = 'none';
    }

    deleteBook(target) {
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
            return true;
        }
        return false;
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Event listener
document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const
        title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        const book = new Book(title, author, isbn);
        bookList.addBook(book);
        ui.addBookToList(book);
        ui.showAlert('Book added!', 'success');
        ui.clearFields();
    }
});

document.getElementById('book-list').addEventListener('click', function (e) {
    e.preventDefault();

    const book = bookList.getBook(e.target.dataset.isbn);
    if (bookList.deleteBook(book)) {
        if (ui.deleteBook(e.target)) {
            ui.showAlert('Book removed!', 'success');
            if (bookList.collections.length === 0) {
                document.getElementById('empty-label').style.display = 'table-row';
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    ui.displayBooks(bookList.collections);
});

Object.prototype.isEquivalent = function (a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

// Collection initialized
const bookList = new BookList(Store.get('books'));
const ui = new UI();
