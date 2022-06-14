//console.log("Hola desde el Servidor");
//iniciamos una constante que importe EXPRESS
const express=require("express");
//const { get } = require("mongoose");

const conectarDB=require('./config/db');

//creando conexion al servidor con express

const app=express();

const port=2000;

conectarDB();
//Redirigimos la solicitud del cliente hacia el routes
app.use('/api/productos', require('./routes/producto'));


//Definir una ruta principal
//Utilizar el verbo get
//indicar una ruta
app.get('/', (req,res)=>{
    res.send('Hello World!');
})


//Agregando un puerto para mostrar un mensaje

app.listen(port, ()=>{
    console.log("Servidor iniciado");
})
