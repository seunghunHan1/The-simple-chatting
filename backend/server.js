const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const server = require('http').createServer(app);

app.use(cors());
app.use(bodyParser.json());

const Vonage = require('@vonage/server-sdk');
const vonage = new Vonage({
	apiKey: '5b7fb150',
	apiSecret: 'uOmsMSJYorNzC4pO',
});

// localhost:3000서버에 접속하면 클라이언트로 메세지을 전송한다
app.get('/', function (req, res) {
	res.sendFile('Hellow Chating App Server');
});

app.post('/sendSms', function (req, res) {
	function generateRandomCode(n) {
		let str = '';
		for (let i = 0; i < n; i++) {
			str += Math.floor(Math.random() * 10);
		}
		return str;
	}

	const authNumber = generateRandomCode(4);
	const from = req.body.phoneNum;
	const to = req.body.phoneNum;
	const text = `auth-number[${authNumber}] Please enter it in the input field`;
	vonage.message.sendSms(from, to, text, (err, responseData) => {
		if (err) {
			console.log(err);
		} else {
			if (responseData.messages[0]['status'] === '0') {
				console.log(req.body);
				console.log('Message sent successfully.');
			} else {
				console.log('입력 잘못됨');
			}
		}
	});
	res.json(authNumber);
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

const io = require('socket.io')(server, {
	pingTimeout: 1000,
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
