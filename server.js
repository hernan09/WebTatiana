const express = require('express');
const app = express();
var bodyParser = require('body-parser') ;
const path=require('path');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())//esto por ejemplo es un midelware que son funciones que se van a ejecutar cada ves que pase por ahí el codigo

//habilitar la carpeta public para que pueda ser accedida desde el browser
app.use(express.static( path.resolve(__dirname, './dist/my-dream-app')));//necesitamos el path que resuelva la ruta
console.log("ruta del servidor", path.resolve( __dirname, './public') );
//congif global de rutas
//app.use( require('./routes/index'));

/*mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
},(err, res)=>{

    if ( err ) throw err;

    console.log('Base de datos ONLINE');

});*/

app.listen(3000,()=>{
    console.log('escuchando  test en el puerto ',3000);
}) 