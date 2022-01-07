var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server, {
	pingTimeout: 1000,
});

app.all('/*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	next();
});

// localhost:3000서버에 접속하면 클라이언트로 메세지을 전송한다
app.get('/', function (req, res) {
	res.sendFile('Hellow Chating App Server');
});

//connection event handler
io.on('connection', function (socket) {
	console.log('Connect from Client: ' + socket);

	socket.on('hello', function (data) {
		console.log('hello from Client: ' + data);
	});

	socket.on('chat', function (data) {
		// 클라이언트에게 메시지를 전송한다
		socket.broadcast.emit('chat', data);
	});
});

server.listen(3001, function () {
	console.log('socket io server listening on port 3000');
});
