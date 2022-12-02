const express= require('express');
const path= require('path');
const {engine}= require('express-handlebars');
// inicializar
const app= express();
// settings
app.set('port', process.env.PORT||4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',engine({
    layoutDefault: 'mail',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine' ,'.hbs')
// middlewares
app.use(express.urlencoded({extended: false}));

// globar variables
// routes
app.get('/', (req,res)=>{
    res.render('index')
})
// statics
app.use(express.static(path.join(__dirname,'public')))
module.exports=app;