var async = require('async');

var fs    = require('fs');

function search(paths, callback) {
  var out = [];
  
  function iter(path, next) {
    fs.readdir(path, function (err, names){
      if (names) for (var i in names) {
        var name = names[i];
        out.push(name);
      }
      next(err);
    });
  }

  function done(err) {
    callback(err, out);
  }
  
  async.each(paths, iter, done);
}

module.exports = search;
