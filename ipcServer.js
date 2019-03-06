var net = require('net');

var server = net.createServer(function(socket){
  socket.on('data',function(){
    socket.write("你好！")
  });
  socket.on('end',function(){
    socket.write("链接断开")
  });
  socket.write("欢迎光临TCP服务：")
});
server.listen('./echo.sock')