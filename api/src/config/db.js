/*
    Archivo de configuracion de la base de datos



*/
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//esta funcion configura la variable de entorno que tiene la url de la conexion con mongo
dotenv.config();

const connectDB = async () =>{
    try{

        await mongoose.connect(process.env.databaseUrl,{
        });
        console.log('Mongodb conectado');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;