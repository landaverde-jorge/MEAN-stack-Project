var mongoose = require('mongoose');
var Promise = require('bluebird');

console.log("running")
mongoose.Promise = Promise
module.export = mongoose.connect('mongodb://ds151242.mlab.com:51242/first_db', {
  username: 'jorge_landaverde',
  password: 'foootball101'
});
