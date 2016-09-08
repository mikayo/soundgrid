var http = require('http');

const PORT = 8080;

function handleRequest(request, response) {
  response.end(request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("server listening on: http://localhost:%s", PORT);
});
