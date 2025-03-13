/*
    Aqui empieza la aplicación API del proyecto

    --Importante instalar las dependencias antes de correr el proyecto.
        correr los siguientes comandos en la consola en la raiz de la carpeta ./api
        npm install express
        npm install dotenv
        npm install mongoose

    Ya podrias correr el proyecto :D
*/

const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 8760; // valor por defecto del puerto es 5000
app.listen(PORT, () => console.log('El servidor esta corriendo en el puerto: ', PORT));