//here we are using async await to avoid the usage of then and catch 
//but writing an extra function to return the promise which contains the callback function is not looking good
//instead we can write 2 simple line of code and remove the function which is returning the promise


const {readFile,writeFile} = require('fs');

const get_text = (path,encoding)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,encoding,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}


const read = async()=>{
    try {
        const first = await get_text('./content/first.txt','utf8');
        console.log(first);
    } catch (error) {
        console.log(error);
    }
    
}

read();