const itemForm = document.querySelector('.inventory-form');
const itemInput = document.querySelector('.inventory-input');
const itemItemsList = document.querySelector('.custom-items');
let items = [];
itemForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addItem(itemInput.value);
});

function addItem(item) {
    if (item !== '') {
        const newItem = {
            id: Date.now(),
            name: item,
        };
        items.push(newItem);
        addToLocalStorage(items);
        renderItems(items);
        itemInput.value = '';
    }
}

function renderItems(itemList) {
    itemItemsList.innerHTML = '';
    itemList.forEach(function(item) {
        const li = document.createElement('li');
        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);
        li.innerHTML = `
      ${item.name}
      <button class="delete-button">X</button>
    `;
        itemItemsList.append(li);
    });
}

function addToLocalStorage(itemList) {
    localStorage.setItem('items', JSON.stringify(itemList));
    renderItems(itemList);
}

function getFromLocalStorage() {
    const reference = localStorage.getItem('items');
    if (reference) {
        items = JSON.parse(reference);
        renderItems(items);
    }
}
getFromLocalStorage();

itemItemsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-button')) {
        deleteItem(event.target.parentElement.getAttribute('data-key'));
    }
});

function deleteItem(id) {
    items = items.filter(function(item) {
        return item.id !== id;
    });
    addToLocalStorage(items);
}