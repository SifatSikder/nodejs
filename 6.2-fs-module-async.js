//================================================================asynchronous================================================================
//asynchronous is good because it just not execute the code line by line 
//for this reason multiple user can use the app at the same time

const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,first)=>{
    if(err) return;
    readFile('./content/second.txt','utf8',(err,second)=>{
        if(err) return;
        writeFile('./content/result-async.txt',
        `The contents are: ${first} and ${second}`,
        {flag: 'a'},
        (err,result)=>{if(err) return;})
    })
})