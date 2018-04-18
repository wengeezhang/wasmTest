const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	if (req.url.indexOf('.html') > -1) {

		res.setHeader('Content-Type', 'text/html');
		res.end(fs.readFileSync('./main.html'));
	} else if (req.url.indexOf('.js') > -1) {
		res.setHeader('Content-Type', 'application/javascript');
		res.end(fs.readFileSync('./main.js'));
	} else if (req.url.indexOf('.wasm') > -1) {
		res.setHeader('Content-Type', 'application/wasm');
		res.end(fs.readFileSync('./test.wasm'));
	}
});


const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});