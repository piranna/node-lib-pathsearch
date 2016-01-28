var fs = require('fs')

var eachSeries = require('async').eachSeries


function search(match, paths, callback)
{
  var out = []

  function filterName(name)
  {
    return name.substr(0, match.length) === match
  }

  eachSeries(paths, function(path, next)
  {
    function readdir(err, names)
    {
      if(err) return next(err)

      names = names.filter(filterName)

      if(names.length) out = out.concat(names, '')

      next()
    }

    fs.stat(path, function(err, stat)
    {
      if(err || !stat.isDirectory()) return next()

      fs.readdir(path, readdir)
    })
  },
  function(err)
  {
    if(out[out.length-1] === '') out.pop()

    callback(err, out)
  })
}


module.exports = search
