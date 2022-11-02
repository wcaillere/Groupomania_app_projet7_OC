/** @format */

const multer = require("multer");

//Configuration of multer
const storage = multer.memoryStorage();

module.exports = multer({ storage }).single("image");
