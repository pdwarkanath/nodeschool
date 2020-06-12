'use strict'
const http = require('http');

const weburl = process.argv[2];

http.get(weburl, function(resp){
	resp.setEncoding('utf8');
	resp.on('data', console.log);
	resp.on('error', console.error);
}).on('error', console.error)