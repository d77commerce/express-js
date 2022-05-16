const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const hbs = handlebars.create({
  extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;
const products = [
  { name: 'pen', price: 2 },
  { name: 'pencel', price: 3 },
  { name: 'cup', price: 5 },
  { name: 'plate', price: 15 },
];
app.get('/', (req, res) => {
  res.locals = {
    test: 'one Test',
  };
  if (visitors === 0) {
    res.render('home', { count: 'You are first visitor!' });
  } else {
    res.render('home', { count: visitors });
  }
  visitors++;
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/shop', (req, res) => {
  res.locals = {
    products,
  };
  res.render('shop');
});

app.listen(3000, function () {
  console.log('server start - localhost 3000');
});
