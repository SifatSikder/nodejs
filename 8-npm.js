//local dependency ---use it only in this particular project
//npm i <package_name>

//global dependency ---use it in any project
//npm install -g <package_name>


//package.json ---manifest file(stores important info about project/package)
//manual approach (create package.json in the root,create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');
console.log(_.flattenDeep([1,[2,[3,[4,5]]]]));