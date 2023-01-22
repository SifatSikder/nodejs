//streams are used to read or write sequentially.
//streams are used when we have the need to maintain continous source or big file
//there are 4 types of streams in nodejs
//writeable---used to write data sequentially
//readable---used to read data sequentially
//duplex-----used to both read & write data sequentially
//transform--data can be modified when writing or reading
//streams extend event emitter class
//by default buffer size is set to 64Kb
//last buffer is the remainder part of file less than 64Kb
//highWaterMark controls the maximum buffer size

const {createReadStream} = require('fs');

// const stream =createReadStream('./content/big.txt','utf8');
const stream =createReadStream('../content/big.txt','utf8',{highWaterMark:90000}); //90000 bytes

stream.on('data',(data)=>{
    console.log(data);
})

stream.on('error',(error)=>{
    console.log(error);
})


