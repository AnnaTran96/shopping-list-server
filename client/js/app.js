const form = document.querySelector('#shopping-list-form');
const shoppingList = document.querySelector('ul');
// const btn = document.querySelector('#delete');

form.addEventListener('submit', submitList);
// btn.addEventListener('click', deleteItem);

// Display all the items that has been added by the user

getAllItems();

function getAllItems(){
    fetch('http://localhost:3000/shoppingList')
        .then(r => r.json())
        .then(appendAllItems)
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
        .then(r => r.json()) // As this is a HTTP response, we want to extract JSON body content from the response
        .then(appendItem) 
        .catch(console.warn)
};

function appendAllItems(data){
    data.shoppingList.forEach(appendItem); 
    console.log(data.shoppingList);
};

function appendItem(shoppingData) {
    const newLi = document.createElement('li');
    newLi.textContent = `Item: ${shoppingData.item}, Price £${shoppingData.price}`
    shoppingList.append(newLi);
};

// function deleteItem(e) {
//     e.preventDefault();

//     const deleteData = {
//         item: e.target.item.value,
//         price: e.target.price.value
//     };

//     const options = {
//         method: 'DELETE',
//         body: JSON.stringify(deleteData)
//     };

//     fetch('http://localhost:3000/shoppingList/:id', options)
//         .then(r => r.json()) // As this is a HTTP response, we want to extract JSON body content from the response
//         .then(removeItem) 
//         .catch(console.warn)        
// }

// function removeItem(delete){
//     const lastItem = document.querySelector('li').lastElementChild;
//     lastItem.remove();
// }