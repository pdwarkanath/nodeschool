'use strict'
const filterDir = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];


filterDir(dir, ext, function(err, lst){
	if (err){
		console.log('There was an error:', err)
	}
	console.log(lst.join('\n'));
	
})