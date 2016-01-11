var net = require('net')

zeroFill = (value) => {
  return value >=10 ? value : "0"+value
}

getFormatedDate = () => {
  var date = new Date();
  var day = zeroFill(date.getDate());
  var month = zeroFill(date.getMonth()+1);
  var year = zeroFill(date.getFullYear());
  var hour = zeroFill(date.getHours());
  var minute = zeroFill(date.getMinutes());
  return (year+"-"+ month +"-"+day+" "+ hour + ":" + minute)
};

var server = net.createServer((socket) => {
  socket.end(getFormatedDate());
});

server.listen(process.argv[2]);
