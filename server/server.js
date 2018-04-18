const express = require('express');
const path = require('path');
const axios = require('axios');
<<<<<<< HEAD
const bodyParser = require('body-parser');
=======
const bodyparser = require('body-parser');
>>>>>>> 8d841ec295253037850d747731b09b6b91165ee9

const app = express();

app.use(express.static(path.join(__dirname, '../public/dist')));

app.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false});

const port = 2700;

app.listen(port, () => console.log('listening on port ', port));
