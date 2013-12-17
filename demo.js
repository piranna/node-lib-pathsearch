var ps = require('./index.js');

ps(['/bin','/usr/bin'], function (err, res) {
  console.log(res);
});
