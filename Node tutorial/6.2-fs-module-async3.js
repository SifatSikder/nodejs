//here we are using util module and promisify function which will force the async function(readFile)
//to return a promise and thats how we will not need to write an extra function to make the async
//function return a promise

const {readFile,writeFile} = require('fs');

const util = require('util');
const read_file = util.promisify(readFile);

const read = async()=>{
    try {
        const first = await read_file('./content/first.txt','utf8');
        console.log(first);
    } catch (error) {
        console.log(error);
    }
    
}

read();