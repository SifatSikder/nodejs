// ---------------path MODULE----------------------

const path = require('path');
console.log(path.sep);//returns a platform specific separator

const filepath=path.join('/content','/subfolder','/test.txt'); //create path location
console.log(filepath);

console.log(path.basename(filepath)); // returns file name
console.log(path.resolve(__dirname,'content','subfolder','test.txt')); //create absolute path location