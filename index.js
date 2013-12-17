var async = require('async');

var fs    = require('fs');

function search(paths, callback) {
  var out = [];
  
  function iter(path, next) {
    function readdir(err, names){
      if (names) for (var i in names) {
        var name = names[i];
        out.push(name);
      }
      next(err);
    }
    
    function stat(err, stat) {
      if (err) return next();
      if (stat.isDirectory()) 
        fs.readdir(path, readdir);
      else next(err);
    }

    fs.stat(path, stat);
  }

  function done(err) {
    callback(err, out);
  }
  
  async.each(paths, iter, done);
}

module.exports = search;
