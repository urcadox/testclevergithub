const http = require('http');

function handleRequest(request, response) {
  console.log(request.method + " - " + request.url);
  var body = [];
  request.on('data', function(chunk) { body.push(chunk); }).on('end', function() {
    body = Buffer.concat(body).toString();
    console.log(body);
  });
  response.end('Hello again.');
}

var server = http.createServer(handleRequest);

server.listen(8080, function() {
  console.log('Server listening on 8080');
});
