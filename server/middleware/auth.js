/** @format */

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    const userId = decodedToken.userId;
    //This auth ID is saved in the req to be used by controllers
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ message: "erreur d'authentification" });
  }
};
