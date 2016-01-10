var http = require('http');
var bl = require('bl')
http.get(process.argv[2], (res) => {
  res.pipe(bl((err, data) => {
    if (err)
      return console.err(err);
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
