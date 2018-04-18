const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyparser = require('body-parser');

const app = express();



const port = 2700;

app.listen(port, () => console.log('listening on port ', port));
