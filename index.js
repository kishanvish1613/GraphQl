const express = require('express');
const bodyParser = require('body-parser');
const server = require('./middlewares/apollo-server')
const {expressMiddleware} = require('@apollo/server/express4')

async function startServer () {
    
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    await server.start();

    app.use('/api/v1', expressMiddleware(server));

    app.listen(8000, () => {
        console.log(`server started at 8000`);
    });
}

startServer();