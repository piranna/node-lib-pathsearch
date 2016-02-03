var fs = require('fs')

var eachSeries = require('async').eachSeries


/**
 * Get executable names from `paths` folders that match with the required one
 *
 * @param {string} match
 * @param {Array} paths
 * @param {Function} callback
 */
function search(match, paths, callback)
{
  var out = []

  /**
   * Filter names that match the current search and has not been included before
   *
   * @param {string} name
   */
  function filterName(name)
  {
    return name.substr(0, match.length) === match && out.indexOf(name) < 0
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
