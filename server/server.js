const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
console.log(db);
app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.get('/recipe', (req, res) => {
  // if(err) {
  //   console.error('didnt work');
  // } else {
    console.log('server contacted database again');
    // console.log(db.getRecipe(4));
    // console.log(results);
    // console.log()
    res.send(db.getRecipe(4));
  // }
});

const port = 3100;

app.listen(port, () => console.log('listening on port ', port));
