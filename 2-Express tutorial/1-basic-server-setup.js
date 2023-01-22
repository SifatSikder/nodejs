

const {readFileSync} = require( 'fs' );
const homepage =readFileSync('./navbar-app/index.html');
const homeimage =readFileSync('./navbar-app/logo.svg');
const homelogic =readFileSync('./navbar-app/browser-app.js');
const homecss =readFileSync('./navbar-app/styles.css');


const http = require( 'http' );
const server = http.createServer( ( req, res ) =>
{
    console.log(req.url);
    if ( req.url == '/' ) 
    {
        res.writeHead( 200, { 'content-type': 'text/html' } )
        res.write(homepage)
        res.end();
    }
    else if ( req.url == '/styles.css' ) 
    {
        res.writeHead( 200, { 'content-type': 'text/css' } )
        res.write(homecss)
        res.end();
    }
    else if ( req.url == '/logo.svg' ) 
    {
        res.writeHead( 200, { 'content-type': 'image/svg+xml' } )
        res.write(homeimage)
        res.end();
    }
    else if ( req.url == '/browser-app.js' ) 
    {
        res.writeHead( 200, { 'content-type': 'text/javascript' } )
        res.write(homelogic)
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