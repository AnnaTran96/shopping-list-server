const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
const port = 3000;

server.use(cors());
server.use(bodyParser.text());

const shoppingList = [
    {
    item: "milk",
    price: 1
    },
    {
        item: "drinks",
        price: 10   
    }
];

server.get('/', (req, res) => {
    res.send('Hello Client!')
})

server.get('/shoppingList', (req, res) => {
    res.send(JSON.stringify({ shoppingList })); // Sends data that we have on shopping list
})

server.post('/shoppingList', (req, res) => {
    const newItem = JSON.parse(req.body); // Get the request body & turn it into JSON
    shoppingList.push(newItem);
    res.send(JSON.stringify(newItem))
})

server.delete('/shoppingList/:id', (req, res) => { 
    // newItem = JSON.parse(req.body);
    // shoppingList.pop(newItem);
})

server.listen(port, () => console.log(`This is the server: http://localhost:${port}`));