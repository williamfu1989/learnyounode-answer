var readDirectory = require('./e6-module.js');

readDirectory(process.argv[2], process.argv[3], (err, data) => {
  if(err)
    return console.log(err);
  data.forEach((file)=>{
    console.log(file);
  });
});
