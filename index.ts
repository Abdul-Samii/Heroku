import express from 'express';
import { App } from './services';
const passportSetup = require("./Strategy/passport");
import dbConnection from './services/Database';
const port = process.env.PORT || 9000
const StartServer = async() =>{
    const app = express();
    await dbConnection();
    await App(app);

    app.listen(port,()=>{
        console.clear();
        console.log("Hello World");
    })
}

StartServer();