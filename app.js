var express = require('express');
var app = express();

//ルートパスにアクセスされると、「HelloWorld」という文字列を返却する
app.get('/', function(req, res) {
  res.send('Hello World');
});

//サーバの起動
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
