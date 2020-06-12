'use strict'
const fs = require('fs');

module.exports = function(dir, ext, callback){
	const re = RegExp('.*\.'+ext+'$', 'i');
	fs.readdir(dir, function(err, files){
		if (err) {
			return callback(err)
		} 
		files = files.filter(x=>re.test(x));
		callback(null, files);
	})
}
