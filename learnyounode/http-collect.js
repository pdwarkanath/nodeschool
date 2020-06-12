'use strict'
const https = require('https');
const bl = require('bl');
const weburl = process.argv[2];

https.get(weburl, function(resp){
	resp.pipe(bl(function (err, data) {
		if (err){
			return console.error(err);
		} 
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})

