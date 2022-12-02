const express= require('express');
const path= require('path');
// inicializar
const app= express();
// settings
app.set('port', process.env.PORT||400