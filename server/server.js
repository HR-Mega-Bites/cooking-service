const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
console.log(db);
app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.get('/recipe', (req, res) => {
    db.getRecipe(4, res);

    // res.send(db.getRecipe(4));
  // }
});

const port = 3300;

app.listen(port, () => console.log('listening on port ', port));
module.exports.app = app
