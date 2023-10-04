const express = require("express");
const app = express();
const port = 3000;

const config = require("./config/key");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreatIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(`Example app listening on port ${port}!`));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
