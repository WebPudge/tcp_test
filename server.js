var net = require('net');

var server = net.createServer(function(socket){
  socket.on('data',function(data){
    console.log(data.toString())
    socket.write("你好！")
  });
  socket.on('end',function(){
    socket.write("链接断开")
  });
  socket.write("欢迎光临TCP服务：")
});
server.listen(8124,function(){
  console.log('server bound')
})