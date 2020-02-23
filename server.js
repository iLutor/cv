const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/index.html'));
});

app.get('/cv', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/cv_personal.html'));
});


app.get('/3d', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/cubic_images.html'));
});

app.get('/blog', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/blog.html'));
});

app.get('/e-commerce', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/e_commerce.html'));
});

app.get('/find_nearyou', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/find_nearyou.html'));
});

app.get('/apps', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/apps.html'));
});

app.listen(process.env.PORT || 8000);