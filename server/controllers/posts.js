//Imports DB's connection and packages
const connection = require('../db');
const fs = require('fs');

//Gets all posts of the Data Base
exports.getAllPosts = (req, res, next) => {
  connection.query(
    `SELECT p.id_posts, p.content, p.image_url, DATE_FORMAT(p.date, "%d/%m/%Y, %H:%i") AS date, u.id_users, u.firstname, u.lastname, u.is_admin, GROUP_CONCAT(a.users_id_users) AS likes
    FROM posts p
      JOIN users u
        ON p.users_id_users = u.id_users
      LEFT JOIN appreciate a
        ON p.id_posts = a.posts_id_posts
      GROUP BY p.id_posts
    ORDER BY date DESC;`,
    function (error, results, fields) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(results);
      }
    }
  );
};

//Gets one post of the Data Base thanks to its ID
exports.getOnePost = (req, res, next) => {
  connection.query(
    `SELECT p.id_posts, p.content, p.image_url, DATE_FORMAT(p.date, "%d/%m/%Y, %H:%i") AS date, u.id_users, u.firstname, u.lastname, u.is_admin, GROUP_CONCAT(a.users_id_users) AS likes
    FROM posts p
      JOIN users u
        ON p.users_id_users = u.id_users
      LEFT JOIN appreciate a
        ON p.id_posts = a.posts_id_posts
      WHERE id_posts = ?`,
    [req.params.id],
    function (error, results, fields) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(results);
      }
    }
  );
};

// Creates one post in the Data Base
exports.createOnePost = (req, res, next) => {
  //Verifies if there is a file in the request cause of multer
  const postObject = req.file
    ? {
        content: req.body.content,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { content: req.body.content };
  connection.query(
    `INSERT INTO posts (content, image_url, date, users_id_users) VALUES (? , ? , NOW(), ?)`,
    [postObject.content, postObject.imageUrl, req.auth.userId],
    function (error, results, fields) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json({ message: 'post créé !' });
      }
    }
  );
};

// Modifies one post of the Data Base thanks to its ID
exports.modifyOnePost = (req, res, next) => {
  connection.query(
    `SELECT * FROM posts WHERE id_posts = ?`,
    [req.params.id],
    function (error, results, fields) {
      if (results[0].users_id_users != req.auth.userId) {
        res.status(403).json({ message: 'Unauthorized request' });
      } else {
        //Verifies the nature of the modification
        const postObject = req.file
          ? {
              //If there is a file in the req, it's to add a image or change the previous one
              content: req.body.content,
              imageUrl: `${req.protocol}://${req.get('host')}/images/${
                req.file.filename
              }`,
            }
          : req.body.image == 'null'
          ? {
              //If req.body.image == null, it's to delete the previous image
              content: req.body.content,
              imageUrl: null,
            }
          : {
              //If req.body.image == 'pas de changement', it's to not modify the imageUrl of the post
              content: req.body.content,
              imageUrl: results[0].image_url,
            };
        if (
          req.body.image == 'null' ||
          (req.file && results[0].image_url != null)
        ) {
          //if the image is changed or deleted, it's deleted from the 'images' file
          const filename = results[0].image_url.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {});
        }
        connection.query(
          `UPDATE posts SET content = ? , image_url = ? WHERE id_posts = ?`,
          [postObject.content, postObject.imageUrl, req.params.id],
          function (error, results, fields) {
            if (error) {
              res.status(500).json({ error });
            } else {
              res.status(200).json({ message: 'post modifié !' });
            }
          }
        );
      }
    }
  );
};

// Deletes one post of the Data Base thanks to its ID
exports.deleteOnePost = (req, res, next) => {
  connection.query(
    `SELECT * FROM posts WHERE id_posts = ?`,
    [req.params.id],
    function (error, post, fields) {
      if (error) {
        res.status(500).json({ error });
      } else {
        connection.query(
          `SELECT is_admin FROM users WHERE id_users = ?`,
          [req.auth.userId],
          function (error, user, fields) {
            if (error) {
              res.status(500).json({ error });
            } else {
              if (
                post[0].users_id_users == req.auth.userId ||
                user[0].is_admin == 1
              ) {
                if (post[0].image_url != null) {
                  const filename = post[0].image_url.split('/images/')[1];
                  fs.unlink(`images/${filename}`, () => {});
                }
                connection.query(
                  `DELETE FROM posts WHERE id_posts = ?`,
                  [req.params.id],
                  function (error, results, fields) {
                    if (error) {
                      res.status(500).json({ error });
                    } else {
                      res.status(200).json({ message: 'post supprimé !' });
                    }
                  }
                );
              } else {
                res.status(403).json({ message: 'Unauthorized request' });
              }
            }
          }
        );
      }
    }
  );
};

//Manage the "like" functionnality of posts
exports.manageLike = (req, res, next) => {
  if (req.body.like == 1) {
    // if req.body.like == 1, the post is liked
    connection.query(
      `INSERT INTO appreciate (users_id_users, posts_id_posts) VALUES (?, ?)`,
      [req.body.userId, req.params.id],
      function (error, results, fields) {
        if (error) {
          if (error.errno == 1062) {
            res.status(500).json({ message: 'Vous avez déjà liké ce post' });
          } else {
            res.status(500).json({ error });
          }
        } else {
          res.status(200).json({ message: 'post liké' });
        }
      }
    );
  } else if (req.body.like == 0) {
    // if req.body.like == 0, the post's like is removed
    connection.query(
      `DELETE FROM appreciate WHERE users_id_users = ? AND posts_id_posts = ?`,
      [req.body.userId, req.params.id],
      function (error, resutls, fields) {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(200).json({ message: 'like retiré' });
        }
      }
    );
  } else {
    res.status(400).json({ message: 'Requête invalide' });
  }
};
