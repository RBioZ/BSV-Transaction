/*
Criado por: Jonathan Ryan da Silva
Projeto de pagamentos com BSV

//command: sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt

*/


//Libs e Dependencias
const fs = require('fs');
const options = {
    key: fs.readFileSync(__dirname+'\\certif\\selfsigned.key','utf-8'),
    cert: fs.readFileSync(__dirname+'\\certif\\selfsigned.crt','utf-8')
}
const express = require("express")
const app = express();
const https = require('https').createServer(options,app);
const http = require('http').createServer(app);
const io = require('socket.io')(https);

//Raiz
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html')
});


//Listener
http.listen(8080,function(){
	console.log('Listening on port 8080')
});
https.listen(8443,function(){
	console.log('Listening on port 8443')
});





/*
io.on('connection',(socket)=>{

	//io.on.emit("users","hello")

	socket.on('msg', (msg)=>{
		socket.broadcast.emit('msg',{user:users[socket.id],msg:msg});
		console.log(users)
	})
	socket.on('login',function(data){
		console.log(socket.id+":"+data.userId+' CONNECTED');
		users[String(socket.id)] = data.userId;
	})
	socket.on('disconnect', function(){
		console.log(socket.id+":"+users[socket.id]+' Disconected')
		delete users[socket.id]
	})
})





let counter = 0
setInterval(() => {
	io.to('contador').emit('msg', counter++)
},1000)
*/
//users[id] = req.body.nickname
//socket.join('contador')
//console.log('new connection', socket.id)
//console.log(msg)
//socket.broadcast.emit('msg', socket.id+' connected')