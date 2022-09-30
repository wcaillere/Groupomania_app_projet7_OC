//import packages
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Create and configure express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet())

module.exports = app;