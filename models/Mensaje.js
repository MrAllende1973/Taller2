const mongoose = require("mongoose");
const {Schema} = mongoose;

const mensajeSchema = new Schema({
    origin: {
        type: String,
        unique: false,
        required: true
    }
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);
module.exports = Mensaje;

