// Storage controller
const StorageController = (function () {
    let collection = null;

    return {
        setStorageCollection: function (name) {
            collection = name;
        },
        getItems: function () {
            if (!collection) {
                throw new ReferenceError('Please set storage collection name!');
            }
            let items = localStorage.getItem(collection);
            if (items === null) {
                items = [];
            } else {
                items = JSON.parse(items)
            }
            return items;
        },
        storeItem: function (item) {
            let items = StorageController.getItems();
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));
        },
        updateItem: function (updatedItem) {
            let items = StorageController.getItems();
            items.forEach(function (item, index) {
                if (Number(updatedItem.id) === Number(item.id)) {
                    items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItem: function (id) {
            let items = StorageController.getItems();
            items.forEach(function (item, index) {
                if (Number(item.id) === Number(id)) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItems: function () {
            // localStorage.clear();
            localStorage.setItem('items', JSON.stringify([]));
        }
    }
})();

// Item controller
const ItemController = (function () {
    // constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    // structure data
    const data = {
        items: [],
        currentItem: null,
        totalCalories: 0
    };

    // public method
    return {
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        setItems: function (items) {
            data.items = items;
        },
        getItems: function () {
            return data.items;
        },
        getItem: function (id) {
            let foundItem = null;
            data.items.forEach(function (item) {
                if (Number(item.id) === Number(id)) {
                    foundItem = item;
                }
            });
            return foundItem;
        },
        addItem: function (name, calories) {
            let id = 0;
            if (data.items.length > 0) {
                id = data.items[data.items.length - 1].id + 1
            }
            calories = parseInt(calories);

            let newItem = new Item(id, name, calories);
            data.items.push(newItem);

            return newItem;
        },
        updateItem: function (name, calories) {
            calories = parseInt(calories);
            let foundItem = null;
            data.items.forEach(function (item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    foundItem = item;
                }
            });
            return foundItem;
        },
        deleteItem: function (id) {
            const ids = data.items.map(function (item) {
                return item.id;
            });
            const index = ids.indexOf(id);
            data.items.splice(index, 1);
        },
        clearAllItems: function () {
            data.items = [];
        },
        getTotalCalories: function () {
            let total = 0;
            data.items.forEach(function (item) {
                total += item.calories;
            });
            data.totalCalories = total;
            return total;
        }
    }
})();

// UI controller
const UIController = (function () {
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories',
    };

    function createList(item) {
        return `
            <li class="collection-item" id="item-${item.id}">
                <strong class="item-name">${item.name}</strong>: 
                <em><span class="item-calories">${item.calories}</span> Calories</em>
                <a href="#" class="secondary-content edit-item">
                    Edit
                </a>
            </li>
        `;
    }

    // public method
    return {
        populateItemList: function (items) {
            if (items.length) {
                items.forEach(function (item) {
                    UIController.addListItem(item);
                });
            } else {
                UIController.hideList();
            }
        },
        addListItem: function (item) {
            let list = new DOMParser().parseFromString(createList(item), 'text/html');
            document.querySelector(UISelectors.itemList).appendChild(list.body.firstChild);
        },
        updateListItem: function (item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            Array.from(listItems).forEach(function (list) {
                if (list.getAttribute('id') === `item-${item.id}`) {
                    list.querySelector('.item-name').textContent = item.name;
                    list.querySelector('.item-calories').textContent = item.calories;
                }
            });
        },
        deleteListItem: function (id) {
            document.querySelector(UISelectors.itemList).querySelector(`#item-${id}`).remove();
        },
        clearListItem: function () {
            const itemList = document.querySelector(UISelectors.itemList);
            while (itemList.firstChild) itemList.removeChild(itemList.firstChild);
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        setTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        setItemToForm: function (item) {
            if (item) {
                document.querySelector(UISelectors.itemNameInput).value = item.name;
                document.querySelector(UISelectors.itemCaloriesInput).value = item.calories;
            }
        },
        clearEditState: function () {
            UIController.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'block';
        },
        getSelectors: function () {
            return UISelectors;
        }
    }
})();

// App controller
const App = (function (ItemController, UIController, StorageController) {

    // reset item list status
    function updateViewStatus() {
        // add total calories to UI
        UIController.setTotalCalories(ItemController.getTotalCalories());

        // clear fields
        UIController.clearInput();

        // clear fields
        UIController.clearEditState();

        if (ItemController.getItems().length === 0) {
            UIController.hideList();
        } else {
            UIController.showList();
        }
    }

    // load event listeners
    const loadEventListeners = function () {
        // get UI selectors
        const UISelectors = UIController.getSelectors();

        // add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', function (e) {
            e.preventDefault();

            // get input from UI controller
            const input = UIController.getItemInput();

            //check for name and calorie input
            if (input.name !== '' && input.calories !== '') {
                // add item
                const newItem = ItemController.addItem(input.name, input.calories);

                // add item to UI list
                UIController.addListItem(newItem);

                // persist to storage
                StorageController.storeItem(newItem);

                // update status field and list
                updateViewStatus();
            } else {
                alert('Please check your inputs!');
            }
        });

        // disable submit on enter
        document.addEventListener('keypress', function (e) {
            // old browser check .which property
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });

        // edit event
        document.querySelector(UISelectors.itemList).addEventListener('click', function (e) {
            e.preventDefault();

            if (e.target.classList.contains('edit-item')) {
                // get list item id (item-0, item-1, ...)
                const listId = e.target.parentNode.id;
                const listIdArray = listId.split('-');
                const id = listIdArray[1];

                // get item
                const item = ItemController.getItem(id);

                // set current item
                ItemController.setCurrentItem(item);

                // set item to form
                UIController.setItemToForm(ItemController.getCurrentItem());

                // set state button
                UIController.showEditState();
            }
        });

        // update edited item
        document.querySelector(UISelectors.updateBtn).addEventListener('click', function (e) {
            e.preventDefault();

            // get input from UI controller
            const input = UIController.getItemInput();

            //check for name and calorie input
            if (input.name !== '' && input.calories !== '') {
                // update the item
                const updatedItem = ItemController.updateItem(input.name, input.calories);

                // update item in UI list
                UIController.updateListItem(updatedItem);

                // update local storage
                StorageController.updateItem(updatedItem);

                // update status field and list
                updateViewStatus();
            }
        });

        // delete item data
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', function (e) {
            e.preventDefault();

            // get current item
            const currentItem = ItemController.getCurrentItem();

            if (confirm(`Are you sure want to delete item ${currentItem.name}?`)) {
                // delete from data structure
                ItemController.deleteItem(currentItem.id);

                // delete from local storage
                StorageController.deleteItem(currentItem.id);

                // delete item in UI list
                UIController.deleteListItem(currentItem.id);

                // update status field and list
                updateViewStatus();
            }
        });

        // clear items
        document.querySelector(UISelectors.clearBtn).addEventListener('click', function (e) {
            e.preventDefault();

            // clear item in data structure
            ItemController.clearAllItems();

            // clear all items
            StorageController.clearItems();

            // reset ui elements
            UIController.clearListItem();
            UIController.setTotalCalories(0);
            UIController.clearEditState();
            UIController.hideList();
        });

        // back from edit mode
        document.querySelector(UISelectors.backBtn).addEventListener('click', function (e) {
            e.preventDefault();
            UIController.clearEditState();
        });
    };

    return {
        init: function () {
            // init storage
            StorageController.setStorageCollection('items');
            let items = StorageController.getItems();

            // fetch item from data structure and populate them
            ItemController.setItems(items);
            UIController.populateItemList(items);

            // reset item status
            updateViewStatus();

            // load event listener
            loadEventListeners();
        }
    }
})(ItemController, UIController, StorageController);

App.init();