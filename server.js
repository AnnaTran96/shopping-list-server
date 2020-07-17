const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const server = express();
const port = 3000;

server.use(express());
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

server.listen(port, () => console.log(`This is the server: http://localhost:${port}`));

server.get('/', (req, res) => {
    res.send('Hello Client!')
})

server.get('/shoppingList', (req, res) => {
    res.send(JSON.stringify(shoppingList));
})

server.post('/shoppingList', (req, res) => {
    const newItem = JSON.parse(req.body);
    shoppingList.push(newItem);
    res.send(JSON.stringify(newItem))
})