const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// import middleware
const upload = require("./upload");

const PORT = 9000;

//Setup a route for fileupload

app.post("/upload", upload.single("file"), (req, res) => {
  console.log("File uploaded successfully", req.file);
  res.status(200).json({ message: "File uploaded successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
