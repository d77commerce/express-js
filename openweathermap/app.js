const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const query = req.body.one;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=80e7859ec4c575539355c01c488a6352&units=metric`;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const iconImige = weatherData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconImige}@2x.png`;
      res.write("<p>" + temp + "</p>");
      res.write("<h1>" + weatherDescription + "</h1>");
      res.write("<img src=" + iconUrl + ">");
      console.log(temp);
      console.log(weatherDescription);
      res.send();
    });
  });

  console.log(req.body.one);
  console.log(url);
  // console.log("input");
});
app.listen(3000, function () {
  console.log("server start");
});
