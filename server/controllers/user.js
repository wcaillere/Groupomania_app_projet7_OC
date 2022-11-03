/** @format */

//Imports DB's connection and packages
const connection = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * Capitalizes a string
 * @param {string} string
 * @returns string capitalized
 */
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

//Allows an user to signup on the site if he's not
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      connection.query(
        `INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
        [
          capitalize(req.body.firstname),
          capitalize(req.body.lastname),
          req.body.email,
          hash,
        ],
        function (error, results, fields) {
          if (error) {
            //SQL error 1062 is a "Duplicate entry" error
            if (error.errno === 1062) {
              res.status(500).json({ message: "Vous êtes déjà inscrit !" });
            } else {
              res.status(500).json({ error });
            }
          } else {
            res.status(200).json({ message: "Inscription réussie !" });
          }
        }
      );
    })
    .catch((error) => res.status(500).json({ error }));
};

//Allows an user to login on the site if he's in the Data Base
exports.login = (req, res, next) => {
  console.log(connection);
  connection.query(
    `SELECT id_users, password, is_admin, firstname, lastname FROM users WHERE email = ?`,
    [req.body.email],
    function (error, results, fields) {
      if (error) {
        res.status(500).json({ error });
      }
      // results.length == 0 means that the email is not in the DataBase, so we send a response to end the controller
      else if (results.length == 0) {
        res
          .status(401)
          .json({ message: "Paire email/mot de passe invalide !" });
      } else {
        bcrypt
          .compare(req.body.password, results[0].password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: "Paire email/mot de passe invalide !" });
            } else {
              res.status(200).json({
                isAdmin: results[0].is_admin,
                token: jwt.sign(
                  { userId: results[0].id_users },
                  process.env.TOKEN_KEY,
                  { expiresIn: "1h" }
                ),
                user: {
                  userId: results[0].id_users,
                  userName: `${results[0].firstname} ${results[0].lastname}`,
                },
              });
            }
          })
          .catch((error) => res.status(500).json({ error }));
      }
    }
  );
};
