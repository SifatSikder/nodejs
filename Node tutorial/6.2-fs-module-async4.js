//instead of using util we can just use the .promises propertie of require and after that
//every async function will return a promise 
//this is the final and simplest version which we will use thoroughout this course
const {readFile,writeFile} = require('fs').promises;

const read = async()=>{
    try {
        const first = await readFile('./content/first.txt','utf8');
        console.log(first);
    } catch (error) {
        console.log(error);
    }
    
}





read();