const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));

});

app.get('/3d', function (req, res) {
  //res.sendFile(path.join(__dirname + '/lutor.html'));
  res.sendFile(path.join(__dirname + '/cubic_images.html'));

});
app.listen(process.env.PORT || 8000);