'use strict'
const https = require('http');
const bl = require('bl');
const results = [];
let count = 0;
const maxCount = process.argv.length - 2;

function printFinal(results) {
  for (let i = 0; i < results.length; i++) {
    console.log(results[i])
  }
}

function httpsget(idx){
	const weburl = process.argv[idx+2];
	https.get(weburl, function(resp){
		resp.pipe(bl(function (err, data) {
			if (err){
				return console.error(err);
			} 
			results[idx] = data.toString();
			count += 1;
			if (count === maxCount) {
	        printFinal(results);
	      }
		}))
	})
}

for (let i = 0; i < maxCount; i++){
	httpsget(i);
}