//Imports DB's connection and packages
const connection = require('../db');

//Gets all posts of the Data Base
exports.getAllPosts = (req, res, next) => {
  connection.query(`SELECT * FROM posts`, function (error, results, fields) {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(200).json(results);
    }
  });
};

//Gets one post of the Data Base thanks to its ID
exports.getOnePost = (req, res, next) => {
  connection.query(
    `SELECT * FROM posts WHERE id_posts = ${req.params.id}`,
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
  // connection.query(`INSERT INTO posts (content, image_url) VALUES (? , ?)`, function (error, results, fields) {
  //     if (error) {
  //         res.status(500).json({ error })
  //     } else {
  //         res.status(200).json({message : "post créé !"})
  //     }
  // })
};

// Modifies one post of the Data Base thanks to its ID
exports.modifyOnePost = (req, res, next) => {
  // connection.query(`UPDATE users SET content = ? , imageUrl = ? WHERE id_posts = req.params.id`, function (error, results, fields) {
  //     if (error) {
  //         res.status(500).json({ error })
  //     } else {
  //         res.status(200).json({message : "post modifié !"})
  //     }
  // })
};

// Deletes one post of the Data Base thanks to its ID
exports.deleteOnePost = (req, res, next) => {
  // connection.query(`SELECT users_id_users FROM posts WHERE id_posts = ${req.params.id}`, function (error, results, fields) {
  //     if (results[0].users_id_users != req.auth.userId) {
  //         res.status(403).json({message: 'Unauthorized request'})
  //     } else {
  connection.query(
    `DELETE FROM posts WHERE id_posts = ${req.params.id}`,
    function (error, results, fields) {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json({ message: 'post supprimé !' });
      }
    }
  );
  // }
  //     })
};

//Manage the "like" functionnality of posts
exports.manageLike = (req, res, next) => {
  if (req.body.like == 1) {
    connection.query(
      `INSERT INTO appreciate (users_id_users, posts_id_posts) VALUES (${req.body.userId}, ${req.params.id})`,
      function (error, results, fields) {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.status(200).json({ message: 'post liké' });
        }
      }
    );
  } else if (req.body.like == 0) {
    connection.query(
      `DELETE FROM appreciate WHERE users_id_users = ${req.body.userId} AND posts_id_posts = ${req.params.id}`,
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
