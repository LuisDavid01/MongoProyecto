/*
    Aqui empieza la aplicación API del proyecto

    --Importante instalar las dependencias antes de correr el proyecto.
        correr los siguientes comandos en la consola en la raiz de la carpeta ./api
        npm install express
        npm install dotenv
        npm install mongoose
        

        comando para correr la base de datos:
        mongod --port 27025 --dbpath "C:\data\db\eataway"

    Ya podrias correr el proyecto :D
*/
const express = require('express');

const connectDB = require('./config/db');
//importamos el enrutamiento para usuarios
const UsuariosRoutes = require('./routes/UsuariosRoutes');
const CategoriasRoutes = require('./routes/CategoriasRoutes');
const MenusRoutes = require('./routes/MenusRoutes');
const app = express();
//se conecta la base de datos al correr el script
connectDB();
// Middleware
app.use(express.json());
 
// Rutas
app.use('/api', UsuariosRoutes);
app.use('/api', CategoriasRoutes);
app.use('/api',MenusRoutes);
const PORT = process.env.PORT ?? 8760; // valor por defecto del puerto es 8760
app.listen(PORT, () => console.log('El servidor esta corriendo en el puerto: ', PORT));