const express = require("express");
const userRouter = require("./routers/userRouter");

const app = express();

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.use(userRouter);

module.exports = app;
