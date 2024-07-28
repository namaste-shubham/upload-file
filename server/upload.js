const multer = require("multer");

// Setup Storage for uploaded file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Create multer instance
const upload = multer({ storage: storage });

module.exports = upload;
