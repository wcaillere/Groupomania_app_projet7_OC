/** @format */

const multer = require("multer");

//Configuration of multer : in this case, memoryStorage is used instead of diskStorage, to obtain a buffer for the image used by sharp in the next middleware. The save of the image in the folder 'images' is also done by sharp.
const storage = multer.memoryStorage();

module.exports = multer({ storage }).single("image");
