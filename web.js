var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buff = fs.readFileSync('index.html');
var str = buff.toString('utf-8');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
    response.send(str);
});

var port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on " + port);
});
