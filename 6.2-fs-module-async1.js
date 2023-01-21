//Here we will avoid nesting by using Promise and inside the promise we will place the callback
//function. Also, here we are using properties(then and catch) of promise to execute the function
//then and catch seems kinda hard to implement so the next code will use async await to remove the
//usage of then and catch

const {readFile,writeFile} = require('fs');

const get_text = (path,encoding)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,encoding,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

get_text('../content/first.txt','utf8').then((data)=>{console.log(data);}).catch((err)=>{console.log(err)});





