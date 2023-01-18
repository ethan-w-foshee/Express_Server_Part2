const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4000;
const contacts = require('./data/contacts')
const comments = require('./data/comments')
const products = require('./data/products')
const vehicles = require('./data/vehicles')

app.use(express.json())

/* App Get Statements*/
app.get(`/contacts`, (req,res) => {
    res.json(contacts)
})

app.get(`/vehicles`, (req,res) => {
    res.json(vehicles)
})

app.get(`/comments`, (req,res) => {
    res.json(comments)
})

app.get(`/products`, (req,res) => {
    res.json(products)
})

app.get(`/contacts/:id`, (req,res) => {
    res.json(contacts[req.params.id - 1])
})

app.get(`/vehicles/:id`, (req,res) => {
    res.json(vehicles[req.params.id - 1])
})

app.get(`/comments/:id`, (req,res) => {
    res.json(comments[req.params.id - 1])
})

app.get(`/products/:id`, (req,res) => {
    res.json(products[req.params.id - 1])
})

/* App Post Statements*/

app.post(`/products`, (req,res) => {
    req.body.id = products.length + 1
    products.push(req.body)
    res.send(products)
})

app.post(`/comments`, (req,res) => {
    req.body.id = comments.length + 1
    comments.push(req.body)
    res.send(comments)
})

app.post(`/vehicles`, (req,res) => {
    req.body.id = vehicles.length + 1
    vehicles.push(req.body)
    res.send(vehicles)
})

app.post(`/contacts`, (req,res) => {
    req.body.id = contacts.length + 1
    contacts.push(req.body)
    res.send(contacts)
})

/* App listening test*/
app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

