const express = require('express')
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

// crear servidor express
const app = express()

// Base de datos
dbConnection();

// CORS
app.use(cors())


// Lectura y parseo del body
app.use( express.json() );

// Directorio Público
app.use( express.static('public') );



// Rutas
app.use('/api/auth', require('./routes/auth') );
// TODO: CRUD: Eventos
app.use('/api/events', require('./routes/events') );



// escuchar peticiones
app.listen(process.env.PORT, () => {
   console.log('servidor corriendo en el puerto '+ process.env.PORT)
})