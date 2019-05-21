'use strict'
const http = require('http');
const config = require('config');

const app = require('./main');

const HOST = process.env.HOST || config.get('host');
const PORT = process.env.PORT || config.get('port');
const SERVER = http.createServer(app);

SERVER.listen(PORT, () => {
  console.log(`[ROOT] URL: http://${HOST}:${PORT}`);
  console.log(`[SWAGGER EXPLORER] URL: http://${HOST}:${PORT}/api/docs`);
});
