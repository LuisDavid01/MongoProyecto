/*
    Aqui empieza la aplicación API del proyecto

    --Importante instalar las dependencias antes de correr el proyecto.
        correr los siguientes comandos en la consola en la raiz de la carpeta ./api
        npm install express
        npm install dotenv
        npm install mongoose
        npm install body-parser

    Ya podrias correr el proyecto :D
*/
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const UsuariosRoutes = require('./routes/UsuariosRoutes');

const app = express();
//se conecta la base de datos al correr el script
connectDB();
// Middleware
app.use(bodyParser.json());
 
// Rutas
app.use('/api', UsuariosRoutes);

const PORT = process.env.PORT ?? 8760; // valor por defecto del puerto es 8760
app.listen(PORT, () => console.log('El servidor esta corriendo en el puerto: ', PORT));