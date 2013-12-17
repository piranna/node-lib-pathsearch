var ps = require('./index.js');

ps('pw', ['/bin','/usr/bin', '/dev/null', '/lakjsdf'], function (err, res) {
  if (err) console.log(err);
  console.log(res);
});
