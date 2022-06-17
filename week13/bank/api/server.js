const express = require("express");
const fs = require("fs");
const app = express();

const cors = require("cors");
const PORT = 4040;

let users = [];

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}

app.use(cors());
app.get("/users", (req, res) => {
  let arr = [];
  jsonReader("../data/users.json", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    users = data;
    console.log(users); // => "Infinity Loop Drive"
  });

  res.json(users);
});

app.listen(PORT, () => {
  console.log("server work");
});
