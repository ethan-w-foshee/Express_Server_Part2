const express = require("express");

const contacts = require('../data/contacts')

const list = (req, res) => {
    res.json(contacts)
}
const show = (req, res) => {
    res.json(contacts[req.params.id - 1])
}
const create = (req, res) => {
    req.body.id = contacts.length + 1
    contacts.push(req.body)
    res.send(contacts)
}

module.exports = { list, show, create }