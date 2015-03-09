var origin = 'wisenynjas.com:80,www.wisenynjas.com:80';
	ip = process.env.OPENSHIFT_NODEJS_IP;

var http = require('http'),
	express = require('express'),
	MiunaShoutServer = require('./lib/miunashout-server'),
	app = express();

var server = http.createServer(app).listen(port, ip);
MiunaShoutServer.listen(server);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});
