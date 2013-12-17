var ps = require('./index.js');

ps(['/bin','/usr/bin', '/dev/null'], function (err, res) {
  if (err) console.log(err);
  console.log(res);
});
