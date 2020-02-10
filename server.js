const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname);
app.use(express.static(__dirname + '/'));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));

});

app.listen(8080);