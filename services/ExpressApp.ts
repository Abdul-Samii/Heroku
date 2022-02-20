import express, {Application} from 'express';
import bodyParser from 'body-parser';
import { Strategy } from 'passport-facebook';
import passport from 'passport';
import session from 'express-session';
import { AuthRoute, UserRoute } from '../routes';
import cors from 'cors';
import path from 'path';

export default async(app:Application)=>{
    //user
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/images',express.static(path.join(__dirname,'images')));
// Authentication configuration
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));
    app.use(passport.initialize());
    app.use(passport.session());


    app.use('/Auth',AuthRoute);
    app.use('/user',UserRoute);
    



    //Routes

    return app;
}