// Book constructor
function BookList(book = []) {
    this.collections = book;
    this.addBook = function (book) {
        this.collections.push(book);
    }
    this.getBook = function (isbn) {
        let book = null;
        this.collections.forEach(function (collection) {
            if (collection.isbn == isbn) {
                book = collection;
            }
        });
        return book;
    }
    this.deleteBook = function (book) {
        let isFound = false;
        this.collections.forEach(function (collection, index, all) {
            if (collection.isbn === book.isbn) {
                all.splice(index, 1);
                isFound = true;
                return;
            }
        });
        return isFound;
    }
}

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {
};

UI.prototype.addBookToList = function (book) {
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
    if (bookList.collections.length) {
        document.getElementById('empty-label').style.display = 'none';
    }
}

UI.prototype.showAlert = function (message, className) {
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

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.deleteBook = function (target) {
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
        return true;
    }
    return false;
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

// Collection initialized
const bookList = new BookList();
const ui = new UI();