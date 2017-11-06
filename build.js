var ncp = require('ncp').ncp;
 
ncp.limit = 16;
 
ncp('./node_modules/html5-boilerplate/dist', './', function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});