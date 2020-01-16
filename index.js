var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 7000;

app.get('/' , function(req, res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
    socket.on('message',function(msg){
        console.log('message: ' + msg);
		io.emit('message',msg);
    });

	////
	// ブラウザから画像を受け取る
  	socket.on( 'image', function ( imageData ) {
    	// ブラウザから受け取った画像をもう一方のブラウザへ送る
    	io.emit( 'image', imageData );
  	});
////

});

http.listen(PORT, function(){
    console.log('server listening. Port:' + PORT);
});
