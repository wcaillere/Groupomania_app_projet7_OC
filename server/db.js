//Imports packages
const mysql = require('mysql')
require('dotenv').config();

//Creates the connection to MySQL DB
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

//Writes in the console if the connexion is establishes or not
connection.getConnection(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected to the DB');
});

module.exports = connection;