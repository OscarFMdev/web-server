require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Serve static content
app.use( express.static('public') );


app.get('/', (req, res) => {
  res.render('home', {
    name: 'Oscar Fernández Muñoz',
    title: 'Software developer'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Oscar Fernández Muñoz',
    title: 'Software developer'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Oscar Fernández Muñoz',
    title: 'Software developer'
  });
});


app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/back/404.html')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});