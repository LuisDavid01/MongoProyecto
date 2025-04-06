/*
    Aqui empieza la aplicación API del proyecto

    --Importante instalar las dependencias antes de correr el proyecto.
        correr el siguiente comando en la consola en la raiz de la carpeta ./api
        
        npm install 
        

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
const UbicacionesRoutes = require('./routes/UbicacionesRoutes');
const HorariosRoutes = require('./routes/HorariosRoutes');
const FotosRoutes = require('./routes/FotoRoutes');
const LocalesRoutes = require('./routes/LocalesRoutes');
const EventosEspecialesRoutes = require('./routes/EventosEspecialesRoutes');
const ContactosRoutes = require('./routes/ContactosRoutes');
const ContactoNegocio = require('./routes/ContactoNegocioRoutes');
const app = express();
//se conecta la base de datos al correr el script
connectDB();
// Middleware
app.use(express.json());
 
// Rutas
app.use('/api', UsuariosRoutes);
app.use('/api', CategoriasRoutes);
app.use('/api',MenusRoutes);
app.use('/api', UbicacionesRoutes);
app.use('/api', HorariosRoutes);
app.use('/api', FotosRoutes);
app.use('/api', LocalesRoutes);
app.use('/api', EventosEspecialesRoutes);
app.use('/api', ContactosRoutes);
app.use('/api', ContactoNegocio);

const PORT = process.env.PORT ?? 8760; // valor por defecto del puerto es 8760
app.listen(PORT, () => console.log('El servidor esta corriendo en el puerto: ', PORT));