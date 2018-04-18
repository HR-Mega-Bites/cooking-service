const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false});

const port = 2700;

app.listen(port, () => console.log('listening on port ', port));
