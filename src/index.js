// const app= require('./server.js');
import app from './server.js'
// require('dotenv').config();
import 'dotenv'
import './database.js'
import { config } from 'dotenv'
// require('./database.js')
config()
app.listen(app.get('port'), ()=>{
    console.log('puerto 3000 listo')
})