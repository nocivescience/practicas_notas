// const express= require('express');
import express from 'express';
// const path= require('path');
import path from 'path';
// const morgan= require('morgan');
import morgan from 'morgan';
// const {engine}= require('express-handlebars');
import {engine} from 'express-handlebars';
import indexRouter from './routes/index.routes.js';
import notesRouter from './routes/notes.routes.js';
import usersRouter from './routes/users.routes.js';
// inicializar
const app= express();
const __dirname= path.resolve();
// settings
app.set('port', process.env.PORT||4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine' ,'.hbs')
// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));

// globar variables
// routes
app.use(indexRouter);
app.use(notesRouter);
app.use(usersRouter);
// statics
app.use(express.static(path.join(__dirname,'public')))
// module.exports=app;
export default app;