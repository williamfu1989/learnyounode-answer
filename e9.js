var http = require('http')
var async = require('async')
var bl = require('bl')
async.waterfall([
  (callback)=> {
    http.get(process.argv[2], (res) => {
      res.pipe(bl((err, data) => {
        if (err)
          return console.err(err);
        console.log(data.toString());
        callback(null);
      }));
    });
  },
  (callback)=> {
    http.get(process.argv[3], (res) => {
      res.pipe(bl((err, data) => {
        if (err)
          return console.err(err);
        console.log(data.toString());
        callback(null);
      }));
    });
  },
  (callback)=> {
    http.get(process.argv[4], (res) => {
      res.pipe(bl((err, data) => {
        if (err)
          return console.err(err);
        console.log(data.toString());
        callback(null);
      }));
    });
  }
], (err, result)=>{
});
