//2ways to use file system module 
//asynchronously (none blocking)
//synchronously (blocking)



//================================================================synchronous================================================================
//not good because it executes code line by line and for this reason only 1user at a time can use this app

const {readFileSync,writeFileSync}=require('fs');

// const fs=require('fs'); //==> same as the above line->const {readFileSync}=require('fs');
// fs.readFileSync(path)


//reading files
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);

//creating a new file
writeFileSync(
    './content/result-sync.txt',
    `The contents are: ${first} and ${second}`,
    {flag:'a'}
);



