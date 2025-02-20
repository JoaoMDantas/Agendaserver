import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import flash from 'connect-flash'
import { configDotenv } from 'dotenv';
import helmet from 'helmet';
import csrf from 'csurf';
import {route} from './src/routers/router.js';
import path from 'path';
import { security, logger } from './src/middlewares/middleGlobal.js';
configDotenv();
const app=express();
app.use(helmet());
mongoose.connect(process.env.CONNECTSTRING)
.then(()=>{
    console.log('conectei a base');
    app.emit('pronto');
})
.catch((e)=>console.log('error no mongoose server.js'+ e))

const sessionOption=session({
    secret:'1234567890',
    store:  MongoStore.create({ mongoUrl: process.env.CONNECTSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*10,
        httpOnly: true
    }

});

app.use(sessionOption);
app.use(flash());



app.use(express.urlencoded({ extended:true }));

app.use(express.json());

app.use(express.static('./public'));

app.set('views',path.resolve('./', 'src', 'views'));

app.set('view engine', 'ejs');
app.use(csrf());
// app.use(checkCsrfError)
app.use(security);
app.use(logger);
app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  });
app.use(route);

app.on('pronto', ()=>{

    app.listen(3000, ()=>{
        console.log('http://localhost:3000');
        console.log('servidor na porta 3000')
    });



})
