const fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2]);

const str = fileContents.toString();

console.log(str.split('\n').length-1);