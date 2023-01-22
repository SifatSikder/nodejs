//================================================================asynchronous================================================================
//asynchronous is good because it just not execute the code line by line 
//for this reason multiple user can use the app at the same time



//Here we will see the basics of asynchronous function but as it is clear that the code will be 
//harder if we nest all asynchronous functions like below so in the upcoming 4 codes will refactor it
//and remove the nesting which will make the async functions so simpler in the final version(6.2-fs-module-async4.js) 
const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,first)=>{
    if(err) return;
    readFile('./content/second.txt','utf8',(err,second)=>{
        if(err) return;
        writeFile('./content/result-async.txt',
        `The contents are: ${first} and ${second}`,
        {flag: 'a'},
        (err,result)=>{
            if(err) return;
        })
    })
})