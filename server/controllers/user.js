//Imports DB's connection and packages
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Allows an user to signup on the site if he's not
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      connection.query(
        `INSERT INTO users (firstname, lastname, email, password) VALUES ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${hash}')`,
        function (error, results, fields) {
          if (error) {
            res.status(500).json({ error });
          } else {
            res.status(200).json({ message: 'utilisateur créé' });
          }
        }
      );
    })
    .catch((error) => res.status(500).json({ error }));
};

//Allows an user to login on the site if he's in the Data Base
exports.login = (req, res, next) => {
  connection.query(
    `SELECT id_users, password FROM users WHERE email = '${req.body.email}'`,
    function (error, results, fields) {
      if (error) {
        console.log(error);
        res.status(500).json({ error });
      } else if (results.length == 0) {
        res
          .status(401)
          .json({ message: 'Paire email/mot de passe invalide !' });
      } else {
        bcrypt
          .compare(req.body.password, results[0].password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: 'Paire email/mot de passe invalide !' });
            } else {
              res.status(200).json({
                userId: results[0].id_users,
                token: jwt.sign(
                  { userId: results[0].id_users },
                  process.env.TOKEN_KEY,
                  { expiresIn: '1h' }
                ),
              });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    }
  );
};
