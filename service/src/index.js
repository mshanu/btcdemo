let app = require('express')(),
  http = require('http').Server(app),
  bodyParser = require('body-parser'),
  block = require('./controller/block')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/block', block.create);

