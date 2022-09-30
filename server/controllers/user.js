//Imports DB's connection
const connection = require('../db')

//Allows an user to signup on the site if he's not
exports.signup = (req, res, next) => {
    connection.query('CREATE TABLE test(id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY)', function (error, results, fields) {
        if (error) {
            res.status(500).json({error})
        } else {
            res.status(200).json({message: 'table créée'})
        }
    });
}