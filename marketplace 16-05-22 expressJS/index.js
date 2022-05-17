// [] init express
// []init templating
// []creaat hom controller
// []bind routing
// []create data service
// []implement controller

const express = require("express");
const hbs = require("express-handlebars");
const { not404 } = require("./controllers/404");
const { about } = require("./controllers/about");
const { create } = require("./controllers/create");
const { details } = require("./controllers/details");
const { freemarket } = require("./controllers/freemarket");
const { home } = require("./controllers/home");

const app = express();

app.engine(
  "hbs",
  hbs.create({
    extname: ".hbs",
  }).engine
);
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static("static"));

app.get("/", home);
app.get("/about", about);
app.get("/create", create);

app.get("/details/:id", details);
app.get("/freemarket", freemarket);
app.all("*", not404);
app.listen(3000, () => console.log("Server start on port 3000."));
