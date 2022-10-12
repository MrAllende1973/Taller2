/* ###########################CREACION DE SERVIDOR HTTP CON NODEJS; MONGODB y HBS########################## */

/* ----------------------------------------------------------- */
//Funcionalidades de Express para poder levantar el Servidor HTTP
const express =require("express");
const app = express();
/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */
//Funcionalidades del Motor de Plantilla HBS
const {create} = require('express-handlebars')
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});
/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */
//conexion a la Base de Datos
require('dotenv').config()
require('./database/db')
/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */
//Middlewares para archivos estaticos y para poder leer el Req.Body
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */
//Middlewares para Implementacion el Motor de Plantilla
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */
//Middlewares para el manejo de las rutas o endpoints
app.use("/", require('./routes/home'));
/* ----------------------------------------------------------- */

/* ----------------------------------------------------------- */
//SERVIDOR EJECUTANDO APLICACION WEB Y LISTO PARA RECIBIR PETICIONES
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("El Servidor Esta Corriendo en el Puerto: ", PORT))
/* ----------------------------------------------------------- */
/* ######################################################################################################## */