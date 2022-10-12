const Mensaje = require('../models/Mensaje');

const leerMensaje = async(req, res) => {
    try {
        const mensajes = await Mensaje.find().lean();
        res.render("home", {mensajes: mensajes});
    } catch (error) {
        console.log(error);
        res.send('Error, algo Falló');
    }
};

const agregarMensaje = async(req, res) => {
    const {origin} = req.body;
    try {
        const mensaje = new Mensaje({origin: origin});
        await mensaje.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send('Error, algo Falló');
    }
};

const eliminarMensaje = async(req, res) => {
    const {id} = req.params;
    try {
        await Mensaje.findByIdAndDelete(id);
        res.redirect("/")
    } catch (error) {
        console.log(error);
        res.send('Error, algo Falló');
    }
};

const editarMensajeForm = async(req, res) => {
    const {id} = req.params;
    try {
        const mensaje = await Mensaje.findById(id).lean();
        res.render("home", {mensaje}) ;
    } catch (error) {
        console.log(error);
        res.send('Error, algo Falló');
    }
};

const editarMensaje = async(req, res) => {
    const {id} = req.params;
    const {origin} = req.body;
    try {
        await Mensaje.findByIdAndUpdate(id, {origin: origin});
        res.redirect("/");
    } catch (error) {
        console.log(error);
        res.send('Error, algo Falló');
    }
};


module.exports = {
    leerMensaje,
    agregarMensaje,
    eliminarMensaje,
    editarMensajeForm,
    editarMensaje
}