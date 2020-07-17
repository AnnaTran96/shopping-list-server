const form = document.querySelector('#shopping-list-form');
const shoppingList = document.querySelector('ul');

form.addEventListener('submit', submitList);

getAllItems();

function getAllItems(){
    fetch('http://localhost:3000/shoppingList')
        .then(r => r.json())
        .then(appendItems)
        .catch(console.warn)
}

function submitList(e) {
    e.preventDefault();

    const shoppingData = {
        item: e.target.item.value,
        price: e.target.price.value
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(shoppingData)
    };

    fetch('http://localhost:3000/shoppingList', options)
        .then(r => r.json())
        .then(appendItem)
        .catch(console.warn)
};

function appendItems(data){
    data.shopItems.forEach(appendItem);
};

function appendItem(shoppingData) {
    const newLi = document.createElement('li');
    newLi.textContent = `Item: ${shoppingData.item}, Price £${shoppingData.price}`
    shoppingList.append(newLi);
};