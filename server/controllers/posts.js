//Imports DB's connection and packages
const connection = require('../db');

//Gets all posts of the Data Base
exports.getAllPosts = (req, res, next) => {
    connection.query(`SELECT * FROM posts`, function (error, results, fields) {
        if (error) {
            res.status(500).json({ error })
        } else {
            res.status(200).json(results)
        }
    })
}

//Gets one post of the Data Base thanks to its ID
exports.getOnePost = (req, res, next) => {
    connection.query(`SELECT * FROM posts WHERE id_posts = ${req.params.id}`, function (error, results, fields) {
        if (error) {
            res.status(500).json({ error })
        } else {
            res.status(200).json(results)
        }
    })
}

// Creates one post of the Data Base thanks to its ID
    // connection.query(`INSERT INTO posts (content, image_url) VALUES ()`, function (error, results, fields) {
    //     if (error) {
    //         res.status(500).json({ error })
    //     } else {
    //         res.status(200).json(results)
    //     }
    // })
// }