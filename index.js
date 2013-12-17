var async = require('async');

var fs    = require('fs');

function search(match, paths, callback) {
  var out = [];
  
  function iter(path, next) {
    function readdir(err, names){
      if (names) for (var i in names) {
        var name = names[i];
        if (name.length < match) return;
        if (name.substr(0, match.length) === match) out.push(name);
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
