const express = require("express");

const vehicles = require('../data/vehicles')

const list = (req, res) => {
    res.json(vehicles)
}
const show = (req, res) => {
    res.json(vehicles[req.params.id - 1])
}
const create = (req, res) => {
    req.body.id = vehicles.length + 1
    vehicles.push(req.body)
    res.send(vehicles)
}

module.exports = { list, show, create }