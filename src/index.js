require('dotenv').config();
const app= require('./server.js');
require('./database.js')
app.listen(app.get('port'), ()=>{
    console.log('puerto 3000 listo')
})