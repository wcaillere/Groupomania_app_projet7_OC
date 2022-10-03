//Imports packages
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Imports routes
const userRoutes = require('./routes/user')
const postsRoutes = require('./routes/posts')

//Creates and configures express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet())

app.use('/api/auth', userRoutes);
app.use('/api/posts', postsRoutes);

module.exports = app;