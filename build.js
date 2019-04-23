const ncp = require('ncp').ncp;
ncp.limit = 16;
ncp('./package.json', './lib/package.json');
