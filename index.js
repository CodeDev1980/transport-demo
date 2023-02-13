const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
const server = require('http');
const router = require('./routes/index');

require('dotenv').config();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

const port = process.env.PORT;
app.get('http://localhost:3000',  (req, res, next) => {
    res.redirect(301, 'http://localhost:3000');
});
app.listen(port || 3300, () => {
    console.log(`App listening on ${port}`)
});

app.use('/', router);

app.use((req, res) => res.render('error'))