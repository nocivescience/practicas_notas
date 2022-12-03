const express= require('express');
const path= require('path');
const morgan= require('morgan');
const {engine}= require('express-handlebars');
// inicializar
const app= express();
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
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'))
// statics
app.use(express.static(path.join(__dirname,'public')))
module.exports=app;