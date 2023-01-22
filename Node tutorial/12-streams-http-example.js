const {readFileSync,createReadStream}=require('fs');

const http =require('http');
const server=http.createServer((req,res) => {
    // const text = readFileSync('./content/big.txt','utf8');
    const file_stream = createReadStream('./content/big.txt','utf8');
    file_stream.on('open', ()=>{
        //the pipe function will push from read stream into the write stream which means
        //we read data into chunks and we will write data on (res) into chunks
        //res can be set up as a writeable stream
        file_stream.pipe(res); 
    })

    file_stream.on('error', (error)=>{
        res.end(error);
    })
    

});
server.listen(5000);