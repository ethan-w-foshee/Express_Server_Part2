const express = require("express");

const products = require('../data/products')

const list = (req, res) => {
    res.json(products)
}
const show = (req, res) => {
    res.json(products[req.params.id - 1])
}
const create = (req, res) => {
    req.body.id = products.length + 1
    products.push(req.body)
    res.send(products)
}

module.exports = { list, show, create }