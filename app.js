const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/get-file-size", (req, res) => {
  if (!req.files) {
    return res.status(400).send("No files were uploaded");
  }

  console.log(req.headers["content-length"]);

  var size = {
    size: Number(req.headers["content-length"])
  };

  res.send(JSON.stringify(size));
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});
