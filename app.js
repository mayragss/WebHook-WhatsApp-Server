
var http = require('http');
var express = require('express');
var MessagingResponse = require('twilio').twiml.MessagingResponse;

var app = express();

app.get('/', function(req, res){
  console.log('entrou');
  res.send("Servidor no ar");
});

app.post('/', function(req, res) {
  const twiml = new MessagingResponse();

  twiml.message('Não responda mensagens por aqui. Se tiver alguma dúvida entre em contacto com nossos operadores. Contacto: +244 92334541!');
  
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

//criando o servidor
http.createServer(app).listen(process.env.PORT || 1337, function () {
  console.log("Whatsapp response deafut server listening on port 1337");
});