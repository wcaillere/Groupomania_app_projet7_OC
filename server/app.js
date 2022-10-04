//Imports packages
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

//Imports routes
const userRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts');

//Creates and configures express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use('/api/auth', userRoutes);
app.use('/api/posts', postsRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
