//local dependency ---use it only in this particular project
//npm i <package_name>

//global dependency ---use it in any project
//npm install -g <package_name>


//package.json ---manifest file(stores important info about project/package)
//manual approach (create package.json in the root,create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');
console.log(_.flattenDeep([1,[2,[3,[4,6]]]]));

//installing nodemon
//npm i nodemon -D here -D means it will setup the dependency as devdependencies
//after that we will go to the package.json file and in the script we will write
//"start": "node \"/home/sifat/3-1/3-1/Web Technology/NodeJS/8-npm.js\"", ==> to execute this in terminal we will write npm start or npm run start  
//"dev": "nodemon \"/home/sifat/3-1/3-1/Web Technology/NodeJS/8-npm.js\"" ==>to execute this in terminal we will write npm run dev
//when we make a change in our code nodemon will change it in the terminal. So we dont have to run the code everytime

//uninstall a package
//node uninstall packagename
