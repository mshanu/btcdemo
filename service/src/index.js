let app = require('express')(),
  http = require('http').Server(app),
  bodyParser = require('body-parser'),
  block = require('./controller/block')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/blocks', block.create);
app.get('/blocks/last', block.last);
app.get('/blocks', block.list);

http.listen(3000, () => console.log("Server listening "))
