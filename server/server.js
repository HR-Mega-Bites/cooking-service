const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
console.log(db);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/recipes/:id', express.static('./public/dist'));
app.use(express.static(path.join(__dirname, '../public/dist')));


app.use(bodyParser.json());
// const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.get('/recipes/:id/instructions', (req, res) => {
    db.getRecipe(req.params.id, res);

    // res.send(db.getRecipe(4));
  // }
});

const port = 3700;

app.listen(port, () => console.log('listening on port ', port));
module.exports.app = app
