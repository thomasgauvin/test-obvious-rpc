import express, { Express } from "express" ;
import obviousMiddleware from "./server";
import * as procedures from "./procedures/helloname";
var cors = require('cors')

const app: Express = express();
const port = 8080; // default port to listen

app.use(cors())

console.log(JSON.stringify(procedures))
app.use('/rpc', express.json(), obviousMiddleware(procedures));

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );