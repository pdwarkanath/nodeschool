const fs = require('fs');

const dir = process.argv[2];
const re = RegExp('.*\.'+process.argv[3]+'$', 'i');

fs.readdir(dir, function(err, files){
	console.log(files.filter(x=>re.test(x)).join('\n'));
})