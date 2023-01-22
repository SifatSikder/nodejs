

const {readFileSync} = require( 'fs' );
const homepage =readFileSync('./index.html');


const http = require( 'http' );
const server = http.createServer( ( req, res ) =>
{

    if ( req.url == '/' ) 
    {
        res.writeHead( 200, { 'content-type': 'text/html' } )
        res.write(homepage)
        res.end();
    }
    else if ( req.url == '/about' )
    {
        res.writeHead( 200, { 'content-type': 'text/html' } )
        res.write( `this is about` )
        res.end();

    }
    else 
    {
        res.writeHead( 404, { 'content-type': 'text/html' } )
        res.write(
            `<h1>Sorry</h1>
         <p>This page doesnt exist</p>
         <a href="/">Back to Home</a>`
        )
        res.end();

    }
} );

server.listen( 5000 );