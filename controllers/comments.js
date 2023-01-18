const express = require("express");

const comments = require('../data/comments')

const list = (req, res) => {
    res.json(comments)
}
const show = (req, res) => {
    res.json(comments[req.params.id - 1])
}
const create = (req, res) => {
    req.body.id = comments.length + 1
    comments.push(req.body)
    res.send(comments)
}

module.exports = { list, show, create }