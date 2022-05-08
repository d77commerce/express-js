const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
app.get("/calc", (req, res) => {
  res.send("<h1>calculator</h1>");
});
app.get("/bmicalcolator", (req, res) => {
  res.sendFile(__dirname + "/bmicalc.html");
});
app.post("/bmicalcolator", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let result = weight / (height + height);
  res.send(`Your Body Mass Index is ${result}`);
});
app.listen(3000, function () {
  console.log("server start");
});
