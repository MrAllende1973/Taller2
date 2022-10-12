const mongoose = require('mongoose');

mongoose
    .connect(process.env.URI)
    .then( () => console.log('Base de Datos Conectada 🔌📡'))
    .catch( (e) => console.log('Fallo la Conexion con la Base de Datos ⛏⏳'))


    