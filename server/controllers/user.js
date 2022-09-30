//Imports DB's connection
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Allows an user to signup on the site if he's not
exports.signup = (req, res, next) => {
    bcrypt.hash('pierre', 10)
    .then(hash => {
        connection.query(`INSERT INTO users (firstname, lastname, email, password) VALUES ('john', 'doe', 'John.de@mailcom', '${hash}')`, function (error, results, fields) {
            if (error) {
                res.status(500).json({ error })
            } else {
                res.status(200).json({ message: 'utilisateur créé' })
            }
        })
    })
    .catch(error => res.status(500).json({ error }))
}