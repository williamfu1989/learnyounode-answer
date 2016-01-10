var fs = require('fs');
var path = require('path');

module.exports = readDirectory = function(directory, extension, callback){
  fs.readdir(directory, (err, list) => {
    if(err)
      return callback(err)
    var files = new Array()
    list.forEach((file) => {
      if(path.extname(file) === "."+extension)
        files.push(file)
    })
    callback(null, files);
  })
}
