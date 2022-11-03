/** @format */

const sharp = require("sharp");

//Possible mime types for uploaded images
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};

module.exports = async (req, res, next) => {
  if (req.file) {
    const name = req.file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[req.file.mimetype];
    const path = name + Date.now() + "." + extension;
    await sharp(req.file.buffer)
      .resize({ width: 520 })
      .toFile(`./images/${path}`);
    //the new name of the file is saved in the req, to be used by controllers
    req.file.filename = path;
  }
  next();
};
