//CommonJS, every file is module by default
//Modules - Encapsulated code (only share minimum)


const names= require('./2.1-names');
const sayHI= require('./2.2-functions');

sayHI(names.john)
sayHI(names.peter)