const mongoose=require('mongoose');
//Acceder a la url de mi base de datos 
require('dotenv').config({path:'variables.env'});

const conectarDB= async()=>{

        try{
            await mongoose.connect(process.env.DB_MONGO,{
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            //Mensaje
            console.log('DB Conectada!');
        }
        catch(error){
            console.log(error);
            process.exit(1);
        }
}
module.exports=conectarDB;