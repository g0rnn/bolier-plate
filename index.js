const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://gyunh01:user1234@cluster0.64hubyb.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreatIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(`Example app listening on port ${port}!`));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
