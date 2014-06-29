var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  videoResource = require('./lib/videoResource');

app.use(bodyParser.json());

app.post('/videos', videoResource.post);
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});