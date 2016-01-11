var http = require('http')
var url = require('url')

parsetime = (time) => {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
};

unixtime = (time) => {
  return {"unixtime": time.getTime()}
};

var server = http.createServer((req, res) => {
  if(req.method != 'GET')
    return res.end('err')
  res.writeHead(200, { 'Content-Type': 'application/json' });
  requestUrl = url.parse(req.url, true);
  time = new Date(requestUrl.query.iso);
  console.log(time)

  if("/api/parsetime" === requestUrl.pathname)
    res.end(JSON.stringify(parsetime(time)));

  if("/api/unixtime" === requestUrl.pathname)
    res.end(JSON.stringify(unixtime(time)));

});

server.listen(process.argv[2]);

