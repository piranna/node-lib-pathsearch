# Path Search

Return all the files available in a series of paths.

## Install

```
npm i --save lib-pathsearch
```

## Usage

```javascript
var ps = require('lib-pathsearch');
ps(['/bin','/usr/bin','/usr/local/bin'], function (err, res) {
  console.log(res);
});

// [ 
//   'a2p',
//   'a2p5.12',
//   'a2p5.16',
//   'addftinfo',
//   'afconvert',
//   'afhash',
//   'afida',
//   'afinfo',
//   'afmtodit',
//   'afplay',
//   'agentxtrap',
//   'agvtool',
//   'alias',
//   'allmemory',
//   'applesingle',
//   'appletviewer',
//   'apply',
//   'apr-1-config',
//   'apropos',
//   'apt',
//   'apu-1-config',
//   'ar',
//   'arch',
//   ...
// ]
```
