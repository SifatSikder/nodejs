const http =require('http');
const server=http.createServer();


server.on('request',(req,res) => {

    if(req.url=='/') res.end(`welcome`);//end my request+write to the page
    else if(req.url=='/about')res.end(`this is about`);
    else res.end(
        `<h1>Sorry</h1>
        <p>This page doesnt exist</p>
        <a href="/">Back to Home</a>`
    );
})

server.listen(5000);