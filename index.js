const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4000;
const contacts = require('./routes/contacts')
const comments = require('./routes/comments')
const products = require('./routes/products')
const vehicles = require('./routes/vehicles')

/* App Use Statements */
app.use('/comments', comments)
app.use('/contacts', contacts)
app.use('/vehicles', vehicles)
app.use('/products', products)

/* App listening test*/
app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});

