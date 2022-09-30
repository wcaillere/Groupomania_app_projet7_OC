//imports packages
const app = require('./app');
const mysql = require('mysql');
require('dotenv').config();

//returns a port. Val can be a string or a Number
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
  const port = normalizePort(process.env.API_PORT || '3000');
  app.set('port', port);

//Creates the connection to MySQL DB
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
});

//Establishes the connection
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});

// connection.end(function(err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('connection endend');
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});